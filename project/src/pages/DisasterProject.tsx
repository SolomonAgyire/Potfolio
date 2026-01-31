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
        <div className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl lg:text-4xl font-bold text-slate-100 text-center mb-12"
                >
                    Real-Time Disaster Analysis
                </motion.h1>

                {/* Project Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 mb-12"
                >
                    <div className="relative h-[400px] mx-auto max-w-4xl overflow-hidden">
                        <img 
                            src="/img/Disasteranalysis.jpg"
                            alt="Disaster Analysis Application"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-lg text-slate-400">
                                A real-time disaster analysis system that processes tweets to provide immediate relief information.
                            </div>
                            <a
                                href="https://huggingface.co/spaces/CephasAldrich/Post_Disaster_Relief"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 rounded-lg text-white hover:bg-teal-500 transition-colors"
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
                            className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                        >
                            <feature.icon className="h-8 w-8 text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold text-slate-100 mb-2">{feature.title}</h3>
                            <p className="text-slate-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-slate-800/50 rounded-lg p-8 border border-slate-700"
                >
                    <h2 className="text-2xl font-semibold text-slate-100 mb-6">Technical Implementation</h2>
                    <div className="space-y-4 text-slate-400">
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
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg text-slate-200 hover:bg-slate-700 transition-colors border border-slate-600"
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