import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!employeeId || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await login(employeeId, password);
      if (result.userRole === 'super_admin') {
        navigate('/admin/super');
      } else if (result.userRole === 'domain_admin') {
        navigate('/admin/domain');
      } else if (result.userRole === 'evaluation_admin') {
        navigate('/admin/evaluation');
      } else if (result.userRole === 'support_admin') {
        navigate('/admin/support');
      } else if (result.userRole === 'hr_admin') {
        navigate('/admin/hr');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.message || "Invalid credentials");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gray-50">
      <div className="max-w-md w-full px-6 py-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-purple-700 mb-3 text-center">Welcome Back</h1>
        <p className="text-gray-600 mb-6 text-center">Please login to your account</p>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Employee ID</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter your ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="mb-2">Demo Credentials:</p>
          <p><strong>Admin:</strong> admin / admin123</p>
          <p><strong>HR Admin:</strong> hradmin / admin123</p>
          <p><strong>Student:</strong> student / student123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;