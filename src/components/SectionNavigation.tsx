import { useState, useEffect } from "react";
import { Home, Calendar, Users, Briefcase, Trophy, Handshake, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Calendar },
    { id: "participation", label: "Participation", icon: Users },
    { id: "who-attend", label: "Attendees", icon: Briefcase },
    { id: "job-titles", label: "Job Titles", icon: Trophy },
    { id: "sponsor-exhibit", label: "Sponsor", icon: Handshake },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const isHeroSection = activeSection === "hero" || activeSection === "";

  return (
    <>
      {/* Toggle Button - Visible only on mobile/tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "md:hidden fixed top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-r-full bg-white/30 backdrop-blur-sm shadow-lg border border-primary/20 border-l-0 transition-all duration-300",
          isOpen ? "left-[72px]" : "left-0",
          isHeroSection ? "text-white/90" : "text-foreground/70"
        )}
        aria-label={isOpen ? "Hide navigation" : "Show navigation"}
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      {/* Navigation Icons */}
      <div
        className={cn(
          "fixed top-1/2 -translate-y-1/2 z-40 transition-all duration-300",
          "md:left-4",
          isOpen ? "left-2" : "-left-20"
        )}
      >
        <div className="flex flex-col gap-2 sm:gap-3 bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg border border-primary/20">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsOpen(false); // Close menu after clicking on mobile
                }}
                className={cn(
                  "group relative p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-white scale-110 shadow-lg"
                    : isHeroSection
                      ? "text-white/90 hover:text-white hover:bg-white/20 hover:scale-105"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-105"
                )}
                aria-label={section.label}
              >
                <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                
                {/* Tooltip - Hidden on mobile */}
                <span className="hidden md:block absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl">
                  {section.label}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionNavigation;

