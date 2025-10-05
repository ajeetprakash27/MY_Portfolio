import { GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Developer and Cloud-Native Enthusiast with a strong foundation in 
              building scalable, data-driven, and intelligent web applications. My expertise spans across 
              the MERN stack, TypeScript, DevOps practices, AI/LLM integration, and container orchestration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on solving complex problems and creating seamless user experiences through clean, 
              efficient code and modern development practices. My goal is to leverage cutting-edge technologies 
              to build applications that make a real impact.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Education</h3>
            
            <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
                    <p className="text-muted-foreground">Visvesvaraya Technological University, Bangalore</p>
                    <p className="text-sm text-muted-foreground mt-1">2022 - 2026 • CGPA: 7.6</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <School className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Higher Secondary Education</h4>
                    <p className="text-muted-foreground">Kendriya Vidyalaya, Bangalore</p>
                    <p className="text-sm text-muted-foreground mt-1">2019 - 2022 • PCM • First Class</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
