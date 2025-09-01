type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

type CompanyExperience = {
  company: string;
  roles: Role[];
};

const experienceData: CompanyExperience[] = [
  {
    company: "Precygrap",
    roles: [
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
    ],
  },
  {
    company: "ZEUS by LLYC",
    roles: [
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
    ],
  },
  {
    company: "Lavernia & Cienfuegos",
    roles: [
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
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section container-section mt-24">
      <h2 className="text-2xl sm:text-3xl text-indigo-900 font-medium mb-12">Experiencia</h2>
      <div className="relative">
        {/* Holographic connecting line - hidden on mobile */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 opacity-60"></div>
        
        <div className="space-y-8">
          {experienceData.map((company, companyIdx) => (
            <div 
              key={companyIdx} 
              className="relative p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group md:ml-16"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)',
              }}
            >
              {/* Connection point to holographic line - hidden on mobile */}
              <div className="hidden md:block absolute -left-8 top-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white shadow-lg"></div>
              
              {/* Rainbow border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-300/10 via-purple-300/10 to-pink-300/10"></div>
              
              <div className="relative z-10">
                {/* Company title */}
                <h3 className="text-black font-semibold text-xl mb-6">{company.company}</h3>
                
                {/* Roles for this company */}
                <div className="space-y-6">
                  {company.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="border-l-2 border-indigo-200 pl-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4 mb-2">
                        <h4 className="text-indigo-700 font-medium text-lg">{role.title}</h4>
                        <span className="text-sm text-gray-600 whitespace-nowrap bg-white/50 px-3 py-1 rounded-full self-start sm:self-auto">{role.period}</span>
                      </div>
                      <ul className="space-y-2 text-black/80">
                        {role.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


