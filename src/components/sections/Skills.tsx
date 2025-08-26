const tech = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Vite", "Redux", "WordPress", "Git", "Framer", "Figma",
];

const soft = [
  "UX/UI Design", "Design Thinking", "Full-cycle design & development", "Data analysis & visualization", "Comunicación efectiva", "Colaboración en equipos multidisciplinares",
];

export default function Skills() {
  return (
    <section id="skills" className="section container-section">
      <h2 className="text-2xl sm:text-3xl text-white font-medium mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-white font-medium mb-4">Stack técnico</h3>
          <ul className="flex flex-wrap gap-2">
            {tech.map((s) => (
              <li key={s} className="px-3 py-1.5 rounded-full border border-white/10 text-sm text-zinc-300">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">Habilidades</h3>
          <ul className="space-y-2 text-zinc-300">
            {soft.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-zinc-500" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


