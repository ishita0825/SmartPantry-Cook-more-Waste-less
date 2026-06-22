import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ui";

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-bold text-green-600 dark:text-green-400"
        >
          SmartPantry
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            Dashboard
          </Link>
          <Link
            to="/ai-recipes"
            className="text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            AI Recipes
          </Link>
          <Link
            to="/settings"
            className="text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            Settings
          </Link>
          <Link
            to="/login"
            className="text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            Login
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
