import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { generateToken } from '@/utils/auth';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();
      
      // Find user with matching credentials
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Generate JWT token
        const token = generateToken(user);
        // Login user using context with token
        login(user, token);
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="w-80 lg:w-2/6 m-auto  rounded-lg bg-gray-100 px-10 h-72 mt-10 text-gray-800">
      <p className="text-center text-2xl font-bold text-blue-700">Login</p>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mt-1 text-sm">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-gray-800 focus:border-blue-700 outline-none"
            required
          />
        </div>
        <div className="mt-3 text-sm">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-gray-800 focus:border-blue-700 outline-none"
            required
          />
          {/* <div className="flex justify-end text-xs text-gray-600 mt-2">
            <a href="#" className="hover:underline hover:text-blue-700">
              Forgot Password?
            </a>
          </div> */}
        </div>
        <button 
          type="submit"
          className="mt-4 w-full bg-blue-700 p-3 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors"
        >
          Login
        </button>
      </form>
      {/* <div className="flex items-center pt-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <div className="flex justify-center mt-4">
        <button aria-label="Log in with Google" className="p-3 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-gray-800"
          ></svg>
        </button>
        <button aria-label="Log in with Twitter" className="p-3 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-gray-800"
          ></svg>
        </button>
        <button aria-label="Log in with GitHub" className="p-3 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-gray-800"
          ></svg>
        </button>
      </div> */}
      <p className="text-center text-xs text-gray-600 mt-4">
        Don't have an account?{" "}
        {/* <a href="#" className="hover:underline hover:text-blue-700">
          Sign up
        </a> */}
      </p>
    </div>
  );
};

export default AdminLoginForm;
