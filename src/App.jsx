import { Routes, Route } from 'react-router-dom';
import './index.css';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import WhyPulseMaker from './components/sections/WhyPulseMaker';
import ThreePillars from './components/sections/ThreePillars';
import DashboardPreview from './components/sections/DashboardPreview';
import TrustSection from './components/sections/TrustSection';
import Roadmap from './components/sections/Roadmap';
import Partners from './components/sections/Partners';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import Docs from './pages/Docs';

// Landing Page Component
const LandingPage = () => (
  <main>
    <Hero />
    <WhyPulseMaker />
    <ThreePillars />
    <DashboardPreview />
    <TrustSection />
    <Roadmap />
    <Partners />
    <FinalCTA />
  </main>
);

function App() {
  return (
    <div className="relative min-h-screen bg-pulse-dark text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
