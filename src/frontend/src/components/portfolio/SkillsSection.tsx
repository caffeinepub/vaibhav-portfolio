import Section from './Section';
import Reveal from './Reveal';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'SQL'],
  },
  {
    title: 'AI / ML',
    skills: ['Machine Learning', 'LLMs', 'Retrieval-Augmented Generation (RAG)', 'LangChain'],
  },
  {
    title: 'Web',
    skills: ['Flask', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'MySQL', 'VS Code', 'Power BI', 'Linux'],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center gradient-text">
            Skills
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal key={category.title} delay={0.1 * idx}>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
