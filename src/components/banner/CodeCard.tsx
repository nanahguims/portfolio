import { useEffect, useState, useMemo } from "react";

import { Sparkles, Ribbon } from "lucide-react";

export function CodeCard() {
  function tokenize(src: string) {
    // Order matters: comments/strings first, then keywords, then punctuation.
    const patterns: { re: RegExp; className: string }[] = [
      { re: /^\/\/[^\n]*/, className: "text-pink-400/70 italic" },
      { re: /^`[^`]*`/, className: "text-rose-500" },
      { re: /^"[^"]*"/, className: "text-rose-500" },
      {
        re: /^\b(const|let|var|function|return|import|from|export|if|else)\b/,
        className: "text-fuchsia-600 font-semibold",
      },
      { re: /^\b(true|false|null|undefined)\b/, className: "text-pink-600" },
      { re: /^\b(console|log)\b/, className: "text-pink-500" },
      { re: /^\b([A-Za-z_$][\w$]*)(?=\s*\()/, className: "text-fuchsia-500" },
      { re: /^\b([A-Za-z_$][\w$]*)(?=\s*:)/, className: "text-pink-700" },
      { re: /^\b\d+(\.\d+)?\b/, className: "text-rose-600" },
      { re: /^[{}[\],;.()]/, className: "text-pink-400" },
      { re: /^\s+/, className: "" },
      { re: /^[^\s{}[\],;.()"`\/]+/, className: "text-foreground/80" },
      { re: /^./, className: "text-foreground/80" },
    ];

    const out: { value: string; className: string }[] = [];
    let s = src;
    while (s.length) {
      let matched = false;
      for (const p of patterns) {
        const m = s.match(p.re);
        if (m) {
          out.push({ value: m[0], className: p.className });
          s = s.slice(m[0].length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        out.push({ value: s[0], className: "" });
        s = s.slice(1);
      }
    }
    return out;
  }

  function Highlighted({ text }: { text: string }) {
    const tokens = useMemo(() => tokenize(text), [text]);
    return (
      <>
        {tokens.map((t, i) => (
          <span key={i} className={t.className}>
            {t.value}
          </span>
        ))}
      </>
    );
  }

  const fullText = `const contato = {
  email: "fernandaguimaraes0202@gmail.com",
  localizacao: "Florianopolis, SC",
  disponivel: true,
  vamosConversar: () => {
    return "Bora criar juntas! 💖";
  }
};
export default contato;`;

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      i = Math.min(i + 1, fullText.length);
      setTyped(fullText.slice(0, i));
      if (i < fullText.length) {
        const ch = fullText[i - 1];
        const delay = ch === "\n" ? 90 : ch === " " ? 18 : 24;
        window.setTimeout(tick, delay);
      }
    };
    const start = window.setTimeout(tick, 450);
    return () => {
      cancelled = true;
      window.clearTimeout(start);
    };
  }, [fullText]);

  return (
    <div className="glass-strong overflow-hidden rounded-[2rem] p-2 shadow-[shadow-float]">
      <div className="overflow-hidden rounded-[1.6rem] bg-linear-to-br from-[#fff5f8] via-white to-[#ffe4ef]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-pink-100/80 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-pink-300" />
            <span className="size-3 rounded-full bg-rose-300" />
            <span className="size-3 rounded-full bg-fuchsia-300" />
          </div>
          <span className="font-mono text-[11px] text-pink-500/80">
            contato.ts
          </span>
          <Ribbon className="size-3.5 text-pink-400" />
        </div>

        {/* Code body */}
        <pre className="relative flex gap-4 overflow-hidden px-5 py-5 font-mono text-[12.5px] leading-[1.7] sm:text-[13px]">
          <span aria-hidden className="select-none text-right text-pink-300/80">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className="block">
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </span>
          <code className="min-w-0 flex-1 whitespace-pre-wrap wrap-break-words">
            <Highlighted text={typed} />
            <span className="ml-0.5 inline-block h-[1.05em] w-0.5 translate-y-0.75 animate-pulse bg-pink-500" />
          </code>
        </pre>

        {/* Output pill */}
        <div className="flex items-center gap-2 border-t border-pink-100/80 bg-white/60 px-5 py-3 font-mono text-[11.5px] text-pink-700">
          <Sparkles className="size-3.5 text-pink-500" />
          <span className="opacity-70">output</span>
          <span className="ml-auto rounded-full bg-pink-100 px-2.5 py-0.5 font-semibold text-pink-600">
            Hello, world! ♡
          </span>
        </div>
      </div>
    </div>
  );
}
