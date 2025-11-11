import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Happenings from "./pages/Happenings";
import Speakers from "./pages/Speakers";
import Partners from "./pages/Partners";
import Awards from "./pages/Awards";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import heroEnergy from "@/assets/hero-energy.jpg";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${heroEnergy})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/20 to-black/70" />
      </div>
      <div className="relative z-0">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/happenings" element={<Happenings />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
