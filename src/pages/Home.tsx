import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import munLogo from "@/assets/mun-logo.png";
import heroBackground from "@/assets/hero-bg.jpg";
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center animate-fade-in mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full shadow-[var(--shadow-glow)]">
              <img 
                src={munLogo} 
                alt="MUN Logo" 
                className="h-32 w-32 md:h-40 md:w-40"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            THE DIPLOVATE SUMMIT MUN
          </h1>
          
          <div className="space-y-3 mb-12 animate-fade-in-up-delay">
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Empowering Future Leaders Through Global Diplomacy
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Join us in shaping tomorrow's world through debate, dialogue, and diplomacy
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Button 
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-[var(--shadow-elegant)]"
            >
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="hero"
              className="font-semibold"
            >
              <a href="https://forms.gle/dSBDkrZE5aAvePZs7" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/0 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Registration CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Have questions? Reach out to us and we'll get back to you as soon as possible.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-[var(--shadow-elegant)] text-lg px-8 py-6"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
            {/* Registration CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Check Available Portfolios
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
             
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-[var(--shadow-elegant)] text-lg px-8 py-6"
            >
              <a href="https://docs.google.com/spreadsheets/d/1qE-DJbiRWZ9TjELEhTd2BOORT-brYT7nPwDRwXjE77g/edit?usp=sharing">
                Portfolio Matrix
                                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
         <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Register now to become part of our growing community of future diplomats and global leaders.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-[var(--shadow-elegant)] text-lg px-8 py-6"
            >
              <a href="https://forms.gle/dSBDkrZE5aAvePZs7" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Mr. Kartik
          </h3>
          <p className="text-lg text-muted-foreground">
            Founder & Director
          </p>
          <p className="text-muted-foreground mt-1">
           A multi-time MUNist with an exceptional record in diplomacy and public speaking.
Known for excellence in leadership, declamation, and fostering international dialogue.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Instagram className="w-5 h-5 text-primary" />
            <a 
              href="https://www.instagram.com/_kartiksharma_13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              @_kartiksharma_13
            </a>
          </div>
        </div>
      </section>
      {/* secratery general*/}
       <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Mr. Anish Bharadavaj
          </h3>
          <p className="text-lg text-muted-foreground">
            Secretary General
          </p>
          <p className="text-muted-foreground mt-1">
          A passionate youth leader dedicated to global dialogue and community service.
Actively engaged in social welfare initiatives and youth empowerment programs.
          </p>
        </div>
      </section>
      {/* foundation team */}
        <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
Team Constituency
          </h3>
          <p className="text-lg text-muted-foreground">
            
          </p>
          <p className="text-muted-foreground mt-1">
A dynamic team of young visionaries dedicated to social impact and leadership.
Together, we build platforms that empower voices and inspire change.
          </p>
        </div>
      </section>
      

      {/* Contact & Social Media Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with us and stay updated on all MUN activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <Card className="border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a 
                        href="mailto:diplovatesummit@gmail.com" 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                       diplovatesummit@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a 
                        href="tel:+91 85708 67872" 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                          +91 85708 67872
                          FOR ENQUIRY
                      </a>
                    </div>
                  </div>
                    <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a 
                        href="tel:+91 97282 80099" 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                       +91 97282 80099
                        FOUNDER
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected and follow our journey on social media
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <Facebook className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Facebook</span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <Twitter className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Twitter</span>
                  </a>
                  <a
                    href="https://www.instagram.com/thediplovatesummit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Instagram</span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
