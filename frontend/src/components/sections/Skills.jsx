import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Tailwind CSS",
        "Vite",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    },
    {
      category: "Tools & Deployment",
      technologies: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Render",
        "MongoDB Atlas",
      ],
    },
    {
      category: "Integrations",
      technologies: [
        "WhatsApp API",
        "EmailJS",
        "Resend",
        "Nodemailer",
        "Payment Gateways",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/5 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
