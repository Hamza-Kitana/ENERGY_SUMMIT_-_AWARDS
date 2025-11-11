import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TWO-DAY SUMMIT AGENDA
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive program covering strategy, policy, technology, and innovation
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Date: TBD</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Venue: TBD • Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">UPCOMING PROJECTS & INVESTMENT OUTLOOK (2025–2030)</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Abu Dhabi and the wider UAE are committing over <strong className="text-primary">USD 160 billion</strong> to clean and renewable energy projects as part of the UAE Net Zero by 2050 strategy.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <th className="border-2 border-primary/20 p-4 text-left font-bold text-foreground">Project</th>
                    <th className="border-2 border-primary/20 p-4 text-left font-bold text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingProjects.map((project, index) => (
                    <tr key={index} className="hover:bg-primary/5 transition-colors">
                      <td className="border-2 border-primary/20 p-4 font-semibold text-foreground">{project.project}</td>
                      <td className="border-2 border-primary/20 p-4 text-muted-foreground">{project.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1 Schedule */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">DAY 1 – STRATEGY, POLICY & FUTURE ENERGY LANDSCAPE</h2>
            </div>
            <div className="space-y-4">
              {day1Events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-bold text-primary">{event.time}</span>
                        </div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Day 2 Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">DAY 2 – TECHNOLOGY, INNOVATION & ENERGY AWARDS</h2>
            </div>
            <div className="space-y-4">
              {day2Events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                  <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-secondary" />
                          <span className="font-bold text-secondary">{event.time}</span>
                      </div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Happenings;
