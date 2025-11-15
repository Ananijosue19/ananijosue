import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
      style={{
        background: 'linear-gradient(180deg, #1C1C1C 0%, #0E0E0E 100%)',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-[56px] leading-[1.1] font-[700] text-[#EEEEEE]">
            Hi, I'm <span className="text-[#00ADB5]">Josué dex</span>
            <br />
            Full Stack Developer.
          </h1>
          <p className="text-[20px] text-[#EEEEEE]/80 max-w-lg">
            I build modern web and mobile experiences.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-[#00ADB5] text-[#0E0E0E] rounded-lg hover:bg-[#00ADB5]/90 transition-all duration-300 hover:scale-105 font-[600]"
          >
            View my work
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-[0_0_50px_rgba(0,173,181,0.3)]">
              <ImageWithFallback
                src="/image/imgUn.webp"
                alt="Josuedex Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
