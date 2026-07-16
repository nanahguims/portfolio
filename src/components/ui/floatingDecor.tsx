import { motion, useSpring, useTransform, useMotionValue } from "motion/react";
import { useEffect } from "react";

import { Sparkles, Heart, Flower2, Ribbon } from "lucide-react";

export function FloatingDecor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tx = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const ty = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX - innerWidth / 2) / innerWidth);
      mouseY.set((e.clientY - innerHeight / 2) / innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const layerA = useTransform(tx, (v) => `${v * 25}px`);
  const layerB = useTransform(ty, (v) => `${v * 25}px`);
  const layerC = useTransform(tx, (v) => `${v * -18}px`);
  const layerD = useTransform(ty, (v) => `${v * -18}px`);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: layerA, y: layerB }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl"
      />
      <motion.div
        style={{ x: layerC, y: layerD }}
        className="absolute right-[-6rem] top-[40vh] h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl"
      />
      <motion.div
        style={{ x: layerA, y: layerD }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl"
      />

      {/* Tiny icons scattered */}
      <Flower2 className="animate-float absolute left-[8%] top-[18%] size-6 text-pink-300/70" />
      <Sparkles className="animate-sparkle absolute left-[20%] top-[8%] size-4 text-fuchsia-400/80" />
      <Heart className="animate-float-alt absolute right-[12%] top-[14%] size-5 text-pink-400/70" />
      <Ribbon className="animate-float absolute right-[22%] top-[70%] size-5 text-rose-400/60" />
      <Sparkles className="animate-sparkle absolute left-[45%] top-[55%] size-3 text-pink-500/70" />
      <Flower2 className="animate-float-alt absolute left-[6%] top-[75%] size-5 text-pink-400/60" />
      <Heart className="animate-float absolute right-[6%] top-[45%] size-4 text-fuchsia-400/70" />
    </div>
  );
}
