import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";
import founder3 from "@/assets/founder3.jpg";

const Founders = () => {
  const founders = [
    {
      name: "Alexander Chen",
      role: "Co-Founder & Secretary General",
      image: founder1,
      bio: "Alexander brings over 5 years of MUN experience, having participated in conferences worldwide. His passion for international relations and dedication to youth empowerment drives our mission to create impactful learning experiences.",
      linkedin: "#",
      email: "alexander@mun.org"
    },
    {
      name: "Sarah Rodriguez",
      role: "Co-Founder & Director of Operations",
      image: founder2,
      bio: "Sarah's background in event management and diplomacy has been instrumental in building our organization. She believes in the transformative power of debate and dialogue in shaping future global leaders.",
      linkedin: "#",
      email: "sarah@mun.org"
    },
    {
      name: "Michael Patel",
      role: "Co-Founder & Head of Outreach",
      image: founder3,
      bio: "Michael's vision is to make MUN accessible to students from all backgrounds. His expertise in community building and education ensures our programs reach and inspire the next generation of diplomats.",
      linkedin: "#",
      email: "michael@mun.org"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Founders
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated leaders committed to empowering the next generation of global diplomats
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a 
                      href={founder.linkedin}
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href={`mailto:${founder.email}`}
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 shadow-[var(--shadow-elegant)] animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed text-white/95 max-w-3xl mx-auto">
            We believe that every student deserves the opportunity to develop the skills, knowledge, 
            and confidence needed to become effective global leaders. Through MUN, we're building a 
            community of young diplomats who will shape a more peaceful and prosperous world.
          </p>
        </div>

        {/* Registration CTA */}
        <div className="mt-12 text-center bg-card rounded-2xl p-12 shadow-lg border border-border animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Register now to become part of our growing community of future diplomats and global leaders.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all"
            asChild
          >
            <a href="/contact">Register Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Founders;
