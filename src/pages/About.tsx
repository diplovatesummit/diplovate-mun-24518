import { Globe, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Develop a deep understanding of international relations and global issues through immersive simulations."
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Build confidence, public speaking abilities, and collaborative leadership through active participation."
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Enhance research, critical thinking, and analytical skills while exploring complex world challenges."
    },
    {
      icon: Target,
      title: "Real-World Impact",
      description: "Learn to negotiate, compromise, and create solutions that address pressing global concerns."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            THE DIPLOVATE SUMMIT MUN
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the world of international diplomacy firsthand
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="border-none shadow-[var(--shadow-elegant)]">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Model United Nations (MUN) is an educational simulation where students take on the roles of diplomats, 
                  representing different countries in various United Nations committees. Through rigorous debate and 
                  negotiation, participants work to address critical global challenges, from climate change and human 
                  rights to international security and economic development.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Our MUN program provides a unique platform for students to develop essential 21st-century skills. 
                  Participants engage in extensive research, craft position papers, deliver speeches, and negotiate 
                  resolutions on complex international issues. This hands-on experience bridges the gap between 
                  classroom theory and real-world diplomacy.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Beyond academic growth, MUN fosters a global community of young leaders committed to understanding 
                  diverse perspectives and working collaboratively towards sustainable solutions. Whether you're interested 
                  in politics, international relations, public policy, or simply want to make a difference, MUN offers 
                  an unparalleled opportunity to grow as a leader and global citizen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 shadow-[var(--shadow-elegant)] animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-6 text-white/90">
            Join our community of aspiring diplomats and global leaders
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
