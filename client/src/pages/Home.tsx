// import { SearchBar } from '../components/SearchBar';

// export const Home = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <div className="text-center space-y-8 px-4">
//       <h1 className="text-4xl font-bold text-gray-800">Find the Perfect Dark Store Locations</h1>
//       <SearchBar />
//       <div className="grid md:grid-cols-3 gap-6 mt-12">
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-bold mb-3">Strategic Locations</h2>
//           <p className="text-gray-600">Identify optimal locations based on population density and accessibility</p>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-bold mb-3">Data-Driven Decisions</h2>
//           <p className="text-gray-600">Comprehensive data analysis for informed business choices</p>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-bold mb-3">Fast Delivery</h2>
//           <p className="text-gray-600">Optimize logistics for under 30-minute deliveries</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );





import { SearchBar } from '../components/SearchBar';

export const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4">
    <div className="max-w-6xl w-full text-center space-y-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        Discover Ideal <span className="text-blue-600">Dark Store Locations</span>
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Use data-powered insights to find the most strategic and accessible areas for launching efficient dark stores across Mumbai and its suburbs.
      </p>

      <div className="max-w-3xl mx-auto">
        <SearchBar />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <FeatureCard 
          title="Strategic Locations" 
          description="Identify optimal areas using location intelligence based on population density, road networks, and nearby facilities." 
          icon="📍"
        />
        <FeatureCard 
          title="Data-Driven Decisions" 
          description="Back your expansion strategy with geospatial and economic indicators that influence performance." 
          icon="📊"
        />
        <FeatureCard 
          title="Fast Delivery" 
          description="Place your dark stores in zones optimized for rapid delivery within 30 minutes or less." 
          icon="🚚"
        />
      </div>
    </div>
  </div>
);

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

