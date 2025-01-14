//import React from 'react';
import { Github, Linkedin, FileText, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <div className="flex space-x-6">
              <a href="https://github.com/SolomonAgyire" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/solomon-agyire/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/share/19k8Amevin/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://drive.google.com/drive/folders/1rm37DitkaEGlp-iW_ohZsXeSAx426typ?usp=sharing" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors">
                <FileText className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 Solomon Agyire</p>
            <p className="text-gray-400">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}