// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { FaExternalLinkAlt } from 'react-icons/fa';
// import 'leaflet/dist/leaflet.css';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// interface Location {
//   rank: number;
//   name: string;
//   address: string;
//   lat: number;
//   lon: number;
// }

// export const ResultsPage = () => {
//   const { city } = useParams();
//   const [locations, setLocations] = useState<Location[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/locations/${city}`);
//         const data = await response.json();
//         if (data.error) throw new Error(data.error);
//         setLocations(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Invalid location');
//       }
//     };
//     fetchData();
//   }, [city]);

//   if (error) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center p-8 bg-white rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">{error}</h2>
//         <p className="text-gray-600 mb-4">We're currently working on this location</p>
//         <a href="/" className="text-blue-600 hover:underline">Back to Search</a>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">
//         Top {locations.length} Dark Store Locations in {city}
//       </h1>

//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Table Section */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-4 text-left">Rank</th>
//                 <th className="p-4 text-left">Location Name</th>
//                 <th className="p-4 text-left">Address</th>
//                 <th className="p-4 text-left">Coordinates</th>
//               </tr>
//             </thead>
//             <tbody>
//               {locations.map((loc) => (
//                 <tr key={loc.rank} className="border-t hover:bg-gray-50">
//                   <td className="p-4 font-medium">{loc.rank}</td>
//                   <td className="p-4">{loc.name}</td>
//                   <td className="p-4 text-gray-600">{loc.address}</td>
//                   <td className="p-4 text-blue-600">{loc.lat}, {loc.lon}
//                   <a
//                       href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lon}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline text-sm flex items-center gap-1"
//                     >
//                       Open in Google Maps <FaExternalLinkAlt size={12} />
//                   </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Map Section */}
//         <div className="h-[600px] rounded-xl shadow-lg overflow-hidden">
//           <MapContainer
//             center={[locations[0]?.lat || 19.155, locations[0]?.lon || 72.995]}
//             zoom={13}
//             className="h-full"
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; OpenStreetMap contributors'
//             />
//             {locations.map((loc) => (
//               <Marker key={loc.rank} position={[loc.lat, loc.lon]}>
//                 <Popup className="text-sm">
//                   <strong>{loc.name}</strong><br/>
//                   {loc.address}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </div>
//     </div>
//   );
// };


















import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaExternalLinkAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Location {
  rank: number;
  name: string;
  address: string;
  lat: number;
  lon: number;
}

export const ResultsPage = () => {
  const { city } = useParams();
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/locations/${city}`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setLocations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Invalid location');
      }
    };
    fetchData();
  }, [city]);

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{error}</h2>
        <p className="text-gray-400 mb-4">We're currently working on this location</p>
        <a href="/" className="text-blue-400 hover:underline">Back to Search</a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-8">
        Top {locations.length} Dark Store Locations in {city}
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Table Section */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700 text-gray-300">
              <tr>
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Location Name</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Coordinates</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc) => (
                <tr key={loc.rank} className="border-t border-slate-700 hover:bg-gray-700 transition">
                  <td className="p-4 font-semibold">{loc.rank}</td>
                  <td className="p-4 text-gray-400">{loc.name}</td>
                  <td className="p-4 text-gray-400">{loc.address}</td>
                  <td className="p-4 text-blue-300">
                    {loc.lat}, {loc.lon}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-400 underline text-xs mt-1 flex items-center gap-1"
                    >
                      Open in Google Maps <FaExternalLinkAlt size={10} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Map Section */}
        <div className="h-[600px] rounded-xl shadow-lg overflow-hidden">
          <MapContainer
            center={[locations[0]?.lat || 19.155, locations[0]?.lon || 72.995]}
            zoom={13}
            className="h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {locations.map((loc) => (
              <Marker key={loc.rank} position={[loc.lat, loc.lon]}>
                <Popup className="text-sm">
                  <strong>{loc.name}</strong><br />
                  {loc.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
