import { Code, Smartphone, Palette } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and modern websites with the latest technologies.',
    icon: Code,
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Creating native and cross-platform mobile applications.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user interfaces and experiences.',
    icon: Palette,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#1F1F1F]">
      <div className="container mx-auto">
        <h2 className="text-[48px] font-[700] text-[#EEEEEE] text-center mb-16">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#0E0E0E] p-10 rounded-2xl border border-[#00ADB5]/20 hover:border-[#00ADB5] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,173,181,0.2)] hover:scale-105 cursor-pointer group"
              >
                <div className="space-y-6">
                  <div className="p-4 bg-[#00ADB5]/10 rounded-xl w-fit group-hover:bg-[#00ADB5]/20 transition-colors">
                    <Icon size={48} color="#00ADB5" />
                  </div>
                  <h3 className="text-[24px] font-[600] text-[#EEEEEE]">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#EEEEEE]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
