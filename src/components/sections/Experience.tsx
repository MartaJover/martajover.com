type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

const jobs: Role[] = [
  {
    company: "Precygrap",
    title: "Front-end Developer",
    period: "ene. 2025 – presente",
    bullets: ["Desarrollo web", "Integración Odoo y automatizaciones Front-End"],
  },
  {
    company: "Precygrap",
    title: "UX/UI Designer",
    period: "ago. 2024 – ene. 2025",
    bullets: [
      "Diseño web para productos online",
      "Diseño SEO-Optimizado",
      "Análisis de datos con Google Analytics",
      "Desarrollo Front-End (HTML, CSS, Bootstrap)",
      "Desarrollo en WordPress",
    ],
  },
  {
    company: "Precygrap",
    title: "Web Designer",
    period: "sep. 2022 – ago. 2024",
    bullets: [
      "Rediseño completo de la web corporativa",
      "Creación de e-commerce (WordPress + Divi + WooCommerce)",
      "SEO y análisis de comportamiento web con Google Analytics",
      "Diseño de identidad corporativa",
    ],
  },
  {
    company: "ZEUS by LLYC",
    title: "UX/UI Design Intern",
    period: "may. 2024 – jul. 2024",
    bullets: [
      "Diseño de herramienta interna para equipos de ventas",
      "Liderazgo de UX Research y coordinación con stakeholders",
      "Rediseño y maquetación web para cliente externo",
      "Diseño gráfico para materiales de marketing",
    ],
  },
  {
    company: "Lavernia & Cienfuegos",
    title: "Product Design Intern",
    period: "abr. 2022 – jun. 2022",
    bullets: [
      "Diseño de producto para fabricación en impresión 3D",
      "Modelado 3D y renders",
      "Maquetas y packaging para cosmética",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section container-section">
      <h2 className="text-2xl sm:text-3xl text-black font-medium mb-8">Experiencia</h2>
      <div className="space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="border-l border-gray-300 pl-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-black font-medium">{job.company}</h3>
              <span className="text-sm text-gray-600 whitespace-nowrap">{job.period}</span>
            </div>
            <p className="text-black mt-1">{job.title}</p>
            <ul className="mt-3 space-y-1.5 text-black list-disc marker:text-gray-500 ml-5">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


