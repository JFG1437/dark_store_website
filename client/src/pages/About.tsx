// export const About = () => (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">How We Optimize Dark Store Locations</h1>
      
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-xl shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Data Collection</h2>
//             <p className="text-gray-600">
//               We gather demographic data, traffic patterns, and consumer behavior to understand area dynamics.
//             </p>
//           </div>
          
//           <div className="bg-white p-6 rounded-xl shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Location Ranking</h2>
//             <p className="text-gray-600">
//               Ranking based on accessibility, catchment area, competition, and operational feasibility.
//             </p>
//           </div>
//         </div>
  
//         <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-6">Why Dark Stores Matter</h2>
//           <div className="space-y-4">
//             <div className="bg-white p-4 rounded-lg">
//               <h3 className="font-bold mb-2">Faster Delivery</h3>
//               <p>Reduce delivery times to under 30 minutes</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg">
//               <h3 className="font-bold mb-2">Cost Efficiency</h3>
//               <p>Optimize operational costs through strategic placement</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );


// export const About = () => (
//   <div className="container mx-auto px-6 py-12">
//     <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
//       Optimizing Dark Store Locations for Maximum Impact
//     </h1>

//     <div className="grid md:grid-cols-2 gap-10">
//       {/* Left Side */}
//       <div className="space-y-8">
//         <div className="bg-white p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-3">📊 Data Collection</h2>
//           <p className="text-gray-700 leading-relaxed">
//             We collect and analyze extensive data — including demographics, traffic flow, property prices, and local behavior — to gain a deep understanding of each region's dynamics.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-3">📍 Location Ranking</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Each location is scored and ranked using multiple criteria: accessibility, proximity to demand hotspots, competition, and logistical feasibility — ensuring optimal placement.
//           </p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="bg-blue-100 p-8 rounded-2xl shadow-md">
//         <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Dark Stores Are the Future</h2>
//         <div className="space-y-5">
//           <div className="bg-white p-5 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">⚡ Faster Deliveries</h3>
//             <p className="text-gray-600">
//               Strategically placed stores enable ultra-fast delivery, often under 30 minutes, improving customer satisfaction.
//             </p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">💰 Cost Optimization</h3>
//             <p className="text-gray-600">
//               Reduce operational and delivery costs through smart location strategies that increase efficiency.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );



import {
  Database,
  TrendingUp,
  MapPin,
  Truck,
  Box,
  DollarSign,
  Users,
} from "lucide-react";

export const About = () => (
  <div className="container mx-auto px-6 py-12">
    {/* Section header */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold uppercase text-blue-600 mb-2">
        About Our Project
      </p>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        How We Optimize Dark Store Locations
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Our final year project uses advanced algorithms and data analysis to identify
        optimal locations for dark stores.
      </p>
    </div>

    {/* 4‑card feature grid */}
    <div className="grid gap-10 md:grid-cols-2">
      {/* Data Collection */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
          <Database className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Data Collection
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We gather demographic data, traffic patterns, and consumer behavior to
          understand area dynamics.
        </p>
      </div>

      {/* Analysis & Modeling */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
          <TrendingUp className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Analysis &amp; Modeling
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our proprietary algorithms analyze multiple factors to score potential
          locations based on business potential.
        </p>
      </div>

      {/* Location Ranking */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Location Ranking
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We rank locations based on accessibility, catchment area, competition,
          and operational feasibility.
        </p>
      </div>

      {/* Logistics Optimization */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
          <Truck className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Logistics Optimization
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The final recommendations optimize for delivery times, inventory
          management, and operational efficiency.
        </p>
      </div>
    </div>

    {/* Why Dark Stores Matter */}
    <div className="mt-20 bg-white p-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Why Dark Stores Matter
      </h2>
      <p className="text-gray-600 mb-8">
        Dark stores are micro‑fulfillment centers strategically placed to enable
        rapid deliveries in urban areas. They serve as dedicated fulfillment hubs
        that optimize the last‑mile delivery process, improving customer
        satisfaction while reducing operational costs.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Faster Delivery */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
            <Box className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Faster Delivery
          </h3>
          <p className="text-gray-600">
            Strategically located dark stores reduce delivery times to under 30
            minutes.
          </p>
        </div>

        {/* Cost Efficiency */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Cost Efficiency
          </h3>
          <p className="text-gray-600">
            Optimize operational costs through strategic placement and inventory
            management.
          </p>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Customer Satisfaction
          </h3>
          <p className="text-gray-600">
            Meet growing customer expectations for rapid delivery and product
            availability.
          </p>
        </div>
      </div>
    </div>
  </div>
);