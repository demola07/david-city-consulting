import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Hero />
        <Services />
        <Countries />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;