import { Code2, Palette, Briefcase, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      title: "Desarrollo Front-End",
      description: "HTML, CSS, JavaScript, React, Node.js, Redux, WordPress."
    },
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      title: "Diseño UX/UI",
      description: "Research, prototipado en Figma/Framer, design thinking, optimización SEO."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      title: "Experiencia en proyectos reales",
      description: "Rediseños completos, e-commerce, herramientas internas y branding corporativo."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Colaboración multidisciplinar",
      description: "Comunicación efectiva y trabajo con equipos de diseño, desarrollo y negocio."
    }
  ];

  return (
    <section className="pt-12 py-8 px-6 sm:px-8 md:px-10 lg:px-12 bg-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-black mb-2">
                {feature.title}
              </h3>
              {/* Description - hidden on mobile, visible on md+ */}
              <div className="hidden md:block">
                <p className="text-black leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8">
          <a
            href="/cv.pdf"
            download
            className="px-8 py-4 bg-indigo-700 text-white font-medium rounded-full shadow-md hover:bg-indigo-800 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Descargar CV
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-full shadow-md border-2 border-indigo-700 hover:bg-indigo-50 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
