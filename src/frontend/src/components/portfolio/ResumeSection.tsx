import { Download, FileText } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ResumeSection() {
  const handleDownload = () => {
    // Placeholder for resume download
    alert('Resume download will be available soon!');
  };

  return (
    <Section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center gradient-text">
            Resume
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Download My Resume</CardTitle>
              <CardDescription className="text-base">
                Get a detailed overview of my experience, education, and skills
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button
                size="lg"
                onClick={handleDownload}
                className="shadow-glow hover:shadow-glow-lg transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
