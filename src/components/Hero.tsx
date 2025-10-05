import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-gradient">Ajeet Prakash Pandey</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
            Full-Stack Developer & Cloud-Native Enthusiast
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building scalable, data-driven, and intelligent web applications with expertise in MERN Stack, 
            TypeScript, DevOps, AI/LLM integration, and container orchestration.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan transition-all duration-300"
            >
              Learn More
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <a href="/Ajeet_PP_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow" />
          <img 
            src={profilePhoto}
            alt="Ajeet Prakash Pandey"
            className="relative rounded-full w-full max-w-md mx-auto border-4 border-primary/30 shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
