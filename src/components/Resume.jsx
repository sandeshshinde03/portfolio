// src/components/Resume.jsx
export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:px-4 md:px-6 lg:px-8 text-center font-inter">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">Resume</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-700">Download my latest resume in PDF format.</p>
      <a
        href="/Sandesh__Shinde.pdf"
        download
        className="text-lg bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
