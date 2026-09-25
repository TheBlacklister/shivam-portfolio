import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Workflow } from "@/components/Workflow";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ResumeViewer } from "@/components/ResumeViewer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Nav />

      <main>
        <Hero />
        <About />
        <Projects />
        <Workflow />
        <Experience />
        <Skills />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ResumeViewer />
      <BackToTop />
    </>
  );
}
