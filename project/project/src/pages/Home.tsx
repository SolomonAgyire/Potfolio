//import React from 'react';
import { ArrowRight, ChevronDown, Award, ExternalLink, Github, Code, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project, Achievement, Leadership } from '../types';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Home() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Computer Performance Metrics",
      description: "Analyzed computer performance metrics using Random Forest modeling and Python scripts, achieving an R-squared value of 0.729 to highlight the impact of network and disk I/O on system performance.",
      image: "/img/computer performance matrix.jpg",
      technologies: ["Python", "Random Forest", "Data Analysis"],
      link: "https://github.com/SolomonAgyire/Computer-Performance",
      preview: "#"
    },
    {
      id: 2,
      title: "Real-Time Disaster Analysis with NLP and Social Media",
      description: "A real-time ongoing disaster analysis system, providing timely relief information by analyzing disaster-related tweets and expanding to multiple platforms.",
      image: "/img/Disaster Relief.jpg",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      link: "https://colab.research.google.com/drive/1dY_9upIpiWWk2DY4GlRuzBu52bbIl3eb?authuser=1",
      preview: "/disaster-project"
    },
    {
      id: 3,
      title: "BrowseCap Chrome Extension",
      description: "A Chrome extension that allows users to save important websites they visit while browsing. Users can easily revisit saved sites or delete them to keep track of essential pages, enhancing web browsing organization and efficiency.",
      image: "/img/chrome extension.jpg",
      technologies: ["Javascript", "Chrome Extension API", "HTML", "CSS"],
      link: "https://github.com/SolomonAgyire/Chrome-Extension-",
      preview: "#"
    }
  ];

  const hackathons: Project[] = [
    {
      id: 1,
      title: "Gemini AI Hackathon",
      description: "Led a team of 3 in developing an AI solution using Google Gemini API for automated invoice processing, achieving 10% accuracy improvement in data extraction within a week.",
      image: "/img/Gemini.png",
      technologies: ["Python", "Gemini API", "AI/ML", "OCR"],
      link: "https://github.com/Chee-ChuanFoo/Generative_AI_Hackathon",
      preview: "#",
      date: "April 2024 - May 2024",
      event: "Google Gemini-AI Hackathon"
    },
    {
      id: 2,
      title: "MasterCard DataChallenge",
      description: "Developed a machine learning model that predicts and optimizes inclusive growth scores across strategic locations. The solution helps identify areas for community development investment and addresses economic disparities through data-driven insights.",
      image: "/img/MasterCard.jpg",
      technologies: ["Python", "Pandas", "Data Visualization", "Data Science", "Machine Learning"],
      link: "https://colab.research.google.com/drive/17a2kLXMtx5JR5ot0l0t0hP2trJw09rh6",
      preview: "#",
      date: "March 2024",
      event: "MasterCard Data Challenge"
    },
    {
      id: 3,
      title: "HP FOWA HBCU Challenge",
      description: "Fine-tuned a GPT-powered chatbot designed to assist HBCU students in finding and applying for scholarships. Collaborated with a multidisciplinary team to improve scholarship application success rates by 20% through personalized assistance.",
      image: "/img/hp.png",
      technologies: ["Prompt Engineering", "GPT-4", "Chatbot"],
      link: "#",
      preview: "#"
    }
  ];

  const achievements: Achievement[] = [
    {
    id: 1,
    title: "2nd Place MasterCard Data Challenge",
    date: " November 2024",
    description: "Secured second place in MasterCard's Data Challenge for developing a community growth analytics solution",
    icon: "award"
  }, 
  {
    id: 2,
    title: "1st Place MetaScholar Innovation Challenge",
    date: "April 2024",
    description: "Designed and pitched an innovative VR headset enabling disabled individuals to experience and interact with the metaverse",
    icon: "headset"
  },
  {
      id: 3,
      title: "1st Place AAMU STEM Research",
      date: "March2024",
      description: "Won first place at Alabama A&M University's STEM Research Presentation Competition",
      icon: "trophy"
    },
    {
      id: 6,
      title: "2X Second Place Winner at Innovate Alabama App Build",
      date: "January 2024 & March 2024",
      description: "Won second place twice at the Innovate Alabama App Build competition.",
      icon: "award"
    },
    {
      id: 4,
      title: "Eli Lilly HBCU-Day Presenter",
      date: "November 2023",
      description: "Selected to present research at the prestigious Eli Lilly HBCU-Day Conference",
      icon: "presentation"
    },
    {
      id: 5,
      title: "Presidential Scholar",
      date: "August 2023-Present",
      description: "Recognized as a Presidential Scholar and Honoree at Alabama A&M University",
      icon: "star"
    }
  ];

  const leadershipRoles: Leadership[] = [
    {
      id: 1,
      title: "Membership Chair",
      organization: "AAMU ACM Chapter",
      description: "Manage membership activities and engagement for the ACM-AAMU chapter, organizing 4 events per semester to increase member involvement.",
      image: "/img/ACM.png",
      link: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC055_sBH3TuMlgEm9O62sJaaDtsoMbU9Uw&keywords=aamu%20acm&origin=RICH_QUERY_SUGGESTION&position=0&searchId=ed76651a-7d7f-4ab5-891d-988101814936&sid=1%2Ci&spellCorrectionEnabled=false",
      period: "January 2024 - Present"
    },
    {
      id: 3,
      title: "Events and Engagement Manager",
      organization: "Google Developer Student Club",
      description: "Plan and manage events for the Google Developers Student Club, connecting members with professional mentors to support career development.",
      image: "/img/GDSC.png",
      link: "https://www.linkedin.com/in/gdsc-aamu/recent-activity/all/",
      period: "August 2024 - Present"
    }
  ];

  const highlights = [
    { image: "/Highlights/AppBuild.jpg", text: "Innovate Alabama App Build" },
    { image: "/Highlights/firstday.jpg", text: "First Day in the US" },
    { image: "/Highlights/medalion.jpg", text: "Presidential Medalion at AAMU" },
    { image: "/Highlights/tmcf.jpg", text: "TMCF Pitch 2024" },
    { image: "/Highlights/hackathon.jpg", text: "Entrepreneurship Hackathon" },
    { image: "/Highlights/firstsnow.jpg", text: "First Snow" },
    { image: "/Highlights/Botanicalgardening.jpg", text: "Gardening" }
  ];

  // Infinite auto-scroll for highlights
  const highlightsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = highlightsRef.current;
    if (!container) return;
    let running = true;
    let animationFrame: number;
    const CARD_WIDTH = 384; // w-96
    const CARD_GAP = 32; // gap-8
    const AUTO_SCROLL_STEP = 2;
    const maxScroll = (CARD_WIDTH + CARD_GAP) * highlights.length;
    function step() {
      if (!running || !container) return;
      container.scrollLeft += AUTO_SCROLL_STEP;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => {
      running = false;
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [highlights.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-rose-900/90"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-digital-particles-background-48873-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[128px] -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/30 blur-[128px] top-1/2 right-0 animate-pulse delay-700"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-rose-500/30 blur-[128px] bottom-0 left-1/2 animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image with Glow Effect */}
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-rose-500 rounded-2xl transform rotate-6 blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-rose-500 rounded-2xl transform -rotate-6 blur-xl opacity-50 animate-pulse delay-300"></div>
              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                <img
                  src="/img/Solomon headshot.jpg"
                  alt="Solomon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Full Stack Developer</span>
                <span className="text-sm text-blue-400">AI/ML Engineer</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="relative">
                  <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Hello, I'm
                  </span>
                </span>
                <br />
                <span className="text-white">Solomon Agyire</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
              A computer science student at Alabama A&M University with a drive for building innovative solutions that positively impact lives. 
              I enjoy creating scalable applications and AI-driven tools. I am Inspired by technology's ability to connect and empower people.
              Let's connect and build something amazing together!
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/experience"
                  className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center text-white font-medium">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="#featured"
                  className="group px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-medium border border-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    Featured Projects
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/50" />
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Highlights
        </h2>
        <div
          ref={highlightsRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide justify-start"
          style={{
            scrollBehavior: 'auto',
            width: '100%',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {highlights.concat(highlights).concat(highlights).map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-96 h-80 bg-white/5 rounded-xl border border-white/10 shadow-lg flex flex-col items-center justify-end overflow-hidden"
            >
              <img src={item.image} alt={item.text} className="w-full h-64 object-cover rounded-t-xl mb-0 font-bold" style={{ fontWeight: 700 }} />
              <div className="w-full text-white text-center font-bold text-lg py-3 bg-gradient-to-t from-black/70 to-transparent">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-center mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Featured Projects
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                    {project.preview && project.preview !== "#" && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hackathons
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.preview !== "#" && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 relative overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Achievements
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Award className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-blue-400 text-sm mb-2">{achievement.date}</p>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Leadership
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipRoles.map((role) => (
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                key={role.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col gap-4">
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img 
                      src={role.image} 
                      alt={role.organization}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{role.title}</h3>
                    <p className="text-purple-400 mb-2">{role.organization}</p>
                    <p className="text-gray-400 mb-3">{role.description}</p>
                    <p className="text-blue-400 text-sm">{role.period}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}