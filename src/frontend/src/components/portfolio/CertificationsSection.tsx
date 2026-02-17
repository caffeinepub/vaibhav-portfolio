import { Award } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const certifications = [
  'Data Science Course – CodeWithHarry',
  'Data Visualization: Empowering Business with Effective Insights',
];

export default function CertificationsSection() {
  return (
    <Section id="certifications" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center gradient-text">
            Certifications
          </h2>
        </Reveal>

        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <Reveal key={cert} delay={0.1 * idx}>
              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    {cert}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
