
import React from 'react';
import { Award, Heart, Users, Accessibility } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated to creating inclusive, accessible, and robust software solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Smooth background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-transparent rounded-3xl transform -rotate-2"></div>
              
              {/* Image container with smooth styling */}
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border/50">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/5c2444f4-61cb-4815-8917-bc0767b8bded.png" 
                    alt="Professional Software Engineer"
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Smooth overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-xl"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over two decades in software engineering, I've had the privilege of working 
                  across diverse industries and technologies. My journey has been shaped by a passion 
                  for solving complex problems and building systems that make a real difference.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a wheelchair user, I bring a unique perspective to accessibility and inclusive 
                  design. I believe technology should be accessible to everyone, and I strive to 
                  incorporate these principles into every project I work on.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3 bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:bg-card/50 transition-colors">
                  <Award className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">Senior Level</span>
                </div>
                <div className="flex items-center space-x-3 bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:bg-card/50 transition-colors">
                  <Heart className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">Passionate</span>
                </div>
                <div className="flex items-center space-x-3 bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:bg-card/50 transition-colors">
                  <Users className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">Team Player</span>
                </div>
                <div className="flex items-center space-x-3 bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:bg-card/50 transition-colors">
                  <Accessibility className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">Accessibility Advocate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
