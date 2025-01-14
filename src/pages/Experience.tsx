//import React from 'react';
import { motion } from 'framer-motion'; // First run: npm install framer-motion
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';

// Add these variants for stagger effect
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            bounce: 0.4
        }
    }
};

export function Experience() {
    const experiences = [
        {
            id: 1,
            role: "PING Intern",
            company: "Facility for Rare Isotope Beams (FRIB)",
            location: "East Lansing, Michigan",
            period: "June 2024",
            description: "Implemented machine learning algorithms for binary and unsupervised classification at the FRIB facility. Mentored high school students in conducting research projects, fostering the next generation of scientists in nuclear physics and data analysis.",
            technologies: ["Machine Learning", "Python", "Data Analysis", "Mentoring"],
            image: "/src/img/PING.png",
            hasDetails: true,
            detailsLink: "https://frib.msu.edu/for-students/programs/ping",
            isExternal: true
        },
        {
            id: 2,
            role: "Edge AI Program",
            company: "EDGE-AI Summer Program (NDSU)",
            location: "Fargo, ND",
            period: "May 2024",
            description: "I participated in the Edge AI Summer Program, where I explored the innovative potential of Edge AI in medical devices. The program focused on embedding artificial intelligence into devices to analyze data and deliver real-time feedback, with applications such as diabetes monitoring systems..",
            technologies: ["Google-Gemini API", "Svelte", "Tailwind CSS", "Team Leadership", "AI Development"],
            image: "/src/img/edgeai.png",
            hasDetails: true,
            detailsLink: "/edge-ai-project",
            githubLink: "https://github.com/Chee-ChuanFoo/Generative_AI_Hackathon"
        },
        {
            id: 3,
            role: "Tutor & Writing Assistant",
            company: "AAMU-Teaching Assistant Network (TAN)",
            location: "Normal, AL",
            period: "February 2024 - Present",
            description: "Assist students weekly with Calculus I and also in brainstorming and refining their academic essays, jobs, and internship applications.",
            technologies: ["Calculus Tutoring", "Writing Assistance", "Academic Mentoring", "Student Success"],
            image: "/src/img/tan.png",
            hasDetails: true,
            detailsLink: "https://www.aamu.edu/academics/academic-support-retention/freshman-academy/tutorial-assistance-network/",
            isExternal: true
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 1
                    }}
                    className="text-4xl lg:text-5xl font-bold text-center mb-16"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Professional Experience
                    </span>
                </motion.h1>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {experiences.map((exp) => (
                        <motion.div 
                            key={exp.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image Section */}
                                <motion.div 
                                    className="md:w-1/3 h-64 relative overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img 
                                        src={exp.image}
                                        alt={exp.company}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </motion.div>

                                {/* Content Section */}
                                <div className="p-8 md:w-2/3">
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-2 text-gray-400">
                                            <span className="text-purple-400">{exp.company}</span>
                                            <span>•</span>
                                            <span>{exp.period}</span>
                                            {exp.location && (
                                                <>
                                                    <span>•</span>
                                                    <span>{exp.location}</span>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-gray-300">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4 mt-4">
                                            {exp.hasDetails && (
                                                <div className="flex items-center">
                                                    {exp.isExternal ? (
                                                        <a
                                                            href={exp.detailsLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                                        >
                                                            <span>Learn More</span>
                                                            <ArrowRight className="h-4 w-4" />
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            to={exp.detailsLink}
                                                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                                        >
                                                            <span>Learn More</span>
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                    )}
                                                </div>
                                            )}
                                            {exp.githubLink && (
                                                <a
                                                    href={exp.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                                                    title="View Code on GitHub"
                                                >
                                                    <span>View Code</span>
                                                    <Github className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
} 