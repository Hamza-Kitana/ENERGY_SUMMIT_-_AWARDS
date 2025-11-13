import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnergyBackground3D from "@/components/EnergyBackground3D";
import FloatingElements from "@/components/FloatingElements";
import SectionNavigation from "@/components/SectionNavigation";
import ProfileCard from "@/components/ProfileCard";
import { Calendar, MapPin, Users, Award, ArrowRight, Clock, Trophy, Star, Award as AwardIcon, ArrowUp, CheckCircle2, Lightbulb, TrendingUp, Network, Zap, Target, Globe, Shield, Building2, Wind, Car, Cpu, Battery, Plug, Factory, FileText, Droplet, GraduationCap, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import awardsBg from "@/assets/awards-bg.jpg";
import { Link } from "react-router-dom";
import heroEnergy from "@/assets/hero-energy.jpg";
import networkingImg from "@/assets/networking.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, useCallback } from "react";

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number | string;
  suffix?: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

interface HeroStatItemProps {
  value: number;
  suffix?: string;
  label: string;
  color: "primary" | "secondary" | "accent";
  delay: number;
}

const HeroStatItem = ({ value, suffix = "", label, color, delay }: HeroStatItemProps) => {
  const [startAnimation, setStartAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  const counter = useCounter({ 
    end: value, 
    start: 0,
    suffix: suffix,
    duration: 2000,
    trigger: startAnimation
  });
  
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent"
  };
  
  return (
    <div className="text-center">
      <div className={`text-3xl md:text-4xl font-black text-white mb-2 transition-all duration-500`} style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
        {counter?.count || `0${suffix}`}
      </div>
      <div className={`text-sm text-white font-semibold`} style={{textShadow: '0 2px 6px rgba(0,0,0,0.6)'}}>
        {label}
      </div>
    </div>
  );
};

interface VideoStatItemProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const VideoStatItem = ({ value, suffix = "", label, icon: Icon }: VideoStatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  const counter = useCounter({ 
    end: value, 
    start: 0,
    suffix: suffix,
    duration: 2500,
    trigger: isVisible
  });
  
  return (
    <div 
      ref={ref}
      className="text-center group"
    >
      <Icon className="h-10 w-10 md:h-12 md:w-12 text-white mx-auto mb-3 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 transition-all duration-500 drop-shadow-2xl">
        {counter?.count || `0${suffix}`}
      </div>
      <div className="text-sm md:text-base lg:text-lg text-white font-semibold drop-shadow-lg">
        {label}
      </div>
    </div>
  );
};

const StatItem = ({ icon: Icon, value, suffix = "", label, isVisible, delay }: StatItemProps) => {
  const isNumber = typeof value === 'number';
  const counter = isNumber ? useCounter({ 
    end: value, 
    suffix: suffix,
    duration: 2000,
    trigger: isVisible
  }) : null;

  return (
    <div 
      className={cn(
        "text-center transition-all duration-700",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-500 hover:scale-110" />
      <div className="text-4xl font-bold mb-2" ref={isNumber ? counter?.ref : undefined}>
        {isNumber ? counter?.count : value}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

interface ExpectedParticipationCardProps {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: "primary" | "secondary" | "accent";
  isVisible: boolean;
  delay: number;
}

const ExpectedParticipationCard = ({ icon, value, suffix, label, description, color, isVisible, delay }: ExpectedParticipationCardProps) => {
  const counter = useCounter({ 
    end: value, 
    start: 0,
    suffix: suffix,
    duration: 7000,
    trigger: isVisible
  });

  const colorClasses = {
    primary: {
      border: "border-primary/40",
      text: "text-primary",
      shadow: "hover:shadow-[0_20px_60px_rgba(3,24,89,0.3)]"
    },
    secondary: {
      border: "border-secondary/40",
      text: "text-secondary",
      shadow: "hover:shadow-[0_20px_60px_rgba(68,106,112,0.3)]"
    },
    accent: {
      border: "border-accent/40",
      text: "text-accent",
      shadow: "hover:shadow-[0_20px_60px_rgba(220,38,38,0.3)]"
    }
  };

  const colors = colorClasses[color];

  return (
    <div 
      className={cn(
        "group rounded-2xl md:rounded-3xl border-2 bg-white backdrop-blur p-6 sm:p-8 md:p-10 text-center shadow-xl hover:shadow-2xl md:hover:scale-105 transition-all duration-300",
        colors.border,
        colors.shadow
      )}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">{icon}</div>
      <div className={cn("text-4xl sm:text-5xl md:text-6xl font-black mb-3 md:mb-4 group-hover:scale-110 transition-transform", colors.text)}>
        {counter?.count || `0${suffix}`}
      </div>
      <div className="text-base sm:text-lg font-bold text-foreground mb-2 md:mb-3">{label}</div>
      <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
    </div>
  );
};

const Index = () => {
  const stats = [
    { icon: Users, value: 800, suffix: "+", label: "Total Attendees" },
    { icon: Users, value: 65, suffix: "+", label: "Speakers" },
    { icon: Award, value: 45, suffix: "+", label: "Sponsors & Exhibitors" },
    { icon: Globe, value: 25, suffix: "+", label: "Participating Countries" },
  ];
  const statsSectionRef = useScrollAnimation(0.2);
  const aboutSectionRef = useScrollAnimation(0.2);
  const highlightsSectionRef = useScrollAnimation(0.1);
  const ctaSectionRef = useScrollAnimation(0.2);
  const speakersSectionRef = useScrollAnimation(0.1);
  const happeningsSectionRef = useScrollAnimation(0.1);
  const partnersSectionRef = useScrollAnimation(0.1);
  const awardsSectionRef = useScrollAnimation(0.1);
  const whyAttendRef = useScrollAnimation(0.1);
  const keyTakeawaysRef = useScrollAnimation(0.1);
  const eventFeaturesRef = useScrollAnimation(0.1);
  const testimonialsRef = useScrollAnimation(0.1);
  const faqRef = useScrollAnimation(0.1);
  const expectedParticipationRef = useScrollAnimation(0.2);
  const whoAttendRef = useScrollAnimation(0.15);
  
  // Job Titles carousel drag functionality
  const [jobTitlesIsDragging, setJobTitlesIsDragging] = useState(false);
  const [jobTitlesStartX, setJobTitlesStartX] = useState(0);
  const [jobTitlesTranslateX, setJobTitlesTranslateX] = useState(0);
  const jobTitlesCarouselRef = useRef<HTMLDivElement>(null);
  const [jobTitlesIsPaused, setJobTitlesIsPaused] = useState(false);
  const jobTitlesAnimationRef = useRef<number>(0);
  
  const jobTitles = [
    { title: "Government official", icon: Shield, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop&q=80" },
    { title: "CEOs / Managing Directors", icon: Trophy, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80" },
    { title: "Chief Sustainability Officers", icon: Target, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&q=80" },
    { title: "Chief Technology Officers", icon: Zap, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80" },
    { title: "Directors of Renewable Energy, Hydrogen, and Decarbonization", icon: Globe, image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&q=80" },
    { title: "Heads of ESG, Innovation, and Strategy", icon: Lightbulb, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80" },
    { title: "Project Developers & Investment Directors", icon: TrendingUp, image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop&q=80" },
    { title: "Policy Advisors & Government Relations Heads", icon: Network, image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&q=80" },
    { title: "Research & Development Directors", icon: Star, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&q=80" }
  ];
  
  useEffect(() => {
    if (!jobTitlesIsPaused && !jobTitlesIsDragging && jobTitlesCarouselRef.current) {
      const animate = () => {
        if (jobTitlesCarouselRef.current) {
          const currentTransform = jobTitlesCarouselRef.current.style.transform;
          const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
          const cardWidth = 320 + 24; // min-w-[320px] + gap-6
          const totalWidth = jobTitles.length * cardWidth;
          
          let newX = currentX - 0.5;
          if (Math.abs(newX) >= totalWidth) {
            newX = 0;
          }
          
          jobTitlesCarouselRef.current.style.transform = `translateX(${newX}px)`;
          jobTitlesAnimationRef.current = requestAnimationFrame(animate);
        }
      };
      jobTitlesAnimationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (jobTitlesAnimationRef.current) {
        cancelAnimationFrame(jobTitlesAnimationRef.current);
      }
    };
  }, [jobTitlesIsPaused, jobTitlesIsDragging, jobTitles.length]);
  
  const handleJobTitlesMouseDown = useCallback((e: React.MouseEvent) => {
    if (!jobTitlesCarouselRef.current) return;
    setJobTitlesIsDragging(true);
    setJobTitlesIsPaused(true);
    setJobTitlesStartX(e.pageX);
    const currentTransform = jobTitlesCarouselRef.current.style.transform;
    const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
    setJobTitlesTranslateX(currentX);
  }, []);
  
  const handleJobTitlesMouseLeave = useCallback(() => {
    setJobTitlesIsDragging(false);
    setTimeout(() => setJobTitlesIsPaused(false), 1000);
  }, []);
  
  const handleJobTitlesMouseUp = useCallback(() => {
    setJobTitlesIsDragging(false);
    setTimeout(() => setJobTitlesIsPaused(false), 1000);
  }, []);
  
  const handleJobTitlesMouseMove = useCallback((e: React.MouseEvent) => {
    if (!jobTitlesIsDragging || !jobTitlesCarouselRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - jobTitlesStartX) * 1.5;
    jobTitlesCarouselRef.current.style.transform = `translateX(${jobTitlesTranslateX + walk}px)`;
  }, [jobTitlesIsDragging, jobTitlesStartX, jobTitlesTranslateX]);
  
  const handleJobTitlesTouchStart = useCallback((e: React.TouchEvent) => {
    if (!jobTitlesCarouselRef.current) return;
    setJobTitlesIsDragging(true);
    setJobTitlesIsPaused(true);
    setJobTitlesStartX(e.touches[0].pageX);
    const currentTransform = jobTitlesCarouselRef.current.style.transform;
    const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
    setJobTitlesTranslateX(currentX);
  }, []);
  
  const handleJobTitlesTouchMove = useCallback((e: React.TouchEvent) => {
    if (!jobTitlesIsDragging || !jobTitlesCarouselRef.current) return;
    const walk = (e.touches[0].pageX - jobTitlesStartX) * 1.5;
    jobTitlesCarouselRef.current.style.transform = `translateX(${jobTitlesTranslateX + walk}px)`;
  }, [jobTitlesIsDragging, jobTitlesStartX, jobTitlesTranslateX]);
  
  const handleJobTitlesTouchEnd = useCallback(() => {
    setJobTitlesIsDragging(false);
    setTimeout(() => setJobTitlesIsPaused(false), 1000);
  }, []);
  
  // Scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const partnershipLevels = [
    {
      level: "Platinum Partners",
      description: "Premier event sponsors with maximum visibility",
      slots: 4,
    },
    {
      level: "Gold Partners",
      description: "Strategic partners supporting our mission",
      slots: 6,
    },
    {
      level: "Silver Partners",
      description: "Contributing partners in renewable energy",
      slots: 8,
    },
    {
      level: "Supporting Partners",
      description: "Organizations committed to sustainable energy",
      slots: 12,
    },
  ];
  
  // Partners carousel drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);
  
  useEffect(() => {
    if (!isPaused && !isDragging && carouselRef.current) {
      const animate = () => {
        if (carouselRef.current) {
          const currentTransform = carouselRef.current.style.transform;
          const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
          const cardWidth = 400 + 24; // min-w-[400px] + gap-6
          const totalWidth = partnershipLevels.length * cardWidth;
          
          let newX = currentX - 1;
          if (Math.abs(newX) >= totalWidth) {
            newX = 0;
          }
          
          carouselRef.current.style.transform = `translateX(${newX}px)`;
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging, partnershipLevels.length]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX);
    const currentTransform = carouselRef.current.style.transform;
    const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
    setTranslateX(currentX);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 1.5;
    carouselRef.current.style.transform = `translateX(${translateX + walk}px)`;
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX);
    const currentTransform = carouselRef.current.style.transform;
    const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
    setTranslateX(currentX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const walk = (e.touches[0].pageX - startX) * 1.5;
    carouselRef.current.style.transform = `translateX(${translateX + walk}px)`;
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  const speakers = [
    {
      name: "To Be Announced",
      title: "Keynote Speaker",
      expertise: "Solar Energy Innovation",
      description: "Leading expert in photovoltaic technology and solar infrastructure",
    },
    {
      name: "To Be Announced",
      title: "Industry Leader",
      expertise: "Wind Power Solutions",
      description: "Pioneer in offshore wind farm development and optimization",
    },
    {
      name: "To Be Announced",
      title: "Research Director",
      expertise: "Energy Storage",
      description: "Specialist in battery technology and grid-scale storage solutions",
    },
    {
      name: "To Be Announced",
      title: "Policy Expert",
      expertise: "Sustainable Energy Policy",
      description: "Advisor on renewable energy regulations and international standards",
    },
    {
      name: "To Be Announced",
      title: "Investment Specialist",
      expertise: "Green Finance",
      description: "Expert in renewable energy investments and funding strategies",
    },
    {
      name: "To Be Announced",
      title: "Technology Innovator",
      expertise: "Smart Grid Solutions",
      description: "Developer of next-generation energy management systems",
    },
  ];

  const events = [
    {
      time: "08:00 - 09:00",
      title: "Registration & Networking Breakfast",
      description: "Connect with industry leaders and professionals over breakfast",
      location: "Main Lobby",
      image: networkingImg,
    },
    {
      time: "09:00 - 09:30",
      title: "Opening Ceremony",
      description: "Welcome address and keynote on the future of alternative energy",
      location: "Main Hall",
      image: heroEnergy,
    },
    {
      time: "09:30 - 11:00",
      title: "Panel Discussion: Solar Energy Innovation",
      description: "Expert panel discussing latest developments in solar technology",
      location: "Conference Room A",
      image: heroEnergy,
    },
    {
      time: "11:00 - 11:30",
      title: "Coffee Break & Exhibition",
      description: "Explore cutting-edge renewable energy solutions",
      location: "Exhibition Hall",
      image: networkingImg,
    },
    {
      time: "11:30 - 13:00",
      title: "Workshop: Wind Energy Implementation",
      description: "Hands-on session on wind energy project development",
      location: "Workshop Room 1",
      image: heroEnergy,
    },
    {
      time: "13:00 - 14:30",
      title: "Networking Lunch",
      description: "Continue discussions over a sustainable cuisine lunch",
      location: "Dining Hall",
      image: networkingImg,
    },
    {
      time: "14:30 - 16:00",
      title: "Technical Sessions: Energy Storage",
      description: "Deep dive into battery technology and grid solutions",
      location: "Conference Room B",
      image: heroEnergy,
    },
    {
      time: "16:00 - 16:30",
      title: "Afternoon Refreshments",
      description: "Network and recharge",
      location: "Lounge Area",
      image: networkingImg,
    },
    {
      time: "16:30 - 18:00",
      title: "Investment Forum",
      description: "Connect with investors and explore funding opportunities",
      location: "Main Hall",
      image: heroEnergy,
    },
    {
      time: "18:30 - 21:00",
      title: "Awards Ceremony & Gala Dinner",
      description: "Celebrating excellence in alternative energy",
      location: "Grand Ballroom",
      image: awardsBg,
    },
  ];

  const awardCategories = [
    {
      icon: Trophy,
      title: "Excellence in Solar Energy",
      description: "Recognizing outstanding achievements in solar power innovation and implementation",
      criteria: ["Innovative technology", "Environmental impact", "Scalability"],
    },
    {
      icon: Star,
      title: "Wind Energy Pioneer",
      description: "Honoring leaders in wind energy development and sustainable practices",
      criteria: ["Technical excellence", "Project scale", "Community benefit"],
    },
    {
      icon: AwardIcon,
      title: "Energy Storage Innovation",
      description: "Celebrating breakthroughs in energy storage and grid solutions",
      criteria: ["Technology advancement", "Efficiency gains", "Market impact"],
    },
    {
      icon: Trophy,
      title: "Sustainable City Initiative",
      description: "Recognizing cities leading in renewable energy adoption",
      criteria: ["Implementation scope", "Carbon reduction", "Public engagement"],
    },
    {
      icon: Star,
      title: "Green Investment Leader",
      description: "Honoring investors driving the renewable energy transition",
      criteria: ["Investment impact", "Portfolio diversity", "Long-term commitment"],
    },
    {
      icon: AwardIcon,
      title: "Young Innovator Award",
      description: "Celebrating emerging talents in alternative energy",
      criteria: ["Innovation potential", "Research contribution", "Future vision"],
    },
  ];

  const highlights = [
    {
      title: "Expert Speakers",
      description: "Learn from global leaders in renewable energy and sustainability",
    },
    {
      title: "Networking",
      description: "Connect with industry professionals, investors, and innovators",
    },
    {
      title: "Awards Ceremony",
      description: "Celebrate excellence and innovation in alternative energy",
    },
    {
      title: "Exhibition",
      description: "Explore cutting-edge technologies and solutions",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SectionNavigation />
      
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroEnergy})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <EnergyBackground3D />
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-8 sm:pb-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight tracking-tight">
                <div className="relative flex flex-col items-center justify-center py-4 sm:py-8 md:py-12 lg:py-16">
                  {/* Title Above 2026 */}
                  <span className="relative z-10 font-black text-sky-300 uppercase whitespace-nowrap mb-2 sm:mb-4 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl" style={{lineHeight: '1.3', textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                    Alternative Energy Summit & Award
                  </span>
                  {/* Background 2026 - More visible */}
                  <span className="absolute text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black opacity-25 text-white select-none pointer-events-none -translate-y-4 sm:-translate-y-6 md:-translate-y-8" style={{textShadow: '0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.15)'}}>
                    2026
                  </span>
                </div>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-3 sm:mb-4 font-semibold px-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>ABU DHABI, UAE</p>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-6 sm:mb-10 font-light max-w-3xl mx-auto px-2">
              Empowering the Future of Clean Energy<br />
              & Sustainable Growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4 sm:mb-6 px-2">
              <Link to="/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold">
                  REGISTER NOW
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link to="/happenings" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  VIEW SCHEDULE
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-semibold px-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'}} />
                <span>Date: TBD</span>
              </span>
              <span className="opacity-80 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'}} />
                <span>Venue: TBD</span>
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-0 px-2">
              <HeroStatItem 
                value={800} 
                suffix="+" 
                label="Total Attendees" 
                color="primary"
                delay={0}
              />
              <HeroStatItem 
                value={65} 
                suffix="+" 
                label="Speakers" 
                color="primary"
                delay={200}
              />
              <HeroStatItem 
                value={45} 
                suffix="+" 
                label="Sponsors & Exhibitors" 
                color="primary"
                delay={400}
              />
              <HeroStatItem 
                value={25} 
                suffix="+" 
                label="Participating Countries" 
                color="primary"
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-primary/5 to-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto opacity-100 translate-y-0">
            <div className="text-center mb-6 sm:mb-8">
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-black/20 shadow-lg inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    ABOUT THE EVENT
                  </span>
                </h2>
                <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-3 sm:mb-4"></div>
              </div>
            </div>
            
            {/* Main Event Description with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-6 sm:mb-8">
              {/* Box containing text and cards */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border-2 border-primary/20">
                <p className="text-sm sm:text-base text-white leading-relaxed font-normal mb-4 sm:mb-6">
                  The <strong className="text-primary">Energy Summit & Awards 2026 – Abu Dhabi</strong> is the region's premier platform dedicated to accelerating the transition toward clean, sustainable, and secure energy systems. 
                  The event will unite regional leaders, government representatives, energy executives, innovators, and investors to discuss policy frameworks, 
                  emerging technologies, and investment strategies shaping the global energy future.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-l-4 border-primary hover:shadow-md transition-all backdrop-blur-sm">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm">Strategic Policy & Investment Frameworks</h4>
                      <p className="text-xs text-white/90">Explore comprehensive policy frameworks and investment strategies driving the region's energy transition towards net-zero goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg border-l-4 border-secondary hover:shadow-md transition-all backdrop-blur-sm">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mt-0.5">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm">Cutting-Edge Technology & Innovation</h4>
                      <p className="text-xs text-white/90">Discover breakthrough technologies in renewable energy, hydrogen production, energy storage, and smart grid solutions transforming the energy landscape.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-l-4 border-primary hover:shadow-md transition-all backdrop-blur-sm">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                      <Network className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm">Exclusive Networking & Partnerships</h4>
                      <p className="text-xs text-white/90">Connect with industry leaders, government officials, investors, and innovators to build strategic partnerships and explore collaboration opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg border-l-4 border-secondary hover:shadow-md transition-all backdrop-blur-sm">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mt-0.5">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm">Energy Excellence Awards Ceremony</h4>
                      <p className="text-xs text-white/90">Celebrate outstanding achievements and recognize leaders driving innovation, sustainability, and excellence across the energy sector.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&q=80"
                    alt="Alternative Energy Summit Event - Solar Panels and Renewable Energy"
                    className="w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[440px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span className="font-semibold text-sm sm:text-base">Abu Dhabi, United Arab Emirates</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                      <span className="font-semibold text-sm sm:text-base">Date: TBD • Venue: TBD</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center transform rotate-12">
                  <Star className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-2xl border-2 border-primary/20 mt-6">
                  <p className="text-base text-white leading-relaxed font-normal">
                    Over two days, the Summit will feature interactive panel discussions, innovation showcases, strategic networking sessions, 
                    and an exclusive Energy Excellence Awards Ceremony, celebrating outstanding achievements across the public and private sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Participation (Green Background) */}
      <section id="participation" className="py-20 bg-sky-100 relative overflow-hidden" ref={expectedParticipationRef.ref}>
        {/* Wavy Background Line - Diagonal from top right to bottom left */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            style={{ 
              transform: 'rotate(-5deg)',
              transformOrigin: 'center',
              width: '120%',
              height: '120%',
              left: '-10%',
              top: '-10%'
            }}
          >
            <defs>
              <linearGradient id="wavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(227 93% 18%)" stopOpacity="0.25" />
                <stop offset="50%" stopColor="hsl(188 24% 35%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(227 93% 18%)" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q200,350 400,400 T800,400 T1200,400 L1200,0 L0,0 Z"
              fill="url(#wavyGradient)"
            />
            <path
              d="M0,400 Q200,450 400,400 T800,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#wavyGradient)"
              opacity="0.6"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">EXPECTED PARTICIPATION</span>
            </h3>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-6"></div>
          </div>
          
          {/* Box containing text and cards */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 max-w-7xl mx-auto mb-10">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold max-w-4xl mx-auto leading-relaxed text-center mb-12">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-lg">
                Join 800+ industry leaders, experts, and innovators from across the region
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ExpectedParticipationCard
              icon="👥"
              value={800}
              suffix="+"
              label="Total Attendees"
              description="Industry leaders & professionals"
              color="primary"
              isVisible={expectedParticipationRef.isVisible}
              delay={0}
            />
            <ExpectedParticipationCard
              icon="🎤"
              value={65}
              suffix="+"
              label="Expert Speakers"
              description="Thought leaders & innovators"
              color="secondary"
              isVisible={expectedParticipationRef.isVisible}
              delay={200}
            />
            <ExpectedParticipationCard
              icon="🤝"
              value={45}
              suffix="+"
              label="Sponsors & Exhibitors"
              description="Leading companies"
              color="accent"
              isVisible={expectedParticipationRef.isVisible}
              delay={400}
            />
            <ExpectedParticipationCard
              icon="🌍"
              value={25}
              suffix="+"
              label="Participating Countries"
              description="Global collaboration"
              color="primary"
              isVisible={expectedParticipationRef.isVisible}
              delay={600}
            />
            </div>
          </div>
        </div>
      </section>

      {/* Who Will Attend Section */}
      <section id="who-attend" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" ref={whoAttendRef.ref}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover scale-135"
            src="/sk.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
          {/* Overlay (غباش) */}
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-lg">
                WHO WILL ATTEND
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto px-2">
              Expected delegate breakdown by category
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary via-secondary to-primary">
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-white font-bold text-sm sm:text-base">Category</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-center text-white font-bold text-sm sm:text-base">% of Delegates</th>
                      <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-white font-bold text-sm sm:text-base">Typical Job Titles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="group border-b border-primary/10 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300 hover:shadow-lg">
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <span className="font-bold text-foreground text-xs sm:text-sm">Government & Semi-Government</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white font-black text-base sm:text-xl shadow-xl group-hover:scale-110 transition-transform">
                            45%
              </span>
                          <div className="w-16 sm:w-20 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-primary/60 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Ministers, Undersecretaries, Directors General</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="group border-b border-primary/10 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-transparent transition-all duration-300 hover:shadow-lg">
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <span className="font-bold text-foreground text-xs sm:text-sm">Investors & Financial Institutions</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white font-black text-base sm:text-xl shadow-xl group-hover:scale-110 transition-transform">
                            15%
                          </span>
                          <div className="w-16 sm:w-20 h-1.5 bg-secondary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-secondary/60 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">CIOs, Portfolio Managers, ESG Heads</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="group border-b border-primary/10 hover:bg-gradient-to-r hover:from-accent/10 hover:to-transparent transition-all duration-300 hover:shadow-lg">
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Factory className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <span className="font-bold text-foreground text-xs sm:text-sm">Corporate & Industrial Energy Consumers</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-white font-black text-base sm:text-xl shadow-xl group-hover:scale-110 transition-transform">
                            20%
                          </span>
                          <div className="w-16 sm:w-20 h-1.5 bg-accent/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-accent/60 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">CSOs, Energy & Sustainability Directors</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="group border-b border-primary/10 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover:shadow-lg">
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/80 via-secondary/80 to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <span className="font-bold text-foreground text-xs sm:text-sm">Academia & Research</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/80 via-secondary/80 to-primary/80 text-white font-black text-base sm:text-xl shadow-xl group-hover:scale-110 transition-transform">
                            10%
                          </span>
                          <div className="w-16 sm:w-20 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-primary/60 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Professors, Researchers, Innovation Leads</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="group hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 hover:shadow-lg">
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-secondary/80 via-primary/80 to-secondary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <span className="font-bold text-foreground text-xs sm:text-sm">Regional & International Organizations</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-secondary/80 via-primary/80 to-secondary/80 text-white font-black text-base sm:text-xl shadow-xl group-hover:scale-110 transition-transform">
                            10%
                          </span>
                          <div className="w-16 sm:w-20 h-1.5 bg-secondary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-secondary/80 to-primary/80 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-secondary/60 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Program Directors, Policy Experts</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">Government & Semi-Government</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-primary">45%</span>
                    <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-primary/10">
                    <Briefcase className="h-4 w-4 text-primary/60 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">Ministers, Undersecretaries, Directors General</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-secondary to-secondary/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">Investors & Financial Institutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-secondary">15%</span>
                    <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-secondary/10">
                    <Briefcase className="h-4 w-4 text-secondary/60 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">CIOs, Portfolio Managers, ESG Heads</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-accent to-accent/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Factory className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">Corporate & Industrial Energy Consumers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-accent">20%</span>
                    <div className="w-full h-2 bg-accent/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-accent/10">
                    <Briefcase className="h-4 w-4 text-accent/60 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">CSOs, Energy & Sustainability Directors</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/80 to-secondary/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">Academia & Research</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-primary">10%</span>
                    <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-primary/10">
                    <Briefcase className="h-4 w-4 text-primary/60 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">Professors, Researchers, Innovation Leads</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-secondary/80 to-primary/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">Regional & International Organizations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-secondary">10%</span>
                    <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary/80 to-primary/80 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-secondary/10">
                    <Briefcase className="h-4 w-4 text-secondary/60 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">Program Directors, Policy Experts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Titles Expected Section */}
      <section id="job-titles" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {[
            { icon: Zap, delay: 0, duration: 20, startX: '10%', startY: '20%' },
            { icon: Globe, delay: 2, duration: 25, startX: '80%', startY: '30%' },
            { icon: Target, delay: 4, duration: 18, startX: '20%', startY: '70%' },
            { icon: Trophy, delay: 1, duration: 22, startX: '70%', startY: '80%' },
            { icon: Star, delay: 3, duration: 24, startX: '50%', startY: '10%' },
            { icon: Lightbulb, delay: 5, duration: 19, startX: '15%', startY: '50%' },
            { icon: Network, delay: 2.5, duration: 21, startX: '85%', startY: '60%' },
            { icon: Shield, delay: 1.5, duration: 23, startX: '40%', startY: '90%' },
            { icon: TrendingUp, delay: 3.5, duration: 20, startX: '60%', startY: '15%' },
            { icon: Users, delay: 4.5, duration: 26, startX: '30%', startY: '40%' },
            { icon: Award, delay: 0.5, duration: 22, startX: '90%', startY: '50%' },
            { icon: CheckCircle2, delay: 6, duration: 18, startX: '5%', startY: '80%' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: item.startX,
                  top: item.startY,
                  animation: `floatSpace ${item.duration}s ease-in-out infinite, iconColorChange ${item.duration * 0.8}s ease-in-out infinite`,
                  animationDelay: `${item.delay}s, ${item.delay * 0.5}s`,
                }}
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16" />
              </div>
            );
          })}
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                JOB TITLES EXPECTED
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
          </div>

          {/* Job Titles Cards - Mobile View */}
          <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto md:hidden">
            {jobTitles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-xl border-2 border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-4 flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Job Titles Cards - Desktop View */}
          <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {jobTitles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="w-full h-[160px] sm:h-[170px] md:h-[180px]"
                >
                  <ProfileCard
                    name={item.title}
                    title=""
                    avatarUrl=""
                    enableTilt={true}
                    enableMobileTilt={false}
                    showUserInfo={false}
                    showIcon={true}
                    icon={Icon}
                    innerGradient="linear-gradient(145deg, rgba(227, 93%, 18%, 0.3) 0%, rgba(188, 24%, 35%, 0.3) 100%)"
                    behindGlowColor="rgba(59, 130, 246, 0.5)"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Should Sponsor or Exhibit Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                WHO SHOULD SPONSOR OR EXHIBIT
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
          </div>

          {/* Vendors & Solution Providers */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Vendors & Solution Providers
              </h3>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 rotate-6 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Wind className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Renewable Energy Equipment Manufacturers</h4>
                    <p className="text-xs text-muted-foreground">(Solar, Wind, Hydrogen)</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 -rotate-4 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Battery className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Smart Grid & Energy Storage Companies</h4>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-secondary/30 hover:border-secondary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 rotate-3 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Droplet className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Carbon Capture & Hydrogen Technology Providers</h4>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 -rotate-5 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plug className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Smart Metering and IoT Solution Developers</h4>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-secondary/30 hover:border-secondary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 rotate-1 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Car className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Clean Mobility & EV Infrastructure Firms</h4>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 -rotate-3 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Digital Energy and AI-driven Analytics Companies</h4>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-secondary/30 hover:border-secondary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 rotate-5 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Factory className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Engineering, Procurement & Construction (EPC) Firms</h4>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 w-72 sm:w-80 md:w-96 -rotate-6 hover:rotate-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Financial & Legal Advisory Firms</h4>
                    <p className="text-xs text-muted-foreground">specialized in energy projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with Stats */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative overflow-hidden shadow-2xl border-y-2 border-primary/20 group hover:shadow-3xl transition-all duration-300">
          <div className="aspect-[21/6] w-full relative">
            <video
              className="w-full h-full object-cover"
              src="/foo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Stats Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  <VideoStatItem
                    value={800}
                    suffix="+"
                    label="Total Attendees"
                    icon={Users}
                  />
                  <VideoStatItem
                    value={65}
                    suffix="+"
                    label="Speakers"
                    icon={Award}
                  />
                  <VideoStatItem
                    value={45}
                    suffix="+"
                    label="Sponsors & Exhibitors"
                    icon={Trophy}
                  />
                  <VideoStatItem
                    value={25}
                    suffix="+"
                    label="Participating Countries"
                    icon={Globe}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Index;
