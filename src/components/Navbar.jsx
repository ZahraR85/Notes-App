import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-custom-gradient p-6 m-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          My-Personal-Diary
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-900">
            Home
          </Link>
          <Link to="/add-entry" className="text-white hover:text-gray-900">
            Add New Diary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
