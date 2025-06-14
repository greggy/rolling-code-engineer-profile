
import React from 'react';
import { Code, Database, Cloud, Server, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: ["Go", "Erlang", "Python", "JavaScript", "TypeScript", "R"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"]
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB", "Elasticsearch"]
    },
    {
      icon: <Server size={32} />,
      title: "Backend Systems",
      skills: ["Microservices", "REST APIs", "GraphQL", "Message Queues", "Event Streaming"]
    },
    {
      icon: <Cpu size={32} />,
      title: "Architecture",
      skills: ["System Design", "Distributed Systems", "High Availability", "Scalability"]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Technologies",
      skills: ["React", "Vue.js", "WebSockets", "HTTP/2", "Progressive Web Apps"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two decades of experience across diverse technologies and domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Experience Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">70+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
