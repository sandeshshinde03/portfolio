// src/components/Certifications.jsx
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      title: "Java Programming",
      issuer: "LinkedIn Learning",
      date: "Feb 2025",
      link: "https://www.linkedin.com/learning/certificates/285a41e3a4d89e22820691ab3e441f86f8922557e047a0582a9d544b593611cf",
      description:
        "Learned core Java concepts including data types, functions, loops, flow control, and OOP.",
    },
    {
      title: "Python Programming",
      issuer: "LinkedIn Learning",
      date: "Feb 2025",
      link: "https://www.linkedin.com/learning/certificates/90a9d11b4fea06c20fdc838eb6a96e72685513b0129fff0b912f47536ac3c57b",
      description:
        "Covered Python fundamentals including variables, operators, functions, OOP, and error handling.",
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      date: "Mar 2025",
      link: "https://www.linkedin.com/learning/certificates/04a692c539e5a95d04f0b73b866bb355dd1bad9fa906d240c5dc738e014b5484",
      description:
        "Gained hands-on experience with SQL queries, joins, filtering, and data aggregation.",
    },
     {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "July 2025",
      link: "https://www.udemy.com/certificate/UC-b7aa6869-97f3-4389-9095-c72b444e1e08/",
      description:
        "Mastered full stack development using MERN, Tailwind, React, and Node.js with real-world projects and AI integration.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 sm:px-4 md:px-6 lg:px-8 text-center font-inter"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800">
        Certifications
      </h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 text-left">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2 text-blue-700">
              <FaCertificate className="text-green-500" />
              {cert.title}
            </h3>
            <p className="text-gray-600 text-md md:text-lg mb-2">
              Issued by <span className="font-medium">{cert.issuer}</span> · {cert.date}
            </p>
            <p className="text-gray-700 text-sm mb-3">{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
