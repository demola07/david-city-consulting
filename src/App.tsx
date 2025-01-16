import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import UKStudy from "./pages/study/UKStudy";
import CanadaStudy from "./pages/study/CanadaStudy";
import EuropeStudy from "./pages/study/EuropeStudy";
import AustraliaStudy from "./pages/study/AustraliaStudy";
import USAStudy from "./pages/study/USAStudy";
import TourismConferences from "./pages/TourismConferences";
import TutorialsPage from "./pages/Tutorials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/study/uk" element={<UKStudy />} />
            <Route path="/study/canada" element={<CanadaStudy />} />
            <Route path="/study/europe" element={<EuropeStudy />} />
            <Route path="/study/australia" element={<AustraliaStudy />} />
            <Route path="/study/usa" element={<USAStudy />} />
            <Route path="/tourism-conferences" element={<TourismConferences />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;