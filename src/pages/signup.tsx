import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Input } from "../components/ui";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow dark:bg-gray-900">
          <h1 className="mb-2 text-3xl font-bold">Create Account</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Join SmartPantry and start managing your pantry smarter.
          </p>

          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="w-full">Sign Up</Button>
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 dark:text-green-400"
            >
              Login
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
