//import React from 'react';
import { Camera, Music, FlagTriangleRight, Laugh } from 'lucide-react';

export function About() {
  const conferences = [
    {
      id: 1,
      name: "Tapia Conference 2024",
      date: "September 2024",
      location: "San Diego, CA",
      role: "Attendee",
      image: "/img/Tapia.png"
    },
    {
      id: 2,
      name: "NSBP/NSHP Conference 2024",
      date: "November 2024",
      location: "Houston, TX",
      role: "Participant",
      image: "/img/NSBPNSHP.jpeg"
    },
    {
      id: 3,
      name: "Colorstack IRL Summit",
      date: "August 2024",
      location: "San Jose, CA",
      role: "Attendee",
      image: "/img/Colorstack.png"
    },
    {
      id: 4,
      name: "Eli Lilly HBCU Day",
      date: "November 2023",
      location: "Indianapolis, IN",
      role: "Presenter",
      image: "/img/Lilly.png"
    }
  ];

  const hobbies = [
    { icon: Camera, name: "Photography", description: "Capturing moments through my lens" },
    { icon: FlagTriangleRight, name: "Soccer", description: "Playing the beautiful game" },
    { icon: Music, name: "Music", description: "Exploring diverse genres and rhythms" },
    { icon: Laugh, name: "Comedy", description: "Enjoying stand-up and shows" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* About Section */}
        <section className="mb-32">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Profile Image */}
                <div className="relative lg:w-1/3">
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white/10">
                    <img
                      src="/img/King.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full overflow-hidden border-4 border-black">
                    <img
                      src="/img/SolomonSnow.jpg"
                      alt="Secondary Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* About Content */}
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      About Me
                    </span>
                  </h1>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Hello! I'm Solomon Agyire. I am originally from Bogoso, Ghana. I am currently a Computer Science student at Alabama A&M University 
                      with a passion for leveraging technology to solve real-world problems and improve lives.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      My journey into tech was inspired by witnessing its transformative impact, from enabling 
                      seamless global communication to driving data-driven decisions and innovation in critical 
                      areas like healthcare and disaster relief.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      When I'm not coding, you'll find me staying connected with my roots, exploring comedy 
                      shows, or finding ways to enhance my personal and professional growth.
                    </p>

                    <p className="text-lg leading-relaxed">
                      Currently, I'm focused on improving my skills as well as staying on top of other modern technologies. I believe in writing clean, maintainable code
                      that scales with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conferences Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Conference Appearances
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conferences.map(conference => (
              <div key={conference.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-70"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                  <div className="aspect-video">
                    <img
                      src={conference.image}
                      alt={conference.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{conference.name}</h3>
                    <p className="text-blue-400 mb-1">{conference.role}</p>
                    <p className="text-gray-400">{conference.date} • {conference.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section>
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hobbies & Interests
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <hobby.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">{hobby.name}</h3>
                  <p className="text-gray-400">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}