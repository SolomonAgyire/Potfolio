//import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export function EdgeAIProject() {
    const techStack = [
        { name: "Frontend", items: ["Svelte", "Skeleton UI", "Tailwind CSS"] },
        { name: "Backend", items: ["SvelteKit", "Google Gemini API"] },
        { name: "AI/ML", items: ["LLM", "Fine Tuning"] }
    ];

    return (
        <div className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl lg:text-4xl font-bold text-slate-100 text-center mb-12"
                >
                    Edge AI Summer Program
                </motion.h1>

                <div className="space-y-12 text-slate-400">
                    {/* Program Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800/50 rounded-lg p-8 border border-slate-700"
                    >
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">Program Overview</h2>
                        <p className="text-lg leading-relaxed">
                            The Edge AI program is an initiative supported by the National Science Foundation (NSF). This program focused on exploring the innovative applications of Edge AI, particularly in the medical field. Edge AI refers to the implementation of artificial intelligence directly on devices at the "edge" of a network—like smartphones, sensors, or medical devices—enabling them to process data locally instead of relying entirely on cloud-based solutions.
                        </p>
                    </motion.section>

                    {/* Learning Phase */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-800/50 rounded-lg p-8 border border-slate-700"
                    >
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">Learning Phase</h2>
                        <p className="text-lg leading-relaxed">
                            The program began with a remote learning phase, where I gained foundational knowledge in artificial intelligence concepts, including network structures, model differences, and their applications in medical technologies. We learned how AI-powered systems like diabetes monitoring devices and Alzheimer's management apps can revolutionize healthcare by delivering real-time feedback and insights.
                        </p>
                    </motion.section>

                    {/* Project Development */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-slate-800/50 rounded-lg p-8 border border-slate-700"
                    >
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">Project Development at NDSU</h2>
                        <p className="text-lg leading-relaxed">
                            At NDSU, I collaborated with a team of undergraduate students and a PHD supervisor to develop a project using Google's Gemini Large Language Model (LLM). Our goal was to address the challenges faced by individuals seeking mental health support. We designed a therapy chatbot capable of offering empathetic conversations and coping strategies for individuals experiencing depression.
                        </p>
                    </motion.section>

                    {/* Project Showcase */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img 
                                src="/img/Therapybot.png"
                                alt="Therapy Bot Interface"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Project Demo</h2>
                            <p className="text-lg text-slate-400 mb-6">
                                Experience our AI-powered therapy chatbot in action. The bot provides empathetic conversations while maintaining clear boundaries about its role as an AI assistant.
                            </p>
                            <a
                                href="https://therapybot.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 rounded-lg text-white hover:bg-teal-500 transition-colors"
                            >
                                <span>Visit Live Demo</span>
                                <svg 
                                    className="w-5 h-5" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                    />
                                </svg>
                            </a>
                        </div>
                    </motion.section>

                    {/* Technical Stack */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-slate-800/50 rounded-lg p-8 border border-slate-700"
                    >
                        <h2 className="text-2xl font-semibold text-slate-100 mb-6">Technical Stack</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {techStack.map((stack, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="text-xl font-medium text-teal-400">{stack.name}</h3>
                                    <ul className="space-y-2">
                                        {stack.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <Code className="h-4 w-4 text-teal-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Conclusion */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-slate-800/50 rounded-lg p-8 border border-slate-700"
                    >
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">Impact & Learning</h2>
                        <p className="text-lg leading-relaxed">
                            This experience gave me hands-on exposure to AI model integration and practical teamwork in a fast-paced environment. The project demonstrated how AI can address mental health challenges by delivering compassionate and accessible solutions. Participating in this program was an invaluable experience, deepening my knowledge of Edge AI and inspiring me to explore more ways technology can improve lives.
                        </p>
                    </motion.section>
                </div>
            </div>
        </div>
    );
} 