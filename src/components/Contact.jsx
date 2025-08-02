import { useRef, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    // Reset the form fields when component mounts (after reload or back nav)
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  return (
    <section id="contact" className="py-24 sm:px-4 md:px-6 lg:px-8 bg-gray-100 text-gray-800 font-inter">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-lg md:text-xl mb-8">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-6 text-md">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p>sandeshshinde1507@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <p>+91 7887343582</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p>Pune, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/sandeshshinde1507/"
              target="_blank"
              className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sandeshshinde03/"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full text-white hover:bg-black"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form
          ref={formRef}
          action="https://formspree.io/f/xjkoooqa"
          method="POST"
          className="bg-white p-8 rounded-xl shadow space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Discussion"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
