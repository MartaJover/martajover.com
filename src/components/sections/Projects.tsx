type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "As delícias do Âmago",
    subtitle: "Proyecto editorial",
    bullets: [
      "Diseño de portada",
      "Maquetación completa",
      "Marcapáginas",
      "Preparación para imprenta",
    ],
  },
  {
    title: "Racing Legends 2022",
    subtitle: "Proyecto de diseño gráfico",
    bullets: ["Cartelería", "Merchandising", "Entradas y banners"],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section container-section">
      <h2 className="text-2xl sm:text-3xl text-white font-medium mb-8">Proyectos destacados</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors"
          >
            <h3 className="text-white font-medium">{p.title}</h3>
            <p className="text-zinc-400 text-sm mt-1">{p.subtitle}</p>
            <ul className="mt-4 space-y-1.5 text-zinc-400 list-disc marker:text-zinc-500 ml-5">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}


