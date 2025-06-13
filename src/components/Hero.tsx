
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with your photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-20 hidden lg:block">
          <img 
            src="/lovable-uploads/5c2444f4-61cb-4815-8917-bc0767b8bded.png" 
            alt="Professional Software Engineer"
            className="w-80 h-80 object-cover rounded-full shadow-2xl"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:flex lg:items-center lg:space-x-12">
          {/* Mobile photo */}
          <div className="lg:hidden mb-8">
            <img 
              src="/lovable-uploads/5c2444f4-61cb-4815-8917-bc0767b8bded.png" 
              alt="Professional Software Engineer"
              className="w-48 h-48 object-cover rounded-full mx-auto shadow-xl border-4 border-primary/20"
            />
          </div>
          
          <div className="lg:flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Senior Software
              <span className="block text-primary">Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              20+ years crafting robust solutions with 
              <span className="text-primary font-semibold"> Go, Erlang, Python</span> and 
              <span className="text-primary font-semibold"> AWS</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Passionate about building scalable systems and solving complex problems. 
              As a wheelchair user, I bring unique perspectives to accessibility and inclusive design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <a 
                href="#skills" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Skills
              </a>
              <a 
                href="#contact" 
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
