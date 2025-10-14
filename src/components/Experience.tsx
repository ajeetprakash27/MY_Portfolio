import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Cognifyz Technologies",
      period: "April 2025 - May 2025",
      description: "Worked on front-end design, API integration, and React.js development for various client projects.",
      skills: ["React.js", "API Integration", "Front-end Design", "JavaScript"]
    }
  ];

  const certifications = [
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      date: "2025"
    },
     {
      title: "MySQL",
      issuer: "HackerRank",
      date: "2025"
    },
     {
      title: "Microsoft Copilot: The Art of Prompt Writing",
      issuer: "LinkedIn",
      date: "2025"
    },
     {
      title: "Python Programming",
      issuer: "Udemy",
      date: "2025"
    }
     {
      title: "Mastercard - Cybersecurity Job Simulation",
      issuer: "Forage",
      date: "2024"
    },
       {
      title: "Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "2025"
    },
     {
      title: "Cognizant - Agile Methodology Job Simulation",
      issuer: "Forage",
      date: "2024"
    },
     {
      title: "Cognizant - Agile Methodology Job Simulation",
      issuer: "Forage",
      date: "2024"
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Certifications & <span className="text-gradient">Experience</span>
        </h2>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-primary/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
