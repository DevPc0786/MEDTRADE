const LoginForm = () => {
  return (
    <div className="w-80 lg:w-2/6 m-auto  rounded-lg bg-gray-100 px-10 h-72 mt-10 text-gray-800">
      <p className="text-center text-2xl font-bold text-blue-700">Login</p>
      <form className="mt-6">
        <div className="mt-1 text-sm">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-gray-800 focus:border-blue-700 outline-none"
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
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-gray-800 focus:border-blue-700 outline-none"
          />
          {/* <div className="flex justify-end text-xs text-gray-600 mt-2">
            <a href="#" className="hover:underline hover:text-blue-700">
              Forgot Password?
            </a>
          </div> */}
        </div>
        <button className="mt-4 w-full bg-blue-700 p-3 text-white rounded-md font-semibold">
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

export default LoginForm;
