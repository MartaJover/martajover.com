const languages = [
  "Español (Nativo)",
  "Inglés (C2)",
  "Portugués (B2)",
  "Alemán (A2)",
];

export default function Languages() {
  return (
    <section className="section container-section">
      <h2 className="text-2xl sm:text-3xl text-indigo-900 font-medium mb-8">Idiomas</h2>
      <ul className="flex flex-wrap gap-2">
        {languages.map((l) => (
          <li key={l} className="px-3 py-1.5 rounded-full border border-gray-300 text-sm text-black">
            {l}
          </li>
        ))}
      </ul>
    </section>
  );
}


