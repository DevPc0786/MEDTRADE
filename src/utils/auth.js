// Function to generate a simple JWT token (in a real app, this would be done on the server)
export const generateToken = (userData) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };
  
  const payload = {
    ...userData,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours expiration
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = btoa('your-secret-key'); // In production, use a secure secret key

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

// Function to verify token
export const verifyToken = (token) => {
  try {
    const [encodedHeader, encodedPayload, signature] = token.split('.');
    const payload = JSON.parse(atob(encodedPayload));
    
    // Check if token is expired
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    
    return payload;
  } catch (error) {
    return null;
  }
}; 