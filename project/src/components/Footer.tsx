import { Github, Linkedin, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-slate-200 font-semibold mb-4">Connect</h3>
            <div className="flex gap-6">
              <a href="https://github.com/SolomonAgyire" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/solomon-agyire/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://drive.google.com/drive/folders/1rm37DitkaEGlp-iW_ohZsXeSAx426typ?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="Resume">
                <FileText className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>© {new Date().getFullYear()} Solomon Agyire</p>
            <p className="mt-1 text-slate-500">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
