
import React from 'react';
import { Award, Heart, Users, Accessibility } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated to creating inclusive, accessible, and robust software solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/5c2444f4-61cb-4815-8917-bc0767b8bded.png" 
                alt="Professional Software Engineer"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over two decades in software engineering, I've had the privilege of working 
                across diverse industries and technologies. My journey has been shaped by a passion 
                for solving complex problems and building systems that make a real difference.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a wheelchair user, I bring a unique perspective to accessibility and inclusive 
                design. I believe technology should be accessible to everyone, and I strive to 
                incorporate these principles into every project I work on.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Award className="text-primary" size={24} />
                  <span className="text-foreground font-medium">Senior Level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="text-primary" size={24} />
                  <span className="text-foreground font-medium">Passionate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary" size={24} />
                  <span className="text-foreground font-medium">Team Player</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Accessibility className="text-primary" size={24} />
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
