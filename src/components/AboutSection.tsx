import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="container mx-auto">
        <h2 className="text-[48px] font-[700] text-[#EEEEEE] text-center mb-16">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="flex-1">
            <div className="w-full max-w-[400px] mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-[#00ADB5]/30">
              <ImageWithFallback
                src="./image/profil.png"
                alt="About Josuedex"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-[18px] text-[#EEEEEE]/90 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web and mobile applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless digital experiences 
              that combine beautiful design with powerful functionality.
            </p>
            <p className="text-[18px] text-[#EEEEEE]/90 leading-relaxed">
              My focus is on writing clean, maintainable code and delivering solutions that exceed client expectations. 
              I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#00ADB5] text-[#00ADB5] rounded-lg hover:bg-[#00ADB5] hover:text-[#0E0E0E] transition-all duration-300 font-[600]">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
