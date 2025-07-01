// Determine API URL based on environment
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api' // Relative path for monorepo deployment
  : 'http://localhost:5000/api'; // In development, use localhost

export const apiCall = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};