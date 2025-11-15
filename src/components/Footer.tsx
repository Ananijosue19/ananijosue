import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#0E0E0E] border-t border-[#00ADB5]/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#00ADB5] transition-colors duration-300"
            >
              <Github size={24} color="#EEEEEE" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#00ADB5] transition-colors duration-300"
            >
              <Linkedin size={24} color="#EEEEEE" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#00ADB5] transition-colors duration-300"
            >
              <Twitter size={24} color="#EEEEEE" />
            </a>
          </div>
          
          <p className="text-[#EEEEEE]/70 text-center">
            © 2025 Josuedex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
