import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import Portfolio from "@/components/portfolio/Portfolio";
import Qualifications from "@/components/qualifications/Qualifications";
import ScrollUp from "@/components/scroll/ScrollUp";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Testimonials from "@/components/testimonials/Testimonials";

const Page = () => {
  return (
    <div className="">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        {/* <Qualifications /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};
export default Page;
