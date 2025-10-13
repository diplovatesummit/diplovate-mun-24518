import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "DiplovateSummit@gmail.com",
      link: "mailto:diplovatesummit@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone(FOR ENQUIRY)",
      value: "+91 85708 67872 ",
      link: "tel:+91 85708 67872"
    },
    {
      icon: Phone,
      label: "Phone(FOUNDER)",
      value: "+91 9728280099",
      link: "+91 9728280099"
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com/thediplovatesummit",
      color: "hover:text-[#E4405F]"
    },
    {
      icon: Youtube,
      name: "YouTube",
      link: "https://youtube.com/@diplovatesummit",
      color: "hover:text-[#FF0000]"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <a 
                  href={item.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Section */}
        <Card className="border-none shadow-[var(--shadow-elegant)] animate-fade-in-up">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Connect With Us
              </h2>
              <p className="text-muted-foreground">
                Follow us on social media to stay updated with our latest events and news
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors ${social.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-background border-2 border-border rounded-full">
                    <social.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 shadow-[var(--shadow-elegant)] animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg leading-relaxed text-white/95 max-w-3xl mx-auto">
            Whether you're a student interested in joining MUN, an educator looking to start a program, 
            or a partner organization, we're here to help. Let's work together to create the next 
            generation of global leaders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
