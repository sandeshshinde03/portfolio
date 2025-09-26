export default function Projects() {
  const projects = [
    {
      title: "🎙️ Speech-to-Text Converter 📝",
      description:
        "A full-stack web app that records/uploads audio and converts it to text using AssemblyAI. Includes real-time updates, dark/light mode, and a modern UI.",
      image: "/images/speech-to-text.png",
      github: "https://github.com/sandeshshinde03/speech-to-text-Frontend",
      live: "https://speech-to-text-snowy-five.vercel.app/",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "AssemblyAI",
        "Supabase",
      ],
    },
    {
      title: "GoRide",
      description:
        "Full-stack ride-hailing web app inspired by Uber. Users can book rides, track drivers in real-time. Drivers can accept rides, navigate, and track earnings. Includes responsive UI and real-time communication with Socket.io.",
      image: "/images/ridego.png",
      github: "https://github.com/sandeshshinde03/RideGo-Frontend",
      live: "https://ride-go-frontend.vercel.app/",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "Tailwind CSS",
        "JWT",
        "Axios",
        "GSAP",
        "Maptiler",
      ],
    },
    {
      title: "Lip Reading System Using Deep Learning",
      description:
        "Recognizes speech from visual lip movements using Python, TensorFlow, and OpenCV. Used CNN for feature extraction, LSTM for sequence modeling, and attention/perplexity for evaluation.",
      image: "/images/lip-reading.png",
      github: "https://github.com/sandeshshinde03/Lip_Reading_project",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "LSTM", "Attention"],
    },
    {
      title: "General Store Management System",
      description:
        "Java-based desktop app using Swing and JDBC. Features product CRUD, stock alerts, daily billing, and MVC-structured MySQL integration for inventory and billing systems.",
      image: "/images/store-management.png",
      github: "https://github.com/sandeshshinde03/GeneralStoreSystem",
      tech: ["Java", "Java Swing", "JDBC", "MySQL", "MVC"],
    },
    {
      title: "Brick Breaker Game",
      description:
        "Interactive 2D game built in Java using Swing and AWT. Includes paddle, ball, and brick collision detection and level-based gameplay.",
      image: "/images/brick-breaker.png",
      github: "https://github.com/sandeshshinde03/Brick-Breaker-Game",
      tech: ["Java", "Swing", "AWT", "Game Logic"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 sm:px-4 md:px-6 lg:px-8 bg-gray-50 font-inter"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-md md:text-lg text-gray-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-200 px-3 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              {/* Buttons stay at the bottom */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-black"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
