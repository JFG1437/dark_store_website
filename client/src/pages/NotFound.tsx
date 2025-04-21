// import { Link } from 'react-router-dom';

// export const NotFound = () => (
//   <div className="min-h-screen flex items-center justify-center bg-gray-50">
//     <div className="text-center p-8 bg-white rounded-xl shadow-lg">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
//       <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
//       <Link 
//         to="/" 
//         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//       >
//         Return Home
//       </Link>
//     </div>
//   </div>
// );



import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center animate-fadeIn">
      {/* Emoji Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-red-100 text-red-600 p-4 rounded-full text-4xl">
          ❌
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
        404 - Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        ← Return Home
      </Link>
    </div>
  </div>
);
