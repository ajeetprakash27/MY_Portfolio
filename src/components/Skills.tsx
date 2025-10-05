import { Code, Palette, Cloud, Brain, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    "C", "C++", "Python", "Java", "JavaScript", "React.js", 
    "DSA", "ML", "MySQL", "MongoDB", "Node.js"
  ];

  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Building robust applications with MERN stack, TypeScript, REST/GraphQL APIs, and secure authentication using JWT/OAuth.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Frontend",
      description: "Creating beautiful, accessible interfaces with React, Next.js, Tailwind CSS, Material UI, and WCAG compliance.",
      color: "text-secondary"
    },
    {
      icon: Cloud,
      title: "Cloud-Native & DevOps",
      description: "Implementing scalable solutions with Docker, Kubernetes, CI/CD pipelines, Prometheus, and Grafana monitoring.",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "AI & LLM Integration",
      description: "Developing intelligent features with chatbots, machine learning models, and MCP deployment.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Consulting & Guidance",
      description: "Providing technical expertise and strategic guidance for your development projects and architecture decisions.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Skills & <span className="text-gradient">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Services Offered</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className={`h-6 w-6 ${service.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
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
