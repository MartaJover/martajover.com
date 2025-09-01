const education = [
  "IBM Full-Stack JavaScript Developer (Coursera, 2025)",
  "UX/UI Design Bootcamp — The Bridge (EDEM) 2023/24",
  "Grado en Ingeniería de Diseño Industrial y Desarrollo de Producto — CEU Cardenal Herrera (2018–22)",
  "Erasmus en Lisboa — Universidade Lusófona de Lisboa (2021)",
  "Google UX Design Certificate (Coursera, 2021)",
];

export default function Education() {
  return (
    <section className="section container-section">
      <h2 className="text-2xl sm:text-3xl text-indigo-900 font-medium mb-8">Educación</h2>
      <ul className="space-y-2 text-black">
        {education.map((e) => (
          <li key={e} className="flex items-start gap-2">
            <span className="mt-2 size-1.5 rounded-full bg-gray-500" />
            <span>{e}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


