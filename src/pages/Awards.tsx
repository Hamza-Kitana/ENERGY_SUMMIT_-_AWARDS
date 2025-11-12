import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Award as AwardIcon } from "lucide-react";
import awardsBg from "@/assets/awards-bg.jpg";

const Awards = () => {
  const individualAwards = [
    {
      icon: Trophy,
      title: "Energy Leader of the Year",
      description: "Recognizing a visionary individual leading transformative energy strategies.",
      type: "Individual"
    },
    {
      icon: Star,
      title: "Young Innovator in Energy",
      description: "Honoring outstanding achievements of professionals under 35 driving change through innovation.",
      type: "Individual"
    },
    {
      icon: AwardIcon,
      title: "Women in Energy Leadership Award",
      description: "Celebrating female leadership and advocacy for diversity in the energy sector.",
      type: "Individual"
    },
  ];

  const privateSectorAwards = [
    {
      icon: Trophy,
      title: "Best Renewable Energy Project – Private Sector",
      description: "Recognizing private companies implementing high-impact renewable projects.",
      type: "Private Sector"
    },
    {
      icon: Star,
      title: "Corporate Sustainability Initiative of the Year",
      description: "For organizations achieving exceptional ESG results and carbon reduction.",
      type: "Private Sector"
    },
  ];

  const publicSectorAwards = [
    {
      icon: Trophy,
      title: "Government Energy Efficiency Initiative",
      description: "Highlighting ministries or authorities executing impactful energy-saving programs.",
      type: "Public Sector"
    },
    {
      icon: Star,
      title: "Smart City & Green Infrastructure Award",
      description: "Recognizing innovation in urban sustainability and smart energy infrastructure.",
      type: "Public Sector"
    },
  ];

  const projectAwards = [
    {
      icon: Trophy,
      title: "Outstanding Clean Hydrogen Project",
      description: "Honoring excellence in hydrogen production, technology, or infrastructure.",
      type: "Project"
    },
    {
      icon: Star,
      title: "Innovation in Energy Storage Award",
      description: "Rewarding breakthroughs in battery or grid storage technology.",
      type: "Project"
    },
    {
      icon: AwardIcon,
      title: "Best Solar or Wind Project of the Year",
      description: "Recognizing large-scale renewable power generation success stories.",
      type: "Project"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-24 relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${awardsBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/80" />
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Trophy className="h-16 w-16 sm:h-20 sm:w-20 text-accent" />
            </div>
            <div className="flex flex-col items-center gap-4 mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                ENERGY EXCELLENCE AWARDS
              </h1>
              <div className="px-6 py-3 bg-gradient-to-r from-primary via-secondary to-primary rounded-full border-2 border-white/50 shadow-2xl backdrop-blur-sm">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                  2026
                </span>
              </div>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-black mx-auto rounded-full mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
              The Energy Excellence Awards celebrate organizations and individuals driving innovation, sustainability, and excellence in the energy transition. The awards promote collaboration and recognize contributions that advance the UAE's energy and climate goals.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Submit Nomination
            </Button>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">AWARD CATEGORIES</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Individual Awards */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white drop-shadow-md">Individual Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {individualAwards.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-white/10 bg-white/95 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-700 mb-4">
                        {category.description}
                      </p>
                      <Button className="w-full">REGISTER</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Private Sector Awards */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white drop-shadow-md">Private Sector Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {privateSectorAwards.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border-2 border-white/10 bg-white/95 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-8 w-8 text-indigo-600" />
                        <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-700 mb-4">
                        {category.description}
                      </p>
                      <Button className="w-full">REGISTER</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Public Sector Awards */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white drop-shadow-md">Public Sector Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {publicSectorAwards.map((category, index) => {
              const Icon = category.icon;
              return (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-white/10 bg-white/95 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-8 w-8 text-purple-600" />
                      <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-slate-700 mb-4">
                      {category.description}
                    </p>
                      <Button className="w-full">REGISTER</Button>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>

          {/* Project Awards */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white drop-shadow-md">Project Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectAwards.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-white/10 bg-white/95 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-indigo-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-700 mb-4">
                        {category.description}
                      </p>
                      <Button className="w-full">REGISTER</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why The Awards Matter */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">WHY THE AWARDS MATTER</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed text-center">
                  The ceremony not only acknowledges excellence but inspires collaboration and progress across all segments of the energy ecosystem. 
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
