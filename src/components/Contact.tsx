
import React from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to bring your next project to life with 20+ years of expertise
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary" size={24} />
                  <span className="text-muted-foreground">gfborn@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary" size={24} />
                  <span className="text-muted-foreground">+7 (900) 583-76-22</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Send className="text-primary" size={24} />
                  <span className="text-muted-foreground">
                    <a
                      href="https://t.me/greggy345"
                    >
                      @greggy345
                    </a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary" size={24} />
                  <span className="text-muted-foreground">Available for Remote Work</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6 mt-8">
                <a 
                  href="https://github.com/greggy" 
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gregfat/" 
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                What I Offer
              </h3>
              
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Full-stack development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">System architecture design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Cloud infrastructure setup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Performance optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Accessibility consulting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Technical mentoring</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Committed to Accessibility
            </h3>
            <p className="text-muted-foreground">
              Every solution I build considers accessibility from the ground up. 
              My personal experience using a wheelchair gives me unique insights into 
              creating truly inclusive digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
