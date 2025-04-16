import { motion } from 'framer-motion';
import { ExternalLink, Bot, Brain, MessageSquare } from 'lucide-react';

export function DisasterProject() {
    const features = [
        {
            icon: Brain,
            title: "Real-time Analysis",
            description: "Processes disaster-related tweets in real-time using advanced NLP models"
        },
        {
            icon: Bot,
            title: "AI-Powered Classification",
            description: "Automatically categorizes tweets into different disaster types and severity levels"
        },
        {
            icon: MessageSquare,
            title: "Instant Relief Information",
            description: "Provides immediate actionable insights for disaster response teams"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl lg:text-5xl font-bold text-center mb-16"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Real-Time Disaster Analysis
                    </span>
                </motion.h1>

                {/* Project Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 mb-12"
                >
                    <div className="relative h-[400px] mx-auto max-w-4xl overflow-hidden">
                        <img 
                            src="/Highlights/Disasteranalysis.jpg"
                            alt="Disaster Analysis Application"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-lg text-gray-300">
                                A real-time disaster analysis system that processes tweets to provide immediate relief information.
                            </div>
                            <a
                                href="https://huggingface.co/spaces/CephasAldrich/Post_Disaster_Relief"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:opacity-90 transition-all duration-300"
                            >
                                <span>Visit Live Model</span>
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* AI Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <feature.icon className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
                    <div className="space-y-4 text-gray-300">
                        <p>
                            Built using Python and TensorFlow for the machine learning backend, 
                            this project leverages natural language processing to analyze disaster-related 
                            tweets in real-time. The frontend is developed with React and D3.js for 
                            interactive data visualization.
                        </p>
                        <p>
                            The model is trained on a comprehensive dataset of disaster-related tweets, 
                            achieving high accuracy in classifying emergency situations and extracting 
                            critical information for relief efforts.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://drive.google.com/file/d/1V4KrnkAwwAjEjHDP_PvmR8jc1uRNX3ud/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
                            >
                                <span>Read Documentation</span>
                                <svg 
                                    className="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 