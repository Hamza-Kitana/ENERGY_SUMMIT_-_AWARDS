import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Trophy, Users, Mic, Handshake } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    interestedIn: "",
    awardCategory: "",
    message: "",
  });

  // Read award parameter from URL and set form data
  useEffect(() => {
    const awardParam = searchParams.get("award");
    const interestedParam = searchParams.get("interested");
    
    if (awardParam) {
      setFormData(prev => ({
        ...prev,
        interestedIn: "award",
        awardCategory: awardParam
      }));
      
      // Scroll to award category section after a short delay
      setTimeout(() => {
        const awardCategoryElement = document.getElementById("awardCategorySection");
        if (awardCategoryElement) {
          awardCategoryElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500);
    } else if (interestedParam === "award") {
      // If only interested=award is set (from Submit Nomination button)
      setFormData(prev => ({
        ...prev,
        interestedIn: "award"
      }));
      
      // Scroll to award category section after a short delay
      setTimeout(() => {
        const awardCategoryElement = document.getElementById("awardCategorySection");
        if (awardCategoryElement) {
          awardCategoryElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500);
    }
  }, [searchParams]);

  const awardCategories = [
    // Individual Awards
    { value: "energy-leader", label: "Energy Leader of the Year", category: "Individual" },
    { value: "young-innovator", label: "Young Innovator in Energy", category: "Individual" },
    { value: "women-leadership", label: "Women in Energy Leadership Award", category: "Individual" },
    // Private Sector Awards
    { value: "renewable-project", label: "Best Renewable Energy Project – Private Sector", category: "Private Sector" },
    { value: "sustainability", label: "Corporate Sustainability Initiative of the Year", category: "Private Sector" },
    // Public Sector Awards
    { value: "government-efficiency", label: "Government Energy Efficiency Initiative", category: "Public Sector" },
    { value: "smart-city", label: "Smart City & Green Infrastructure Award", category: "Public Sector" },
    // Project Awards
    { value: "hydrogen-project", label: "Outstanding Clean Hydrogen Project", category: "Project" },
    { value: "energy-storage", label: "Innovation in Energy Storage Award", category: "Project" },
    { value: "solar-wind", label: "Best Solar or Wind Project of the Year", category: "Project" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate award category if Award is selected
    if (formData.interestedIn === "award" && !formData.awardCategory) {
      toast({
        title: "Award Category Required",
        description: "Please select an award category.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Submitted!",
      description: "We'll send you a confirmation email shortly.",
    });
    
    // Here you would typically send the form data to your backend
    console.log("Form Data:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Register for the Summit
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Secure your spot at the premier alternative energy event of 2026
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Registration Form */}
            <Card className="max-w-3xl mx-auto border-2 border-white/10 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-slate-900">Registration Details</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={(e) => handleChange("jobTitle", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="interestedIn" className="text-sm sm:text-base">Interested In *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Attending Card */}
                      <div
                        onClick={() => {
                          handleChange("interestedIn", "attending");
                          handleChange("awardCategory", "");
                        }}
                        className={`relative p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                          formData.interestedIn === "attending"
                            ? "border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg shadow-primary/20 scale-105"
                            : "border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                            formData.interestedIn === "attending"
                              ? "bg-primary text-white shadow-lg"
                              : "bg-primary/10 text-primary group-hover:bg-primary/20"
                          }`}>
                            <Users className="h-7 w-7" />
                          </div>
                          <span className={`font-bold text-lg ${
                            formData.interestedIn === "attending"
                              ? "text-primary"
                              : "text-foreground"
                          }`}>
                            Attending
                          </span>
                        </div>
                        {formData.interestedIn === "attending" && (
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>

                      {/* Speaking Card */}
                      <div
                        onClick={() => {
                          handleChange("interestedIn", "speaking");
                          handleChange("awardCategory", "");
                        }}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                          formData.interestedIn === "speaking"
                            ? "border-secondary bg-gradient-to-br from-secondary/20 to-secondary/10 shadow-lg shadow-secondary/20 scale-105"
                            : "border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                            formData.interestedIn === "speaking"
                              ? "bg-secondary text-white shadow-lg"
                              : "bg-secondary/10 text-secondary group-hover:bg-secondary/20"
                          }`}>
                            <Mic className="h-7 w-7" />
                          </div>
                          <span className={`font-bold text-lg ${
                            formData.interestedIn === "speaking"
                              ? "text-secondary"
                              : "text-foreground"
                          }`}>
                            Speaking
                          </span>
                        </div>
                        {formData.interestedIn === "speaking" && (
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>

                      {/* Sponsoring Card */}
                      <div
                        onClick={() => {
                          handleChange("interestedIn", "sponsoring");
                          handleChange("awardCategory", "");
                        }}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                          formData.interestedIn === "sponsoring"
                            ? "border-accent bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg shadow-accent/20 scale-105"
                            : "border-accent/20 hover:border-accent/40 hover:bg-accent/5 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                            formData.interestedIn === "sponsoring"
                              ? "bg-accent text-white shadow-lg"
                              : "bg-accent/10 text-accent group-hover:bg-accent/20"
                          }`}>
                            <Handshake className="h-7 w-7" />
                          </div>
                          <span className={`font-bold text-lg ${
                            formData.interestedIn === "sponsoring"
                              ? "text-accent"
                              : "text-foreground"
                          }`}>
                            Sponsoring
                          </span>
                        </div>
                        {formData.interestedIn === "sponsoring" && (
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>

                      {/* Award Card */}
                      <div
                        onClick={() => {
                          handleChange("interestedIn", "award");
                        }}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                          formData.interestedIn === "award"
                            ? "border-accent bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg shadow-accent/20 scale-105"
                            : "border-accent/20 hover:border-accent/40 hover:bg-accent/5 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                            formData.interestedIn === "award"
                              ? "bg-accent text-white shadow-lg"
                              : "bg-accent/10 text-accent group-hover:bg-accent/20"
                          }`}>
                            <Trophy className="h-7 w-7" />
                          </div>
                          <span className={`font-bold text-lg ${
                            formData.interestedIn === "award"
                              ? "text-accent"
                              : "text-foreground"
                          }`}>
                            Award
                          </span>
                        </div>
                        {formData.interestedIn === "award" && (
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Award Category Selection - Only shown when Award is selected */}
                  {formData.interestedIn === "award" && (
                    <div id="awardCategorySection" className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Label htmlFor="awardCategory">Award Category *</Label>
                      <Select 
                        value={formData.awardCategory} 
                        onValueChange={(value) => handleChange("awardCategory", value)}
                        required={formData.interestedIn === "award"}
                      >
                        <SelectTrigger id="awardCategory" className="bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/30">
                          <SelectValue placeholder="Select an award category" />
                        </SelectTrigger>
                        <SelectContent>
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Individual Awards
                          </div>
                          {awardCategories.filter(a => a.category === "Individual").map((award) => (
                            <SelectItem key={award.value} value={award.value}>
                              {award.label}
                            </SelectItem>
                          ))}
                          
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">
                            Private Sector Awards
                          </div>
                          {awardCategories.filter(a => a.category === "Private Sector").map((award) => (
                            <SelectItem key={award.value} value={award.value}>
                              {award.label}
                            </SelectItem>
                          ))}
                          
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">
                            Public Sector Awards
                          </div>
                          {awardCategories.filter(a => a.category === "Public Sector").map((award) => (
                            <SelectItem key={award.value} value={award.value}>
                              {award.label}
                            </SelectItem>
                          ))}
                          
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">
                            Project Awards
                          </div>
                          {awardCategories.filter(a => a.category === "Project").map((award) => (
                            <SelectItem key={award.value} value={award.value}>
                              {award.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        Please select the award category you're interested in
                      </p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your interest..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Complete Registration
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By registering, you agree to our terms and conditions. 
                    You will receive a confirmation email with payment instructions.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
