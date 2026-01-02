import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I am a Full Stack Web Developer based in Alappuzha, Kerala, specializing
              in building booking websites, business platforms, and travel agency
              solutions. With expertise in the MERN stack (MongoDB, Express.js,
              React, Node.js), I don't just write code—I build production-ready
              applications that solve real business problems.
            </p>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              My focus is on speed, security, and scalability. Whether you need an
              automated enquiry system, WhatsApp integration, or a fully deployed
              website on Vercel or Render, I deliver solutions that help you run
              your business more efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5">
                <h3 className="text-xl font-bold mb-4">📍 Location</h3>
                <p className="text-gray-300">Alappuzha, Kerala</p>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5">
                <h3 className="text-xl font-bold mb-4">💼 Role</h3>
                <p className="text-gray-300">Full Stack Developer & Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};