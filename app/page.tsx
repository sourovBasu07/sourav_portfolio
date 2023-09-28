import About from "@/components/About";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

const Page = () => {
  return (
    <div className="">
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </div>
    </div>
  );
};
export default Page;
