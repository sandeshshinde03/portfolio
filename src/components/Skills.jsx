// src/components/Skills.jsx
export default function Skills() {
  const skillData = [
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "MySQL",
        "MongoDB",
        "Supabase",
      ],
    },
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "PHP",],
    },
    {
      category: "Tools &  IDEs",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Eclipse", "Power BI",],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-20 sm:px-4 md:px-6 lg:px-8 bg-gray-100 font-inter"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {skillData.map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              🔹 {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
