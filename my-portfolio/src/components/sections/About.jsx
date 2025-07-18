import {RevealOnScroll} from '../RevealOnScroll';
export const About = () => {
    const frontendSkills = ["react", "nextjs", "tailwindcss", "javascript", "typescript"];
    const backendSkills = ["nodejs", "express", "mongodb", "mysql", "graphql"];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
<RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
 <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        passionate fullstack developer with a focus on creating dynamic and responsive web applications and creating user-friendly interfaces.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="mb-2">
                                <strong>Bachelor of Science in Computer Science</strong> - XYZ University (2018-2022)
                            </li>
                            <li>
                                relevant coursework: Data Structures, Algorithms, Web Development, Database Management
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Software Engineer at ABC Corp (2020-Present)</h4>
                                <p>Developing and maintaining web applications using React, Node.js, and MongoDB.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Intern at DEF Ltd (2019-2020)</h4>
                                <p>Assisted in building responsive web interfaces and backend APIs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};