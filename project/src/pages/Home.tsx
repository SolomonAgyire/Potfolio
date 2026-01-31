import { ArrowRight, Award, ExternalLink, Github, Code } from 'lucide-react';
import type { Project, Achievement, Leadership } from '../types';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Music, FlagTriangleRight, Laugh } from 'lucide-react';

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
      description: "A real-time disaster analysis system providing timely relief information by analyzing disaster-related tweets and expanding to multiple platforms.",
      image: "/img/Disaster Relief.jpg",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      link: "https://colab.research.google.com/drive/1dY_9upIpiWWk2DY4GlRuzBu52bbIl3eb?authuser=1",
      preview: "https://drive.google.com/file/d/1V4KrnkAwwAjEjHDP_PvmR8jc1uRNX3ud/view?usp=sharing"
    },
    {
      id: 3,
      title: "BrowseCap Chrome Extension",
      description: "Chrome extension for saving and revisiting important sites while browsing, improving organization and efficiency.",
      image: "/img/chrome extension.jpg",
      technologies: ["Javascript", "Chrome Extension API", "HTML", "CSS"],
      link: "https://github.com/SolomonAgyire/Chrome-Extension-",
      preview: "https://chromewebstore.google.com/detail/fjopbkonccdaejllhfhfnopdicgbennm?utm_source=item-share-cb"
    }
  ];

  const hackathons: Project[] = [
    {
      id: 1,
      title: "Gemini AI Hackathon",
      description: "Led a team of 3 building an AI solution with Google Gemini API for automated invoice processing, achieving 10% accuracy improvement in data extraction.",
      image: "/img/Gemini.png",
      technologies: ["Python", "Gemini API", "AI/ML", "OCR"],
      link: "https://github.com/Chee-ChuanFoo/Generative_AI_Hackathon",
      preview: "#",
      date: "April 2024 - May 2024",
      event: "Google Gemini-AI Hackathon"
    },
    {
      id: 2,
      title: "MasterCard Data Challenge",
      description: "ML model that predicts and optimizes inclusive growth scores across locations, identifying areas for community development investment.",
      image: "/img/MasterCard.jpg",
      technologies: ["Python", "Pandas", "Data Visualization", "Machine Learning"],
      link: "https://colab.research.google.com/drive/17a2kLXMtx5JR5ot0l0t0hP2trJw09rh6",
      preview: "#",
      date: "March 2024",
      event: "MasterCard Data Challenge"
    },
    {
      id: 3,
      title: "HP FOWA HBCU Challenge",
      description: "Fine-tuned a GPT-powered chatbot to assist HBCU students with scholarship search and applications; 20% improvement in application success through personalized assistance.",
      image: "/img/hp.png",
      technologies: ["Prompt Engineering", "GPT-4", "Chatbot"],
      link: "#",
      preview: "#"
    }
  ];

  const achievements: Achievement[] = [
    { id: 2, title: "1st Place MetaScholar Innovation Challenge", date: "April 2024", description: "Designed and pitched a VR headset enabling disabled individuals to experience the metaverse.", icon: "headset" },
    { id: 3, title: "1st Place AAMU STEM Research", date: "March 2024", description: "First place at Alabama A&M University's STEM Research Presentation Competition.", icon: "trophy" },
    { id: 1, title: "2nd Place MasterCard Data Challenge", date: "November 2024", description: "Secured second place for community growth analytics solution.", icon: "award" },
    { id: 6, title: "2X Second Place, Innovate Alabama App Build", date: "January & March 2024", description: "Second place twice at Innovate Alabama App Build.", icon: "award" },
    { id: 4, title: "Eli Lilly HBCU-Day Presenter", date: "November 2023", description: "Selected to present research at Eli Lilly HBCU-Day Conference.", icon: "presentation" },
    { id: 5, title: "Presidential Scholar", date: "August 2023 - Present", description: "Presidential Scholar and Honoree at Alabama A&M University.", icon: "star" }
  ];

  const leadershipRoles: Leadership[] = [
    {
      id: 2,
      title: "President",
      organization: "Google Developer Groups (GDG) at AAMU",
      description: "Lead the campus GDG chapter: technical workshops, hackathons, and connecting developers with industry mentors.",
      image: "/img/GDSC.png",
      link: "https://gdg.community.dev",
      period: "August 2025 - Present"
    },
    {
      id: 1,
      title: "Membership Chair",
      organization: "AAMU ACM Chapter",
      description: "Manage membership and engagement for ACM-AAMU, organizing 4 events per semester.",
      image: "/img/ACM.png",
      link: "https://www.linkedin.com/search/results/all/?keywords=aamu%20acm",
      period: "January 2024 - Present"
    },
    {
      id: 3,
      title: "SLA Lead",
      organization: "Supplemental Learning Assistants, AAMU",
      description: "Lead the Supplemental Learning Assistants who provide assistance and review sessions to students enrolled in Precalculus. We increase the pass rate in the course.",
      image: "/img/tan.png",
      link: "https://www.aamu.edu/academics/academic-support-retention/freshman-academy/tutorial-assistance-network/",
      period: "Present"
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

  const conferences = [
    { id: 1, name: "Tapia Conference 2024", date: "September 2024", location: "San Diego, CA", role: "Attendee", image: "/img/Tapia.png" },
    { id: 2, name: "NSBP/NSHP Conference 2024", date: "November 2024", location: "Houston, TX", role: "Participant", image: "/img/NSBPNSHP.jpeg" },
    { id: 3, name: "Colorstack IRL Summit", date: "August 2024", location: "San Jose, CA", role: "Attendee", image: "/img/Colorstack.png" },
    { id: 4, name: "Eli Lilly HBCU Day", date: "November 2023", location: "Indianapolis, IN", role: "Presenter", image: "/img/Lilly.png" }
  ];

  const hobbies = [
    { icon: Camera, name: "Photography", description: "Capturing moments through my lens" },
    { icon: FlagTriangleRight, name: "Soccer", description: "Playing the beautiful game" },
    { icon: Music, name: "Music", description: "Exploring diverse genres and rhythms" },
    { icon: Laugh, name: "Comedy", description: "Stand-up and shows" }
  ];

  const experienceList = [
    { role: "Software Engineer Intern", company: "Microsoft", period: "May 18 – Aug 2026", description: "Incoming Software Engineer Intern.", technologies: ["Upcoming"], url: "https://microsoft.com" },
    { role: "Software Engineer Intern", company: "Meta", period: "June – Aug 2025", description: "Software Engineer Intern.", technologies: ["Software Engineering"], url: "https://meta.com" },
    { role: "Machine Learning Engineer (Intern)", company: "Facility for Rare Isotope Beams (FRIB)", period: "June – Aug 2025", description: "Unsupervised classification models for nuclear isotope data; mentored high school researchers.", technologies: ["Machine Learning", "Python", "Research"], url: "https://frib.msu.edu/for-students/programs/ping" },
    { role: "Research Publication", company: "Environmental Research Communications (IOP)", period: "March 2025", description: "Topical review on groundwater contamination in Ghana's largest mining enclave.", technologies: ["Environmental Research", "Public Health"], url: "https://iopscience.iop.org/article/10.1088/2515-7620/adc069" },
    { role: "President", company: "Google Developer Groups (GDG) at AAMU", period: "Aug 2025 – Present", description: "Leading the campus developer community: workshops, hackathons, industry connections.", technologies: ["Leadership", "Community", "Events"], url: "https://gdg.community.dev" },
    { role: "Tutor & Writing Assistant", company: "AAMU Teaching Assistant Network (TAN)", period: "Feb 2024 – Present", description: "Calculus I tutoring and support for essays, jobs, and internship applications.", technologies: ["Tutoring", "Mentoring"], url: "https://www.aamu.edu/academics/academic-support-retention/freshman-academy/tutorial-assistance-network/" }
  ];

  const highlightsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = highlightsRef.current;
    if (!container) return;
    let running = true;
    let animationFrame: number;
    const CARD_WIDTH = 384;
    const CARD_GAP = 32;
    const AUTO_SCROLL_STEP = 0.6;
    const maxScroll = (CARD_WIDTH + CARD_GAP) * highlights.length;
    function step() {
      if (!running || !container) return;
      container.scrollLeft += AUTO_SCROLL_STEP;
      if (container.scrollLeft >= maxScroll) container.scrollLeft = 0;
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => { running = false; if (animationFrame) cancelAnimationFrame(animationFrame); };
  }, [highlights.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      {/* Combined Intro + About */}
      <section id="about" className="scroll-mt-20 py-16 lg:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 flex-shrink-0">
              <img
                src="/img/Solomon headshot.jpg"
                alt="Solomon Agyire"
                className="w-full h-full object-cover rounded-lg border border-slate-700"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight mb-2">
                Solomon Agyire
              </h1>
              <p className="text-lg text-teal-400 font-medium mb-6">Software Engineer & Builder</p>
              <div className="space-y-4 text-slate-400 max-w-2xl">
                <p>
                  I am a software engineer and builder. I create technology to solve real problems, from environmental research to machine learning systems. My background includes engineering roles at Meta and FRIB, and I will be joining Microsoft this summer.
                </p>
                <p>
                  I also lead the Google Developer Groups on my campus to connect developers with opportunities. When I am not coding, I enjoy photography, playing soccer, and stand up comedy.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => scrollTo('experience')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-500 transition-colors"
                >
                  View experience <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-md hover:border-slate-500 hover:bg-slate-800/50 transition-colors"
                >
                  <Code className="h-4 w-4" /> Projects
                </button>
              </div>
            </div>
          </div>

          {/* Conferences */}
          <div className="mt-20">
            <h2 className="section-title mb-8">Conference appearances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conferences.map((c) => (
                <div key={c.id} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors">
                  <div className="aspect-video">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-100">{c.name}</h3>
                    <p className="text-teal-400 text-sm">{c.role}</p>
                    <p className="text-slate-500 text-sm">{c.date} · {c.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="mt-16">
            <h2 className="section-title mb-8">Beyond the screen</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {hobbies.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="bg-slate-800/50 rounded-lg border border-slate-700 p-4 text-center hover:border-slate-600 transition-colors">
                    <Icon className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                    <h3 className="font-medium text-slate-200">{h.name}</h3>
                    <p className="text-slate-500 text-sm">{h.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-12 bg-slate-900 border-t border-slate-800">
        <h2 className="section-title text-center mb-6">Highlights</h2>
        <div
          ref={highlightsRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {highlights.concat(highlights).map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 h-72 bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
              <img src={item.image} alt={item.text} className="w-full h-56 object-cover" />
              <div className="p-3 text-center text-slate-300 font-medium">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experienceList.map((job, i) => (
              <a
                key={i}
                href={job.url.startsWith('#') ? job.url : job.url}
                target={job.url.startsWith('#') ? undefined : '_blank'}
                rel={job.url.startsWith('#') ? undefined : 'noopener noreferrer'}
                onClick={job.url.startsWith('#') ? (e) => { e.preventDefault(); scrollTo(job.url.slice(1)); } : undefined}
                className="group block rounded-lg border border-slate-700 bg-slate-800/40 p-4 text-left transition-all hover:border-slate-600 hover:bg-slate-800/60"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-slate-100 font-semibold text-sm mb-0.5 group-hover:text-teal-400 transition-colors truncate">{job.role}</h3>
                    <p className="text-teal-400/90 text-xs truncate">{job.company}</p>
                  </div>
                  <span className="flex-shrink-0 text-slate-500 text-xs tabular-nums">{job.period}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-slate-700/80 text-slate-300 text-xs rounded">
                      {t}
                    </span>
                  ))}
                </div>
                {!job.url.startsWith('#') && (
                  <span className="mt-2 inline-flex items-center gap-1 text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">Featured projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors"
              >
                <div className="aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-slate-700/80 text-teal-400 text-xs rounded">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-teal-400 text-sm">
                      <Github className="h-4 w-4" /> Code
                    </a>
                    {project.preview && project.preview !== '#' && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-400 hover:text-teal-400 text-sm"
                        onClick={project.preview.startsWith('#') ? (e) => { e.preventDefault(); scrollTo(project.preview!.slice(1)); } : undefined}
                      >
                        <ExternalLink className="h-4 w-4" />
                        {project.preview.includes('drive.google') ? 'Documentation' : project.preview.startsWith('#') ? 'Case study' : 'Preview'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section id="hackathons" className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors"
              >
                <div className="aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-slate-700/80 text-teal-400 text-xs rounded">{t}</span>
                    ))}
                  </div>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-teal-400 text-sm">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.id} className="bg-slate-800/50 rounded-lg border border-slate-700 p-5 flex gap-4">
                <div className="p-2 bg-teal-500/10 rounded-lg h-fit">
                  <Award className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">{a.title}</h3>
                  <p className="text-teal-400 text-sm">{a.date}</p>
                  <p className="text-slate-400 text-sm mt-1">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadershipRoles.map((role) => (
              <a
                key={role.id}
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800/50 rounded-lg border border-slate-700 p-4 hover:border-slate-600 transition-colors"
              >
                <div className="h-28 rounded-lg overflow-hidden mb-3">
                  <img src={role.image} alt={role.organization} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">{role.title}</h3>
                <p className="text-teal-400 text-xs">{role.organization}</p>
                <p className="text-slate-400 text-xs mt-1.5 line-clamp-2">{role.description}</p>
                <p className="text-slate-500 text-xs mt-1.5">{role.period}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
