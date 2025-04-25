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





// import { SearchBar } from '../components/SearchBar';

// export const Home = () => (
//   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4">
//     <div className="max-w-6xl w-full text-center space-y-10">
//       <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//         Discover Ideal <span className="text-blue-600">Dark Store Locations</span>
//       </h1>

//       <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//         Use data-powered insights to find the most strategic and accessible areas for launching efficient dark stores across Mumbai and its suburbs.
//       </p>

//       <div className="max-w-3xl mx-auto">
//         <SearchBar />
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 mt-16">
//         <FeatureCard 
//           title="Strategic Locations" 
//           description="Identify optimal areas using location intelligence based on population density, road networks, and nearby facilities." 
//           icon="📍"
//         />
//         <FeatureCard 
//           title="Data-Driven Decisions" 
//           description="Back your expansion strategy with geospatial and economic indicators that influence performance." 
//           icon="📊"
//         />
//         <FeatureCard 
//           title="Fast Delivery" 
//           description="Place your dark stores in zones optimized for rapid delivery within 30 minutes or less." 
//           icon="🚚"
//         />
//       </div>
//     </div>
//   </div>
// );

// type FeatureCardProps = {
//   title: string;
//   description: string;
//   icon: string;
// };

// const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
//   <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
//     <div className="text-4xl mb-4">{icon}</div>
//     <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
//     <p className="text-gray-600 text-sm">{description}</p>
//   </div>
// );










// import { SearchBar } from '../components/SearchBar';

// export const Home = () => (
//   <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 flex items-center justify-center py-16 px-6 relative overflow-hidden">
//     {/* Accent Blobs */}
//     <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" />
//     <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />

//     <div className="relative z-10 max-w-6xl w-full text-center space-y-14">
//       <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight drop-shadow">
//         Discover Ideal <span className="text-blue-700 bg-blue-100 px-3 py-1 rounded-xl">Dark Store Locations</span>
//       </h1>

//       <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
//         Use data-powered insights to find the most strategic and accessible areas for launching efficient dark stores across Mumbai and its suburbs.
//       </p>

//       <div className="max-w-2xl mx-auto">
//         <SearchBar />
//       </div>

//       <div className="grid md:grid-cols-3 gap-10 mt-20">
//         <FeatureCard 
//           title="Strategic Locations" 
//           description="Identify optimal areas using location intelligence based on population density, road networks, and nearby facilities." 
//           icon="🧭"
//           color="from-purple-400 to-purple-600"
//         />
//         <FeatureCard 
//           title="Data-Driven Decisions" 
//           description="Back your expansion strategy with geospatial and economic indicators that influence performance." 
//           icon="📈"
//           color="from-green-400 to-green-600"
//         />
//         <FeatureCard 
//           title="Fast Delivery" 
//           description="Place your dark stores in zones optimized for rapid delivery within 30 minutes or less." 
//           icon="⚡"
//           color="from-pink-400 to-pink-600"
//         />
//       </div>
//     </div>
//   </div>
// );

// type FeatureCardProps = {
//   title: string;
//   description: string;
//   icon: string;
//   color: string;
// };

// const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => (
//   <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1`}>
//     <div className={`text-5xl mb-4 bg-gradient-to-r ${color} text-white w-16 h-16 flex items-center justify-center rounded-full shadow-inner`}>
//       {icon}
//     </div>
//     <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
//     <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//   </div>
// );

















// import { SearchBar } from '../components/SearchBar';

// export const Home = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white flex items-center justify-center py-16 px-6 relative overflow-hidden">
//     {/* Subtle glowing background blobs */}
//     <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-800 rounded-full opacity-20 blur-3xl animate-pulse" />
//     <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />

//     <div className="relative z-10 max-w-6xl w-full text-center space-y-14">
//       <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
//         Discover Ideal <span className="text-blue-400 bg-blue-900 px-4 py-2 rounded-xl">Dark Store Locations</span>
//       </h1>

//       <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
//         Use data-powered insights to find the most strategic and accessible areas for launching efficient dark stores across Mumbai and its suburbs.
//       </p>

//       <div className="max-w-2xl mx-auto">
//         <SearchBar />
//       </div>

//       <div className="grid md:grid-cols-3 gap-10 mt-20">
//         <FeatureCard 
//           title="Strategic Locations" 
//           description="Identify optimal areas using location intelligence based on population density, road networks, and nearby facilities." 
//           icon="🧭"
//           color="from-indigo-500 to-purple-600"
//         />
//         <FeatureCard 
//           title="Data-Driven Decisions" 
//           description="Back your expansion strategy with geospatial and economic indicators that influence performance." 
//           icon="📈"
//           color="from-green-500 to-emerald-600"
//         />
//         <FeatureCard 
//           title="Fast Delivery" 
//           description="Place your dark stores in zones optimized for rapid delivery within 30 minutes or less." 
//           icon="⚡"
//           color="from-pink-500 to-red-500"
//         />
//       </div>
//     </div>
//   </div>
// );

// type FeatureCardProps = {
//   title: string;
//   description: string;
//   icon: string;
//   color: string;
// };

// const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => (
//   <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-slate-700">
//     <div className={`text-5xl mb-4 bg-gradient-to-r ${color} text-white w-16 h-16 flex items-center justify-center rounded-full shadow-inner`}>
//       {icon}
//     </div>
//     <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
//     <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
//   </div>
// );















import { SearchBar } from '../components/SearchBar';

export const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-16 px-6 relative overflow-hidden">
    {/* Background Blobs */}
    <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-800 rounded-full opacity-20 blur-3xl animate-pulse" />
    <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />

    <div className="relative z-10 max-w-7xl mx-auto text-center space-y-14">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
        Discover Ideal <span className="text-blue-400 bg-blue-900 px-4 py-2 rounded-xl">Dark Store Locations</span>
      </h1>

      <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        Use data-powered insights to find the most strategic and accessible areas for launching efficient dark stores across Mumbai and its suburbs.
      </p>

      <div className="max-w-2xl mx-auto">
        <SearchBar />
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        <FeatureCard 
          title="Strategic Locations" 
          description="Identify optimal areas using location intelligence based on population density, road networks, and nearby facilities." 
          icon="🧭"
          color="from-indigo-500 to-purple-600"
        />
        <FeatureCard 
          title="Data-Driven Decisions" 
          description="Back your expansion strategy with geospatial and economic indicators that influence performance." 
          icon="📈"
          color="from-green-500 to-emerald-600"
        />
        <FeatureCard 
          title="Fast Delivery" 
          description="Place your dark stores in zones optimized for rapid delivery within 30 minutes or less." 
          icon="⚡"
          color="from-pink-500 to-red-500"
        />
      </div>

      {/* How It Works Section */}
      <section className="mt-28 space-y-12">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <StepCard
            title="1. Enter Area"
            description="Type the area or neighborhood in the search bar to begin your search."
            icon="📍"
          />
          <StepCard
            title="2. Get Smart Insights"
            description="Our engine processes the locality data and identifies key opportunity zones."
            icon="🧠"
          />
          <StepCard
            title="3. Launch Smart"
            description="Pick the best site and kick off your logistics operations seamlessly."
            icon="🚀"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-28 space-y-12">
        <h2 className="text-4xl font-bold">Why Choose Us?</h2>
        <div className="space-y-8 max-w-4xl mx-auto text-left">
          <WhyUsPoint title="Built for Mumbai" desc="Tailored specifically for Mumbai's unique infrastructure and market conditions." />
          <WhyUsPoint title="Up-to-Date Data" desc="We use real-time geospatial and business metrics to provide reliable decisions." />
          <WhyUsPoint title="Seamless UX" desc="Intuitive design with powerful backend calculations working silently." />
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-28 py-12 bg-slate-900 border border-slate-700 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-semibold mb-4">Ready to discover your next dark store location?</h3>
        <p className="text-gray-400 mb-6">Just enter an area and we’ll show you the best data-backed options.</p>
        <div className="max-w-md mx-auto">
          <SearchBar />
        </div>
      </div>
    </div>
  </div>
);

// --- Components ---
type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-slate-700">
    <div className={`text-5xl mb-4 bg-gradient-to-r ${color} text-white w-16 h-16 flex items-center justify-center rounded-full shadow-inner`}>
      {icon}
    </div>
    <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

type StepCardProps = {
  title: string;
  description: string;
  icon: string;
};

const StepCard = ({ title, description, icon }: StepCardProps) => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md hover:shadow-xl transition duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

type WhyUsPointProps = {
  title: string;
  desc: string;
};

const WhyUsPoint = ({ title, desc }: WhyUsPointProps) => (
  <div className="border-l-4 border-blue-500 pl-6">
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className="text-gray-400">{desc}</p>
  </div>
);
