import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Calendar, Clock, MapPin, Sparkles, Zap, TrendingUp, Users, Award, Coffee, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Happenings = () => {
  const day1Events = [
    {
      time: "09:00 – 09:45",
      title: "Opening Ceremony & Welcome Address",
      description: "Keynote from UAE Ministry of Energy & Infrastructure",
    },
    {
      time: "10:00 – 11:00",
      title: "Ministerial Panel: The UAE's Energy Transition Roadmap to 2050",
      description: "Visionary insights from regional energy ministers",
    },
    {
      time: "11:15 – 12:30",
      title: "Global Investment in Renewable Energy: Where Capital Meets Climate Action",
      description: "Investors and developers discuss opportunities",
    },
    {
      time: "13:30 – 15:00",
      title: "Hydrogen & Clean Fuels Forum",
      description: "Exploring green hydrogen and ammonia projects",
    },
    {
      time: "15:15 – 16:30",
      title: "Digital Transformation in Energy Operations",
      description: "AI, IoT, and blockchain reshaping energy management",
    },
    {
      time: "17:00",
      title: "Networking Reception & Exhibition Tour",
      description: "Exclusive access to energy innovation showcase",
    },
  ];

  const day2Events = [
    {
      time: "09:00 – 10:00",
      title: "Keynote: The Role of Technology in Net Zero Ambitions",
      description: "Presented by Masdar and Siemens Energy",
    },
    {
      time: "10:15 – 11:30",
      title: "Carbon Management & Decarbonization Technologies",
      description: "Case studies from ADNOC and global partners",
    },
    {
      time: "11:45 – 13:00",
      title: "Future Mobility & Clean Transport Panel",
      description: "EVs, hydrogen transport, and urban sustainability",
    },
    {
      time: "14:00 – 15:30",
      title: "Innovation Showcase: Startups Transforming the Energy Landscape",
      description: "10 finalist startups present live demos",
    },
    {
      time: "16:00 – 18:00",
      title: "Energy Excellence Awards Ceremony & Gala Dinner",
      description: "Celebrating innovation and sustainability leadership",
    },
  ];

  const upcomingProjects = [
    {
      project: "Al Dhafra Solar PV Plant",
      description: "One of the world's largest single-site solar plants (2 GW capacity)",
    },
    {
      project: "Masdar Green Hydrogen Hub",
      description: "Production of 200,000 tonnes of green hydrogen annually",
    },
    {
      project: "TAQA & ADNOC Waste-to-Energy Project",
      description: "Producing 85 MW renewable power",
    },
    {
      project: "Abu Dhabi Offshore Wind Pilot Project",
      description: "200 MW offshore wind farm feasibility",
    },
    {
      project: "UAE National Hydrogen Strategy Projects",
      description: "9 key hydrogen production projects across the UAE",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <FloatingElements />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon with Glow */}
              <div className="inline-block mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-full p-4 sm:p-6 border-2 border-primary/30 shadow-2xl">
                  <Calendar className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-primary drop-shadow-2xl" />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6 px-2">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-2xl">
                  TWO-DAY SUMMIT AGENDA
                </span>
              </h1>
              
              <div className="w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6 sm:mb-8 shadow-lg"></div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-6 sm:mb-10 leading-relaxed max-w-3xl mx-auto font-medium px-2">
                A comprehensive program covering strategy, policy, technology, and innovation
                <span className="block mt-3 text-accent font-semibold">
                  Join industry leaders for two days of transformative discussions
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 px-2">
                <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-primary/20 shadow-lg">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <span className="font-semibold text-foreground text-sm sm:text-base">Date: TBD</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-secondary/20 shadow-lg">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  <span className="font-semibold text-foreground text-sm sm:text-base">Venue: TBD • Abu Dhabi, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Upcoming Projects Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-primary/20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black">
                      <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        UPCOMING PROJECTS & INVESTMENT OUTLOOK
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto font-medium leading-relaxed px-2">
                Abu Dhabi and the wider UAE are committing over{" "}
                <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-primary to-secondary text-white font-black text-lg sm:text-xl md:text-2xl rounded-lg shadow-lg">
                  USD 160 billion
                </span>
                {" "}to clean and renewable energy projects as part of the UAE Net Zero by 2050 strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {upcomingProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  <Card className="relative overflow-hidden h-full border-2 border-primary/20 bg-white/95 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                    
                    <CardHeader className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <TrendingUp className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                            {project.project}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Day 1 Schedule */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,93%,18%,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(188,24%,35%,0.08),transparent_50%)]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    DAY 1
                  </span>
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Strategy, Policy & Future Energy Landscape
              </h3>
              <div className="w-40 h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg"></div>
            </div>
            
            <div className="space-y-6">
              {day1Events.map((event, index) => {
                const getEventIcon = () => {
                  if (event.title.toLowerCase().includes("opening") || event.title.toLowerCase().includes("ceremony")) return Sparkles;
                  if (event.title.toLowerCase().includes("panel") || event.title.toLowerCase().includes("discussion")) return Users;
                  if (event.title.toLowerCase().includes("forum")) return Zap;
                  if (event.title.toLowerCase().includes("networking") || event.title.toLowerCase().includes("reception")) return Coffee;
                  return TrendingUp;
                };
                const EventIcon = getEventIcon();
                
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    <Card className="relative overflow-hidden border-2 border-primary/20 bg-white/95 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                      {/* Decorative Left Border */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
                      
                      <CardHeader className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <EventIcon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Clock className="h-5 w-5 text-primary" />
                              <Badge className="bg-primary text-white font-bold px-3 py-1">
                                {event.time}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                              {event.title}
                            </CardTitle>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Day 2 Schedule */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* White Background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Moving Blue Balls */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-float opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-blue-300 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-blue-400 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '4.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-blue-500 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-30 h-30 bg-blue-300 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                  <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    DAY 2
                  </span>
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Technology, Innovation & Energy Awards
              </h3>
              <div className="w-40 h-2 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full shadow-lg"></div>
            </div>
            
            <div className="space-y-6">
              {day2Events.map((event, index) => {
                const getEventIcon = () => {
                  if (event.title.toLowerCase().includes("keynote")) return Sparkles;
                  if (event.title.toLowerCase().includes("carbon") || event.title.toLowerCase().includes("decarbonization")) return TrendingUp;
                  if (event.title.toLowerCase().includes("mobility") || event.title.toLowerCase().includes("transport")) return Zap;
                  if (event.title.toLowerCase().includes("innovation") || event.title.toLowerCase().includes("showcase")) return Award;
                  if (event.title.toLowerCase().includes("awards") || event.title.toLowerCase().includes("gala")) return Award;
                  return Users;
                };
                const EventIcon = getEventIcon();
                
                const isAwardsEvent = event.title.toLowerCase().includes("awards") || event.title.toLowerCase().includes("gala");
                
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                      isAwardsEvent 
                        ? "bg-gradient-to-r from-accent via-primary to-secondary"
                        : "bg-gradient-to-r from-secondary via-accent to-primary"
                    }`}></div>
                    
                    <Card className={`relative overflow-hidden border-2 backdrop-blur-sm hover:border-opacity-40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                      isAwardsEvent
                        ? "border-accent/20 bg-gradient-to-br from-accent/10 via-accent/5 to-white/95 hover:shadow-accent/20"
                        : "border-secondary/20 bg-white/95 hover:shadow-secondary/20"
                    }`}>
                      {/* Decorative Left Border */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                        isAwardsEvent
                          ? "bg-gradient-to-b from-accent via-primary to-secondary"
                          : "bg-gradient-to-b from-secondary via-accent to-primary"
                      }`}></div>
                      
                      <CardHeader className={`p-6 ${
                        isAwardsEvent
                          ? "bg-gradient-to-br from-accent/10 via-accent/5 to-transparent"
                          : "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent"
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${
                            isAwardsEvent
                              ? "bg-gradient-to-br from-accent to-accent/80"
                              : "bg-gradient-to-br from-secondary to-secondary/80"
                          }`}>
                            <EventIcon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Clock className={`h-5 w-5 ${isAwardsEvent ? "text-accent" : "text-secondary"}`} />
                              <Badge className={`font-bold px-3 py-1 ${
                                isAwardsEvent
                                  ? "bg-accent text-white"
                                  : "bg-secondary text-white"
                              }`}>
                                {event.time}
                              </Badge>
                            </div>
                            <CardTitle className={`text-xl md:text-2xl font-bold mb-3 group-hover:transition-colors leading-tight ${
                              isAwardsEvent
                                ? "text-foreground group-hover:text-accent"
                                : "text-foreground group-hover:text-secondary"
                            }`}>
                              {event.title}
                            </CardTitle>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Happenings;
