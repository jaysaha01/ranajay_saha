
import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="brodyrapper">
      <Banner />
      <About/>
      <Skills/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  );
}
