import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  return (
    <nav className="bg-custom-gradient p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Note-App
        </Link>
        <div className="flex space-x-6 items-center text-white">
          <Link to="/">Home</Link>
            {/* Diary Dropdown */}
            <div className="relative">
            <button
              onClick={() => setDropdownOpen1(!dropdownOpen1)}
              className="text-white"
            >My Diaries  <i className="fas fa-chevron-down ml-1 text-xs"></i> {/* Font Awesome icon */}
            </button>
            {dropdownOpen1 && (
              <div className="absolute mt-2 mr-40 w-40 bg-custom-gradient rounded shadow-lg">
                <Link
                  to="/diary-list"
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen1(false)}
                >
                  View All Diaris
                </Link>
                <Link
                  to="/diary-list/new" 
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen1(false)}
                >
                  Add New Diary
                </Link>
              </div>
            )}
          </div>
          {/* School Note Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen2(!dropdownOpen2)}
              className="text-white"
            >School Notes  <i className="fas fa-chevron-down ml-1 text-xs"></i> {/* Font Awesome icon */}
            </button>
            {dropdownOpen2 && (
              <div className="absolute mt-2 w-40 bg-custom-gradient rounded shadow-lg">
                <Link
                  to="/school-notes"
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen2(false)}
                >
                  View All Notes
                </Link>
                <Link
                  to="/school-notes/new" 
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen2(false)}
                >
                  Add New Note
                </Link>
              </div>
            )}
          </div>
          {/* Sign In and Register Links */}
          <Link to="/signin" className='text-white'>Sign In</Link>
          <Link to="/register" className='text-white'>Register</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
