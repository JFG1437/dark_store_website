// import { Link } from 'react-router-dom';

// export const Navbar = () => (
//   <nav className="bg-white shadow-sm">
//     <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold text-blue-600">DarkStoreFinder</Link>
//       <div className="space-x-4">
//         <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
//         <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
//         <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
//       </div>
//     </div>
//   </nav>
// );









import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="bg-gray-900 shadow-md border-b border-slate-700">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-extrabold text-blue-400 hover:text-blue-300 transition">
        DarkStoreFinder
      </Link>
      <div className="space-x-6 text-base font-medium">
        <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
      </div>
    </div>
  </nav>
);
