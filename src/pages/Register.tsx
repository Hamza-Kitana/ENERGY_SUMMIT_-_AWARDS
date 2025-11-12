import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    interestedIn: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Register for the Summit
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure your spot at the premier alternative energy event of 2026
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Registration Form */}
            <Card className="max-w-3xl mx-auto border-2 border-white/10 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                <CardTitle className="text-2xl text-slate-900">Registration Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="interestedIn">Interested In *</Label>
                    <Select value={formData.interestedIn} onValueChange={(value) => handleChange("interestedIn", value)}>
                      <SelectTrigger id="interestedIn">
                        <SelectValue placeholder="Select an award category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energy-leader">Energy Leader of the Year</SelectItem>
                        <SelectItem value="young-innovator">Young Innovator in Energy</SelectItem>
                        <SelectItem value="women-leadership">Women in Energy Leadership Award</SelectItem>
                        <SelectItem value="renewable-project">Best Renewable Energy Project – Private Sector</SelectItem>
                        <SelectItem value="sustainability">Corporate Sustainability Initiative of the Year</SelectItem>
                        <SelectItem value="government-efficiency">Government Energy Efficiency Initiative</SelectItem>
                        <SelectItem value="smart-city">Smart City & Green Infrastructure Award</SelectItem>
                        <SelectItem value="hydrogen-project">Outstanding Clean Hydrogen Project</SelectItem>
                        <SelectItem value="energy-storage">Innovation in Energy Storage Award</SelectItem>
                        <SelectItem value="solar-wind">Best Solar or Wind Project of the Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
