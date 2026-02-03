import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <Banner/>
      <About/>
      <Services/>
      <FeaturedProjects/>
      <CallToAction/>
    </div>
  );
}
