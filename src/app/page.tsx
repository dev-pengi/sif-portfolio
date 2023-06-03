import {
  Hero,
  Header,
  About,
  Skills,
  Projects,
  Services,
  Contact,
  Footer,
} from "@/components";
import "animate.css";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Header />
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
