import Banner from "../banner/Banner";
import About from "../about/About";
import Skils from "../skils/Skils";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";

export default function Home() {
  return (
    <section className="home pt-24 max-w-6xl my-0 mx-auto px-5">
      <Banner />
      <About />
      <Skils />
      <Experience />
      <Contact />
    </section>
  );
}
