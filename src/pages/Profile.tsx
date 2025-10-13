import { useParams } from "react-router-dom";
import { Mail, Phone, MapPin, Award, Building, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with actual data from your backend
const mockProfiles = {
  "1": {
    name: "Alexandra Chen",
    position: "Secretary General",
    committee: "General Assembly",
    country: "United States",
    image: "/placeholder.svg",
    bio: "Alexandra is a seasoned MUN delegate with 5 years of experience. She has participated in over 20 conferences and specializes in diplomatic negotiations and crisis management.",
    email: "alexandra.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    achievements: [
      "Best Delegate Award - HMUN 2024",
      "Outstanding Position Paper - THIMUN 2023",
      "Best Speaker Award - NMUN 2023"
    ],
    committees: ["UNSC", "General Assembly", "ECOSOC"],
    experience: "5 years"
  },
  "2": {
    name: "Marcus Johnson",
    position: "Chair",
    committee: "Security Council",
    country: "United Kingdom",
    image: "/placeholder.svg",
    bio: "Marcus brings extensive knowledge of international security and conflict resolution to the MUN community. He has chaired multiple crisis committees and specializes in security matters.",
    email: "marcus.johnson@example.com",
    phone: "+44 20 7123 4567",
    location: "London, UK",
    achievements: [
      "Best Chair Award - BMUN 2024",
      "Outstanding Diplomacy - WIMUN 2023"
    ],
    committees: ["UNSC", "NATO", "Crisis Committee"],
    experience: "4 years"
  }
};

const Profile = () => {
  const { id } = useParams();
  const profile = mockProfiles[id as keyof typeof mockProfiles] || mockProfiles["1"];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Header */}
          <Card className="mb-8 overflow-hidden border-primary/20">
            <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
            <CardContent className="relative pt-0 pb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start -mt-16 md:-mt-20">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background object-cover shadow-lg"
                />
                <div className="flex-1 mt-16 md:mt-20">
                  <div className="flex flex-wrap gap-3 items-start justify-between">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {profile.name}
                      </h1>
                      <p className="text-lg text-primary font-semibold mb-3">
                        {profile.position}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      {profile.experience} Experience
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">{profile.committee}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Flag className="w-4 h-4" />
                      <span className="text-sm">{profile.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Bio */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Biography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.bio}
                  </p>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {profile.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {profile.phone}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {profile.location}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Committees */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Committees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.committees.map((committee, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {committee}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
