import { Video } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { Card, CardContent } from '@/components/ui/card';

export default function VideoSection() {
  return (
    <Section id="video" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center gradient-text">
            Introduction Video
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">Video Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
