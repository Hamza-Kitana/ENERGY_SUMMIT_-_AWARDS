import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Speakers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
          <FloatingElements />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Speakers
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border-2 border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Coming Soon</h2>
                <p className="text-xl text-muted-foreground">
                  Stay tuned for our lineup of world-class speakers. Check back soon for updates!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Speakers;
