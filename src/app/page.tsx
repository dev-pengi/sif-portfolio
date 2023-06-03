import { Hero, Header, About, Skills, Projects, Services } from "@/components";
import "animate.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
      </main>
    </>
  );
}
