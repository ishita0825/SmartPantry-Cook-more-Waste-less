import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">🥗 SmartPantry</h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-green-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-200">
            About
          </Link>
          <Link to="/dashboard" className="hover:text-green-200">
            Dashboard
          </Link>
          <Link to="/login" className="hover:text-green-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;