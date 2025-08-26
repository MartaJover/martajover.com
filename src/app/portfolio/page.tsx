import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'pazway',
    title: 'PazWay',
    subtitle: 'Diseño UX/UI - case study',
    image: '/Pazway.jpg',
    href: '/portfolio/pazway'
  },
  {
    id: 'renting',
    title: 'Dashboard Renting',
    subtitle: 'Diseño UX/UI',
    image: '/renting.png',
    href: '/portfolio/renting'
  },
  {
    id: 'fincup',
    title: 'FincUp',
    subtitle: 'Diseño UX/UI - case study',
    image: '/FincUp.png',
    href: '/portfolio/fincup'
  },
  {
    id: 'heuristic',
    title: 'Evaluación heurística',
    subtitle: 'Diseño UX/UI',
    image: '/Heuristic.png',
    href: '/portfolio/heuristic'
  },
  {
    id: 'amago',
    title: 'Âmago',
    subtitle: 'Diseño gráfico y editorial',
    image: '/Âmago.png',
    href: '/portfolio/amago'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-8 mt-8">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Proyectos de diseño gráfico, UX/UI y desarrollo que he realizado.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.href}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                {/* Project Image with Overlay */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Dark Overlay - Visible on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Text Overlay - Visible on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
