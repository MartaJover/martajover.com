"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="section container-section">
      <h2 className="text-2xl sm:text-3xl text-white font-medium mb-8">Contacto</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form
          className="space-y-4"
          action={async (fd) => {
            await onSubmit(fd);
          }}
        >
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Nombre</label>
            <input
              name="name"
              required
              className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Mensaje</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Cuéntame en qué puedo ayudarte"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-white text-black px-5 py-2.5 text-sm hover:bg-zinc-200 transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
          {status === "success" && (
            <p className="text-sm text-emerald-400">Mensaje enviado. ¡Gracias!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Error al enviar. Prueba de nuevo.</p>
          )}
        </form>

        <div className="space-y-4">
          <p className="text-zinc-300">
            ¿Prefieres escribir directamente? Puedes contactarme por LinkedIn o email.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/martajoveramoros"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/30 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:martajover.dev@gmail.com"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/30 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


