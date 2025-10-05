import { Code, Palette, Cloud, Brain, Users, Server } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: 'C', level: 85 },
    { name: 'C++', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'JavaScript', level: 92 },
    { name: 'React.js', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'TypeScript', level: 90 },
    { name: 'DSA', level: 85 },
    { name: 'Machine Learning', level: 82 },
    { name: 'MySQL', level: 88 },
    { name: 'MongoDB', level: 90 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 80 },
  ];

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Building complete web applications using MERN stack, TypeScript, REST/GraphQL APIs, and modern authentication (JWT/OAuth).',
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Frontend Engineering',
      description: 'Creating responsive, accessible interfaces with React, Next.js, Tailwind CSS, and Material UI following WCAG standards.',
    },
    {
      icon: Cloud,
      title: 'Cloud-Native & DevOps Solutions',
      description: 'Implementing containerized applications with Docker, Kubernetes orchestration, CI/CD pipelines, and monitoring with Prometheus/Grafana.',
    },
    {
      icon: Brain,
      title: 'AI & LLM Integration',
      description: 'Developing intelligent features including chatbots, MCP implementation, and seamless AI model deployment into production systems.',
    },
    {
      icon: Server,
      title: 'Backend Architecture',
      description: 'Designing scalable server architectures with Node.js, database optimization, API development, and microservices patterns.',
    },
    {
      icon: Users,
      title: 'Consulting & Technical Guidance',
      description: 'Providing expert advice on technology stack selection, architecture decisions, and best practices for modern web development.',
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          Skills & <span className="text-primary">Services</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8">What I Offer</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
