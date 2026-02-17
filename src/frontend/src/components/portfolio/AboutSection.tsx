import Section from './Section';
import Reveal from './Reveal';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <Section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                I am an AI & Data Science undergraduate with strong foundations in Python, SQL, and Machine Learning. 
                I specialize in building AI-powered applications using Large Language Models (LLMs) and 
                Retrieval-Augmented Generation (RAG). I am passionate about solving real-world problems through 
                data-driven intelligent systems.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
