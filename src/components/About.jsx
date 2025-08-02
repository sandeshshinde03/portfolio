// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:px-4 md:px-6 lg:px-8 text-center max-w-5xl mx-auto font-inter"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-800">About Me</h2>
      
      <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-16">
        I'm an Information Technology engineering graduate with strong skills in Java, Python, and full-stack development.
        I'm passionate about building impactful software and contributing to dynamic, team-driven technical projects.
      </p>

      <h3 className="text-3xl font-bold text-blue-700 mb-8">🎓 Education</h3>

      <div className="space-y-10 text-lg md:text-xl text-gray-700 leading-relaxed text-center">
        <div>
          <h4 className="font-semibold text-blue-700">
            Bachelor of Engineering in Information Technology
          </h4>
          <p>SVPM’s College of Engineering, Malegaon-Pune</p>
          <p>Savitribai Phule Pune University</p>
          <p>
            <span className="font-medium">CGPA:</span> 7.83 — First Class with Distinction
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-700">Diploma in Computer Engineering</h4>
          <p>Zeal Education Society’s Zeal Polytechnic, Narhe-Pune</p>
          <p>MSBTE (Maharashtra State Board of Technical Education)</p>
          <p>
            <span className="font-medium">Percentage:</span> 84.29% — First Class with Distinction
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-700">SSC (10th Standard)</h4>
          <p>D.K.M. Vidyalay, Dapawadi</p>
          <p>Maharashtra State Board (SSC)</p>
          <p>
            <span className="font-medium">Percentage:</span> 81.80% — First Class with Distinction
          </p>
        </div>
      </div>
    </section>
  );
}
