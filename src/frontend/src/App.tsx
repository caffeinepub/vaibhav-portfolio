import { useEffect } from 'react';
import Navbar from './components/portfolio/Navbar';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import VideoSection from './components/portfolio/VideoSection';
import ResumeSection from './components/portfolio/ResumeSection';
import CertificationsSection from './components/portfolio/CertificationsSection';
import ContactSection from './components/portfolio/ContactSection';
import Footer from './components/portfolio/Footer';

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <VideoSection />
        <ResumeSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
