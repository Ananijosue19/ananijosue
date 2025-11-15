import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AllProjectsPage } from './components/AllProjectsPage';

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  if (showAllProjects) {
    return <AllProjectsPage onBack={() => setShowAllProjects(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onViewAllProjects={() => setShowAllProjects(true)} />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
