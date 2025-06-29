
import { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import UKStudy from "./pages/study/UKStudy";
import CyprusStudy from "./pages/study/CyprusStudy";
import EuropeStudy from "./pages/study/EuropeStudy";
import AustraliaStudy from "./pages/study/AustraliaStudy";
import USAStudy from "./pages/study/USAStudy";
import TourismConferences from "./pages/TourismConferences";
import TutorialsPage from "./pages/Tutorials";
import AdminLayout from "./pages/admin/AdminLayout";
import Login from "./pages/admin/Login";
import TutorialManagement from "./pages/admin/TutorialManagement";
import CanadaStudy from "./pages/study/CanadaStudy";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FloatingContactButtons from "./components/FloatingContactButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/study/uk" element={<UKStudy />} />
              <Route path="/study/cyprus" element={<CyprusStudy />} />
              <Route path="/study/europe" element={<EuropeStudy />} />
              <Route path="/study/australia" element={<AustraliaStudy />} />
              <Route path="/study/usa" element={<USAStudy />} />
              <Route path="/study/canada" element={<CanadaStudy />} />
              <Route path="/tourism-conferences" element={<TourismConferences />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="tutorials" element={<TutorialManagement />} />
              </Route>
            </Routes>
          </main>
          <FloatingContactButtons />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
