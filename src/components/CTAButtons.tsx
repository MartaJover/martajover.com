import React from "react";

type Props = {
  className?: string;
};

export default function CTAButtons({ className = "" }: Props) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="/cv.pdf"
        download
        className="rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-white/40 transition-colors"
      >
        Descargar CV
      </a>
      <a
        href="#contacto"
        className="rounded-full bg-white text-black px-5 py-2.5 text-sm hover:bg-zinc-200 transition-colors"
      >
        Contactar
      </a>
    </div>
  );
}