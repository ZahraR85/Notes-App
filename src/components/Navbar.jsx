import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-custom-gradient p-6 m-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Note-App
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/">Home</Link>

          {/* School Note Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white"
            >
              School Note
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white rounded shadow-lg">
                <Link
                  to="/school-notes"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  View All Notes
                </Link>
                <Link
                  to="/school-notes/new" 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Add New Note
                </Link>
              </div>
            )}
          </div>

          {/* Sign In and Register Links */}
          <Link to="/signin">Sign In</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
