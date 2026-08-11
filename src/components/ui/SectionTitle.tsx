import { motion } from "motion/react";
import { type ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="chip mx-auto mb-4">
        <Sparkles className="size-3.5" /> {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
