import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative w-full px-4 md:px-6 lg:px-8', className)}
    >
      <div className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/tech-pattern.dim_1024x1024.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      />
      {children}
    </section>
  );
}
