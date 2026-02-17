import { Heart, Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'portfolio';

  return (
    <footer className="bg-card/30 backdrop-blur border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a
                href="https://github.com/vaibhavgaikwad0072"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a
                href="https://www.linkedin.com/in/vaibhav-gaikwad-50a1b4257"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a
                href="mailto:vaibhavgaikwad3746@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Separator className="w-full max-w-xs" />

          {/* Copyright and Attribution */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2026 Vaibhav Gaikwad
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              Built with{' '}
              <Heart className="h-4 w-4 mx-1 text-primary fill-primary" />
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
