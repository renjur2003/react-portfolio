import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-backend-kx5k.onrender.com";
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message Sent via Resend!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send: " + result.error);
      }
    } catch (error) {
      console.log(error);
      alert("Error: " + error.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 p-8 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10"></div>
               
               <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
               
               <div className="space-y-6">
                  {/* Email */}
                  <a href="mailto:renju.stackuponline@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">renju.stackuponline@gmail.com</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/917736243083" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 group-hover:border-green-500/50 transition">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                       </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-medium">+91 77362 43083</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/renju-rr" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-blue-700/10 rounded-full flex items-center justify-center border border-blue-700/20 group-hover:border-blue-700/50 transition">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                       </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="font-medium">Connect on LinkedIn</p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/renjur2003" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-gray-700/10 rounded-full flex items-center justify-center border border-gray-700/20 group-hover:border-gray-500/50 transition">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="font-medium">View Projects</p>
                    </div>
                  </a>
               </div>
            </div>

            {/* Existing Form */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-xl relative">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Name..."
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};