//import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // First run: npm install framer-motion
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from './Experience.module.css';

type ExperienceItem = {
    id: number;
    role: string;
    company: string;
    location?: string;
    period: string;
    description: string;
    technologies: string[];
    image: string;
    hasDetails?: boolean;
    detailsLink?: string;
    isExternal?: boolean;
    isPublication?: boolean;
    publicationDetails?: {
        title: string;
        authors: string;
        doi: string;
        metrics?: { downloads: number | null };
    };
    githubLink?: string;
};

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
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.5,
        rotateY: direction > 0 ? 45 : -45
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.5,
        rotateY: direction < 0 ? 45 : -45,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    })
};

const CARD_WIDTH = 320; // px
const CARD_GAP = 32; // px (gap-8)
const VISIBLE_CARDS = 3; // Number of cards visible at once
const AUTO_SCROLL_INTERVAL = 20; // ms (for smooth continuous scroll)
const AUTO_SCROLL_STEP = 2; // px per interval

export function Experience() {
    const experiences: ExperienceItem[] = [
        {
            id: 1,
            role: "Research Publication",
            company: "Environmental Research Communications",
            location: "IOP Publishing",
            period: "March 2025",
            description: "Published a topical review on groundwater contamination in Ghana's largest mining enclave, investigating environmental and health impacts. This research contributes to the understanding of environmental health risks in mining regions.",
            technologies: ["Environmental Research", "Water Quality", "Mining Impact", "Public Health"],
            image: "/img/research.png",
            hasDetails: true,
            detailsLink: "https://iopscience.iop.org/article/10.1088/2515-7620/adc069",
            isExternal: true,
            isPublication: true,
            publicationDetails: {
                title: "Unveiling the hidden threat to human health: groundwater contamination in the largest mining enclave of southwestern Ghana",
                authors: "Daniel Senne, Solomon Agyire, Fosu Yaw, Muhammed Abdullah Bello and Emmanuel Daanoba Sunkari",
                doi: "10.1088/2515-7620/adc069",
                metrics: {
                    downloads: null
                }
            }
        },
        {
            id: 2,
            role: "PING Intern",
            company: "Facility for Rare Isotope Beams (FRIB)",
            location: "East Lansing, Michigan",
            period: "June 2024",
            description: "Implemented machine learning algorithms for binary and unsupervised classification at the FRIB facility. Mentored high school students in conducting research projects, fostering the next generation of scientists in nuclear physics and data analysis.",
            technologies: ["Machine Learning", "Python", "Data Analysis", "Mentoring"],
            image: "/img/PING.png",
            hasDetails: true,
            detailsLink: "https://frib.msu.edu/for-students/programs/ping",
            isExternal: true
        },
        {
            id: 3,
            role: "Edge AI Program",
            company: "EDGE-AI Summer Program (NDSU)",
            location: "Fargo, ND",
            period: "May 2024",
            description: "I participated in the Edge AI Summer Program, where I explored the innovative potential of Edge AI in medical devices. The program focused on embedding artificial intelligence into devices to analyze data and deliver real-time feedback, with applications such as diabetes monitoring systems..",
            technologies: ["Google-Gemini API", "Svelte", "Tailwind CSS", "Team Leadership", "AI Development"],
            image: "/img/edgeai.png",
            hasDetails: true,
            detailsLink: "/edge-ai-project",
            githubLink: "https://github.com/Chee-ChuanFoo/Generative_AI_Hackathon"
        },
        {
            id: 4,
            role: "Tutor & Writing Assistant",
            company: "AAMU-Teaching Assistant Network (TAN)",
            location: "Normal, AL",
            period: "February 2024 - Present",
            description: "Assist students weekly with Calculus I and also in brainstorming and refining their academic essays, jobs, and internship applications.",
            technologies: ["Calculus Tutoring", "Writing Assistance", "Academic Mentoring", "Student Success"],
            image: "/img/tan.png",
            hasDetails: true,
            detailsLink: "https://www.aamu.edu/academics/academic-support-retention/freshman-academy/tutorial-assistance-network/",
            isExternal: true
        }
    ];

    // Infinite carousel logic
    const offset = VISIBLE_CARDS;
    const duplicated = [
        ...experiences,
        ...experiences,
        ...experiences
    ]; // triple for seamless loop
    const totalCards = duplicated.length;
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalExp, setModalExp] = useState<ExperienceItem | null>(null);

    // Auto-scroll logic
    useEffect(() => {
        if (isModalOpen) return;
        const container = carouselRef.current;
        if (!container) return;
        let animationFrame: number;
        let lastScrollLeft = container.scrollLeft;
        let running = true;

        function step() {
            if (!running || !container) return;
            container.scrollLeft += AUTO_SCROLL_STEP;
            // If we've scrolled past 1/3 of the cards, reset to the start
            const cardTotalWidth = CARD_WIDTH + CARD_GAP;
            const maxScroll = cardTotalWidth * experiences.length;
            if (container.scrollLeft >= maxScroll) {
                container.scrollLeft = 0;
            }
            lastScrollLeft = container.scrollLeft;
            animationFrame = requestAnimationFrame(step);
        }
        animationFrame = requestAnimationFrame(step);
        return () => {
            running = false;
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isModalOpen, experiences.length]);

    // Modal open handler
    const openModal = (exp: ExperienceItem) => {
        setModalExp(exp);
        setIsModalOpen(true);
    };
    // Modal close handler
    const closeModal = () => {
        setIsModalOpen(false);
        setModalExp(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
                    className="text-4xl lg:text-5xl font-bold text-center mb-16"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Professional Experience
                    </span>
                </motion.h1>
                <div className="relative">
                    <div className="text-center mb-4 text-gray-400 italic text-sm">
                        Click to view more details
                    </div>
                    <div
                        ref={carouselRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide justify-start"
                        style={{
                          scrollBehavior: 'auto',
                          width: '100%',
                          msOverflowStyle: 'none', // IE and Edge
                          scrollbarWidth: 'none'   // Firefox
                        }}
                    >
                        {duplicated.map((exp: ExperienceItem, idx: number) => (
                            <motion.div
                                key={idx}
                                className={`flex-shrink-0 w-80 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 shadow-lg cursor-pointer group relative`}
                                style={{ height: 440 }}
                                onClick={() => openModal(exp)}
                                whileHover={{ scale: 1.05, zIndex: 2 }}
                            >
                                <div className="h-56 w-full overflow-hidden rounded-t-xl flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                                    <img
                                        src={exp.image}
                                        alt={exp.company}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 flex flex-col gap-2 h-44 justify-between">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-white truncate pr-2">{exp.role}</h3>
                                            {exp.hasDetails && (
                                                <ArrowUpRight className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-400 truncate">
                                            <span className="text-purple-400">{exp.company}</span>
                                            <span> • </span>
                                            <span>{exp.period}</span>
                                        </div>
                                        {exp.isPublication ? (
                                            <>
                                                <p className="text-xs text-white/90 italic truncate">{exp.publicationDetails?.title}</p>
                                                <p className="text-xs text-gray-300 truncate">{exp.publicationDetails?.authors}</p>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                                                        OPEN ACCESS
                                                    </span>
                                                    <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                                                        DOI: {exp.publicationDetails?.doi}
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <p className="text-xs text-gray-300 truncate">{exp.description}</p>
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {exp.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            {exp.hasDetails && (
                                                exp.isExternal ? (
                                                    <a
                                                        href={exp.detailsLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs"
                                                        onClick={e => e.stopPropagation()}
                                                    >
                                                        <span>Learn More</span>
                                                        <ArrowRight className="h-3 w-3" />
                                                    </a>
                                                ) : (
                                                    exp.detailsLink ? (
                                                        <Link
                                                            to={exp.detailsLink}
                                                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs"
                                                            onClick={e => e.stopPropagation()}
                                                        >
                                                            <span>Learn More</span>
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    ) : null
                                                )
                                            )}
                                            {exp.githubLink && (
                                                <a
                                                    href={exp.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs"
                                                    title="View Code on GitHub"
                                                    onClick={e => e.stopPropagation()}
                                                >
                                                    <span>View Code</span>
                                                    <Github className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2 italic">Click to view more</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Modal for details */}
            <AnimatePresence>
                {isModalOpen && modalExp && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border-4 border-purple-500"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-purple-400"
                                onClick={closeModal}
                            >
                                <X className="w-7 h-7" />
                            </button>
                            <div className="w-full h-64 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                                <img
                                    src={modalExp.image}
                                    alt={modalExp.company}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{modalExp.role}</h2>
                            <div className="text-purple-400 text-sm mb-2">{modalExp.company} • {modalExp.period}</div>
                            {modalExp.isPublication ? (
                                <>
                                    <div className="text-white font-semibold italic mb-2">{modalExp.publicationDetails?.title}</div>
                                    <div className="text-gray-300 text-xs mb-2">{modalExp.publicationDetails?.authors}</div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                                            OPEN ACCESS
                                        </span>
                                        <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                                            DOI: {modalExp.publicationDetails?.doi}
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="text-gray-300 mb-2">{modalExp.description}</div>
                            )}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {modalExp.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 flex-wrap">
                                {modalExp.hasDetails && (
                                    modalExp.isExternal ? (
                                        <a
                                            href={modalExp.detailsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-semibold"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    ) : (
                                        modalExp.detailsLink ? (
                                            <Link
                                                to={modalExp.detailsLink}
                                                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-semibold"
                                            >
                                                <span>Learn More</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        ) : null
                                    )
                                )}
                                {modalExp.githubLink && (
                                    <a
                                        href={modalExp.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-semibold"
                                        title="View Code on GitHub"
                                    >
                                        <span>View Code</span>
                                        <Github className="h-5 w-5" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 