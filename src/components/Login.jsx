import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    // Mock login logic - in a real app, this would call an API
    setTimeout(() => {
      // For demo purposes, we'll use some hardcoded credentials
      if (email === "admin@example.com" && password === "admin123") {
        // Admin login
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("userName", "Admin User");
        navigate("/dashboard");
      } else if (email === "student@example.com" && password === "student123") {
        // Student login
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "false");
        localStorage.setItem("userName", "John Doe");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#303030]">Login</h2>
            <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-6"></div>
            <p className="text-lg text-[#667085]">
              Access your KTIP student account
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#EAECF0]">
            {error && (
              <div className="mb-6 p-4 bg-[#FEF3F2] border border-[#FDA29B] rounded-md">
                <p className="text-[#B42318]">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#344054] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#344054] mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-[#7F56D9] focus:ring-[#7F56D9] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-[#344054]"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#7F56D9] hover:text-[#6941C6]"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-4 rounded-md shadow transition-all flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#667085]">
                Don't have an account?{" "}
                <a
                  href="/applynow"
                  className="font-medium text-[#7F56D9] hover:text-[#6941C6]"
                >
                  Apply Now
                </a>
              </p>
            </div>

            <div className="mt-8 border-t border-[#EAECF0] pt-6">
              <div className="text-center text-sm text-[#667085]">
                <p className="mb-2">Demo Credentials:</p>
                <p><strong>Admin:</strong> admin@example.com / admin123</p>
                <p><strong>Student:</strong> student@example.com / student123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;