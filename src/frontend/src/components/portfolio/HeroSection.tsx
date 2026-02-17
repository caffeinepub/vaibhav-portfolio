import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from './Section';
import Reveal from './Reveal';

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <Reveal>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 gradient-text">
            Vaibhav Gaikwad
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 font-medium">
            AI & Data Science Undergraduate | Building Intelligent Systems
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transforming data into smart solutions using ML and LLMs
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </Section>
  );
}
