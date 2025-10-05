import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import airlineImage from "@/assets/airline-project.png";
import faceRecognitionImage from "@/assets/face-recognition-project.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Airline Reservation & Database Management System",
      description: "A comprehensive airline reservation system with database management capabilities, enabling seamless booking, flight scheduling, and passenger data management.",
      image: airlineImage,
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      features: [
        "Real-time flight availability checking",
        "Secure booking and payment processing",
        "Admin dashboard for flight management",
        "Passenger data management and reporting"
      ]
    },
    {
      title: "Human Face Recognition & Detection Application",
      description: "An AI-powered face recognition system using computer vision algorithms to detect and identify human faces in real-time with high accuracy.",
      image: faceRecognitionImage,
      technologies: ["Python", "OpenCV", "Machine Learning"],
      features: [
        "Real-time face detection and tracking",
        "Face recognition with trained models",
        "Multi-face detection capability",
        "High accuracy recognition algorithms"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base">
                {selectedProject?.description}
              </DialogDescription>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg"
                />
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} className="bg-primary/20 text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
