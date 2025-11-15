import { Code2, Smartphone, Database, Globe, Layers, Server, Flame, Workflow,Plug, Brain } from 'lucide-react';

const skills = [
  { name: 'Html, Css , Bootstrap', icon: Code2, color: '#00ADB5' },
  { name: 'JavaScript , Python , Dart', icon: Globe, color: '#00ADB5' },
  { name: 'React', icon: Layers, color: '#00ADB5' },
  { name: 'Flutter', icon: Smartphone, color: '#00ADB5' },
  { name: 'Node.js', icon: Server, color: '#00ADB5' },
  { name: 'Firebase', icon: Flame, color: '#00ADB5' },
  { name: 'MongoDB , MySQL', icon: Database, color: '#00ADB5' },
  { name: 'CI/CD', icon: Workflow, color: '#00ADB5' },
    { name: 'Intégration d\'API', icon: Plug, color: '#00ADB5' },
  { name: 'Utilisation d\'IA', icon: Brain, color: '#00ADB5' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#1F1F1F]">
      <div className="container mx-auto">
        <h2 className="text-[48px] font-[700] text-[#EEEEEE] text-center mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-[#0E0E0E] p-8 rounded-2xl border border-[#00ADB5]/20 hover:border-[#00ADB5] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,173,181,0.2)] hover:scale-105 cursor-pointer group"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-[#00ADB5]/10 rounded-xl group-hover:bg-[#00ADB5]/20 transition-colors">
                    <Icon size={40} color={skill.color} />
                  </div>
                  <h3 className="text-[18px] font-[600] text-[#EEEEEE]">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
