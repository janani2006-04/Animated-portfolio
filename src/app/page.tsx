import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { MobileNav, SideNav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <SideNav />
      <MobileNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Process />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
