import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">DarkStoreFinder</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
      </div>
    </div>
  </nav>
);