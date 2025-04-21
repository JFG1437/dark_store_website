// import { Routes, Route } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Home } from './pages/Home';
// import { ResultsPage } from './pages/ResultsPage';
// import { About } from './pages/About';
// import { Contact } from './pages/Contact';
// import { NotFound } from './pages/NotFound';

// export const App = () => (
//   <div className="min-h-screen bg-gray-50">
//     <Navbar />
    
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/results/:city" element={<ResultsPage />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </div>
// );

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ResultsPage } from './pages/ResultsPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:city" element={<ResultsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
