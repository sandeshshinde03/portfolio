// src/components/Hero.jsx
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-blue-100 py-20 sm:px-4 md:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-10 font-inter"
    >
      {/* Left: Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hello, I'm <span className="text-blue-600">Sandesh</span> 👋
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 h-16">
          <Typewriter
            words={[
              'Full Stack Developer',
              'Java Developer',
              'Python Developer',
              'Software Developer',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>

      {/* Right: Avatar */}
      <div className="w-40 md:w-60 flex-shrink-0">
        <img
          src="/images/profile.JPG"
          alt="Sandesh Avatar"
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
}
