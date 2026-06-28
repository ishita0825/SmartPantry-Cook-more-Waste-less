import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Input } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/api";
import Loader from "../components/ui/loader";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await authService.login(email, password);

      if (response.error) {
        setError(response.error);
      } else {
        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Failed to login. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow dark:bg-gray-900">
          <h1 className="mb-2 text-3xl font-bold">Login</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Access your SmartPantry account.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-green-600 dark:text-green-400"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
