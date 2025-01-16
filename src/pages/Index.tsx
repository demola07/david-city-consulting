import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Countries />
      <Contact />
    </main>
  );
};

export default Index;