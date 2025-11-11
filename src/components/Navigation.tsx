import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "HAPPENINGS", path: "/happenings" },
    { name: "SPEAKERS", path: "/speakers" },
    { name: "PARTNERS", path: "/partners" },
    { name: "AWARDS", path: "/awards" },
  ];

  const isAwardsPage = location.pathname === "/awards";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-[background-color,box-shadow]",
        isScrolled || isAwardsPage
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Event Name */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 rounded-lg"></div>
              <div className="relative">
                <h1 className="text-base md:text-xl lg:text-2xl font-black tracking-tight leading-tight whitespace-nowrap" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {isScrolled || isAwardsPage ? (
                    <>
                      <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        Alternative Energy
                      </span>
                      <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-delayed">
                        {" "}Summit & Award
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                        Alternative Energy
                      </span>
                      <span className="text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                        {" "}Summit & Award
                      </span>
                    </>
                  )}
              </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  location.pathname === link.path
                       ? "text-secondary bg-secondary/20"
                           : isScrolled || isAwardsPage
                             ? "text-foreground hover:text-primary hover:bg-primary/5"
                         : "text-white hover:text-white/80 hover:bg-white/10"
                )}
                       style={!isScrolled && !isAwardsPage ? {textShadow: '0 2px 4px rgba(0,0,0,0.3)'} : {}}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register">
              <Button className="ml-4">REGISTER</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled || isAwardsPage ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={!isScrolled && !isAwardsPage ? {filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'} : {}}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 bg-[#f5f5dc]/95 backdrop-blur-md rounded-b-2xl -mx-4 px-4 mt-2 shadow-lg">
            <div className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors rounded-md",
                    location.pathname === link.path
                      ? "text-secondary bg-secondary/20"
                      : "text-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">REGISTER</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
