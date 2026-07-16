import "./App.css";
import { motion, useScroll, useSpring } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Header from "./components/header/Header";
import { FloatingDecor } from "./components/ui/floatingDecor";

import { Footer } from "./components/footer/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <div className="relative overflow-x-clip">
      <motion.div
        style={{ scaleX: progress }}
        className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.75 origin-left bg-linear-to-r from-pink-300 via-pink-500 to-fuchsia-400"
      />
      <FloatingDecor />
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
