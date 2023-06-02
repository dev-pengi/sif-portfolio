import { Hero, Header, About, Skills } from "@/components";
import "animate.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
