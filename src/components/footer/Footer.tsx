import { Ribbon, Heart, Flower2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-40 mb-5 relative">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <div className="flex items-center gap-2 text-2xl">
          <Ribbon className="size-5 text-pink-500" />
          <Heart className="size-4 fill-pink-500 text-pink-500" />
          <Flower2 className="size-5 text-pink-500" />
        </div>
        <p className="text-sm text-muted-foreground">
          Feito por mim com bastante café ♡
        </p>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Fernanda · Designed & built
        </p>
      </div>
    </footer>
  );
}
