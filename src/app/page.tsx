import {
  Hero,
  About,
  Skills,
  Projects,
  Services,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
