import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cultivation from "@/components/Cultivation";
import Recipe from "@/components/Recipe";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Cultivation />
      <Recipe />
      <Blogs />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
}
