// export const Contact = () => (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Our Team</h1>
      
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Project Team</h2>
//           <div className="space-y-4">
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <h3 className="font-bold">Rahul Sharma</h3>
//               <p className="text-gray-600">Project Lead & Algorithm Designer</p>
//             </div>
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <h3 className="font-bold">Priya Patel</h3>
//               <p className="text-gray-600">Data Scientist & Visualization Expert</p>
//             </div>
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <h3 className="font-bold">Arjun Mehta</h3>
//               <p className="text-gray-600">Full Stack Developer</p>
//             </div>
//           </div>
//         </div>
  
//         <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
//           <form className="space-y-4">
//             <input 
//               type="email" 
//               placeholder="Your email" 
//               className="w-full p-3 rounded-lg border border-gray-200"
//             />
//             <textarea 
//               placeholder="Message" 
//               rows={4}
//               className="w-full p-3 rounded-lg border border-gray-200"
//             ></textarea>
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );



// export const Contact = () => (
//   <div className="container mx-auto p-6">
//     <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Contact Our Team</h1>

//     <div className="grid lg:grid-cols-2 gap-10">
//       {/* Team Members Section */}
//       <div className="bg-white p-6 rounded-2xl shadow-xl">
//         <h2 className="text-2xl font-semibold mb-6 text-blue-600">Project Team</h2>
//         <div className="space-y-4">
//           {[
//             { name: 'Onkar Deshmukh', regNo: '211060068', phone: '9876543210' },
//             { name: 'Jayant Gautam', regNo: '211060043', phone: '9123456780' },
//             { name: 'Sameer Bondhate', regNo: '211060065', phone: '9988776655' },
//             { name: 'Harsh Koulgi', regNo: '2111060002', phone: '9012345678' },
//             { name: 'Shantanu Mule', regNo: '211060053', phone: '9090909090' },
//           ].map((member) => (
//             <div
//               key={member.name}
//               className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
//             >
//               <h3 className="font-bold text-lg">{member.name}</h3>
//               <p className="font-bold text-black-500 italic text-sm">Reg. No: {member.regNo || '[Registration No]'}</p>
//               <p className="text-gray-700 text-sm mt-1">
//                 📞 <span className="font-medium">{member.phone}</span>
//               </p>
//             </div>
//           ))}
//         </div>
//     </div>

//       {/* Contact Form Section */}
//       <div className="bg-blue-50 p-8 rounded-2xl shadow-xl">
//         <h2 className="text-2xl font-semibold mb-6 text-blue-700">Get in Touch</h2>
//         <form className="space-y-5">
//           <input 
//             type="email" 
//             placeholder="Your email" 
//             className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
//           />
//           <input 
//             type="tel" 
//             placeholder="Your mobile number" 
//             className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea 
//             placeholder="Message" 
//             rows={4}
//             className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           <button 
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );












export const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-16 px-6">
    <h1 className="text-4xl font-bold text-gray-100 mb-10 text-center">Contact Our Team</h1>

    <div className="grid lg:grid-cols-2 gap-10">
      {/* Team Members Section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Project Team</h2>
        <div className="space-y-4">
          {[
            { name: 'Onkar Deshmukh', regNo: '211060068', phone: '9876543210' },
            { name: 'Jayant Gautam', regNo: '211060043', phone: '9123456780' },
            { name: 'Sameer Bondhate', regNo: '211060065', phone: '9988776655' },
            { name: 'Harsh Koulgi', regNo: '2111060002', phone: '9012345678' },
            { name: 'Shantanu Mule', regNo: '211060053', phone: '9090909090' },
          ].map((member) => (
            <div
              key={member.name}
              className="p-4 bg-gray-700 rounded-lg shadow-sm border border-gray-600"
            >
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="font-bold text-gray-400 italic text-sm">Reg. No: {member.regNo || '[Registration No]'}</p>
              <p className="text-gray-300 text-sm mt-1">
                📞 <span className="font-medium">{member.phone}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Get in Touch</h2>
        <form className="space-y-5">
          <input 
            type="email" 
            placeholder="Your email" 
            className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
          />
          <input 
            type="tel" 
            placeholder="Your mobile number" 
            className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
          />
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
          ></textarea>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);
