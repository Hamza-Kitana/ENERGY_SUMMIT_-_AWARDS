import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Award as AwardIcon } from "lucide-react";
import awardsBg from "@/assets/awards-bg.jpg";
import { Link } from "react-router-dom";

const Awards = () => {
  const individualAwards = [
    {
      icon: Trophy,
      title: "Energy Leader of the Year",
      description: "Recognizing a visionary individual leading transformative energy strategies.",
      type: "Individual",
      value: "energy-leader"
    },
    {
      icon: Star,
      title: "Young Innovator in Energy",
      description: "Honoring outstanding achievements of professionals under 35 driving change through innovation.",
      type: "Individual",
      value: "young-innovator"
    },
    {
      icon: AwardIcon,
      title: "Women in Energy Leadership Award",
      description: "Celebrating female leadership and advocacy for diversity in the energy sector.",
      type: "Individual",
      value: "women-leadership"
    },
  ];

  const privateSectorAwards = [
    {
      icon: Trophy,
      title: "Best Renewable Energy Project – Private Sector",
      description: "Recognizing private companies implementing high-impact renewable projects.",
      type: "Private Sector",
      value: "renewable-project"
    },
    {
      icon: Star,
      title: "Corporate Sustainability Initiative of the Year",
      description: "For organizations achieving exceptional ESG results and carbon reduction.",
      type: "Private Sector",
      value: "sustainability"
    },
  ];

  const publicSectorAwards = [
    {
      icon: Trophy,
      title: "Government Energy Efficiency Initiative",
      description: "Highlighting ministries or authorities executing impactful energy-saving programs.",
      type: "Public Sector",
      value: "government-efficiency"
    },
    {
      icon: Star,
      title: "Smart City & Green Infrastructure Award",
      description: "Recognizing innovation in urban sustainability and smart energy infrastructure.",
      type: "Public Sector",
      value: "smart-city"
    },
  ];

  const projectAwards = [
    {
      icon: Trophy,
      title: "Outstanding Clean Hydrogen Project",
      description: "Honoring excellence in hydrogen production, technology, or infrastructure.",
      type: "Project",
      value: "hydrogen-project"
    },
    {
      icon: Star,
      title: "Innovation in Energy Storage Award",
      description: "Rewarding breakthroughs in battery or grid storage technology.",
      type: "Project",
      value: "energy-storage"
    },
    {
      icon: AwardIcon,
      title: "Best Solar or Wind Project of the Year",
      description: "Recognizing large-scale renewable power generation success stories.",
      type: "Project",
      value: "solar-wind"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-32 relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${awardsBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/90" />
        <FloatingElements />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trophy Icon with Glow */}
            <div className="inline-block mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-full p-4 sm:p-6 border-2 border-accent/30 shadow-2xl">
                <Trophy className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-accent drop-shadow-2xl" />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight px-2">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-2xl">
                  ENERGY EXCELLENCE AWARDS
                </span>
              </h1>
              
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-primary/90 via-accent/90 to-secondary/90 rounded-full border-2 border-white/30 shadow-2xl backdrop-blur-md">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white drop-shadow-lg">
                    2026
                  </span>
                </div>
              </div>
            </div>
            
            <div className="w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6 sm:mb-10 shadow-lg"></div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-6 sm:mb-10 leading-relaxed max-w-3xl mx-auto font-medium px-2">
              Celebrating organizations and individuals driving innovation, sustainability, and excellence in the energy transition. 
              <span className="block mt-2 sm:mt-3 text-accent font-semibold">
                Recognizing contributions that advance the UAE's energy and climate goals.
              </span>
            </p>
            
            <Link to="/register?interested=award">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white border-0 shadow-2xl hover:shadow-accent/50 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-bold transition-all duration-300 hover:scale-105"
              >
                Submit Nomination
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,93%,18%,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(188,24%,35%,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(38,92%,50%,0.05),transparent_50%)]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur opacity-30"></div>
                <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-primary/20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      AWARD CATEGORIES
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg"></div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
              Discover the prestigious categories recognizing excellence across the energy sector
            </p>
          </div>

          {/* Individual Awards */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Individual Awards
                </span>
              </h3>
              <p className="text-muted-foreground">Recognizing outstanding individual achievements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {individualAwards.map((category, index) => {
                const Icon = category.icon;
                return (
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
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-4">
                        <p className="text-muted-foreground mb-6 leading-relaxed min-h-[60px]">
                          {category.description}
                        </p>
                        <Link to={`/register?award=${category.value}`} className="block">
                          <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            REGISTER
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Private Sector Awards */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Private Sector Awards
                </span>
              </h3>
              <p className="text-muted-foreground">Celebrating corporate excellence and innovation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {privateSectorAwards.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary via-accent to-primary rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <Card className="relative overflow-hidden h-full border-2 border-secondary/20 bg-white/95 backdrop-blur-sm hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2">
                      {/* Decorative Top Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary"></div>
                      
                      <CardHeader className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent p-6 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-secondary transition-colors">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-4">
                        <p className="text-muted-foreground mb-6 leading-relaxed min-h-[60px]">
                          {category.description}
                        </p>
                        <Link to={`/register?award=${category.value}`} className="block">
                          <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            REGISTER
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Public Sector Awards */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Public Sector Awards
                </span>
              </h3>
              <p className="text-muted-foreground">Honoring government excellence and public initiatives</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {publicSectorAwards.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <Card className="relative overflow-hidden h-full border-2 border-primary/20 bg-white/95 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                      {/* Decorative Top Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                      
                      <CardHeader className="bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent p-6 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-4">
                        <p className="text-muted-foreground mb-6 leading-relaxed min-h-[60px]">
                          {category.description}
                        </p>
                        <Link to={`/register?award=${category.value}`} className="block">
                          <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            REGISTER
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Awards */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  Project Awards
                </span>
              </h3>
              <p className="text-muted-foreground">Recognizing groundbreaking energy projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectAwards.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <Card className="relative overflow-hidden h-full border-2 border-accent/20 bg-white/95 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                      {/* Decorative Top Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary"></div>
                      
                      <CardHeader className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-6 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 pt-4">
                        <p className="text-muted-foreground mb-6 leading-relaxed min-h-[60px]">
                          {category.description}
                        </p>
                        <Link to={`/register?award=${category.value}`} className="block">
                          <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            REGISTER
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why The Awards Matter */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  WHY THE AWARDS MATTER
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg"></div>
            </div>
            
            <Card className="border-2 border-primary/20 bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
              <CardContent className="p-10 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center font-medium">
                  The ceremony not only acknowledges excellence but inspires collaboration and progress across all segments of the energy ecosystem.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mt-6">
                  Winners set new benchmarks for efficiency, innovation, and environmental stewardship — reflecting the UAE's leadership in the global energy transition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
