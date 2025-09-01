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
    <section id="contacto" className="pt-12 py-8 px-6 sm:px-8 md:px-10 lg:px-12 bg-indigo-50 w-full">
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl text-indigo-900 font-medium mb-8">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form
            className="space-y-4"
            action={async (fd) => {
              await onSubmit(fd);
            }}
          >
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">Nombre</label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 px-3 py-2 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all duration-200"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 px-3 py-2 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">Mensaje</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 px-3 py-2 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all duration-200"
                placeholder="Cuéntame en qué puedo ayudarte"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-indigo-700 text-white font-medium rounded-full shadow-md hover:bg-indigo-800 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>
            {status === "success" && (
              <p className="text-sm text-emerald-600 font-medium">Mensaje enviado. ¡Gracias!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 font-medium">Error al enviar. Prueba de nuevo.</p>
            )}
          </form>

          <div className="space-y-4">
            <p className="text-black leading-relaxed">
              ¿Prefieres escribir directamente? Puedes contactarme por LinkedIn o email.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/martajoveramoros"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-full shadow-md border-2 border-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:martajover.dev@gmail.com"
                className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-full shadow-md border-2 border-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


