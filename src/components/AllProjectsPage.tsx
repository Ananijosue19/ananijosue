import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { useState , useEffect} from 'react';

const allProjects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'A modern analytics platform with real-time data visualization and insights.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE1NDg5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking solution with intuitive UI and seamless transactions.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYxNTcxNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile Apps',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2MTU3Mzc5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Creative portfolio website with stunning animations and modern design.',
    image: 'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTUzMTUyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Full-featured social networking platform with real-time messaging and content sharing.',
    image: 'https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE1NzU3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Development',
  },
  {
    id: 6,
    title: 'Task Management App',
    description: 'Collaborative task management tool with team features and productivity tracking.',
    image: 'https://images.unsplash.com/photo-1758611972975-5b7e6568eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTc2MTU3NTcyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile Apps',
  },
  {
    id: 7,
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracker with workout plans and progress monitoring.',
    image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBhcHB8ZW58MXx8fHwxNzYxNTQ2MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile Apps',
  },
  {
    id: 8,
    title: 'Food Delivery App',
    description: 'Restaurant food delivery platform with real-time order tracking and reviews.',
    image: 'https://images.unsplash.com/photo-1640082380928-2f7079392823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2MTQ5MDQ3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile Apps',
  },
  {
    id: 9,
    title: 'Real Estate Listing',
    description: 'Property listing platform with advanced search filters and virtual tours.',
    image: 'https://images.unsplash.com/photo-1760898002480-a89156856aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBsaXN0aW5nfGVufDF8fHx8MTc2MTU3NTczMXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Development',
  },
];

interface AllProjectsPageProps {
  onBack: () => void;
}

export function AllProjectsPage({ onBack }: AllProjectsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'mobile'>('all');

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const filteredProjects = allProjects.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'web') return project.category === 'Web Development';
    if (selectedFilter === 'mobile') return project.category === 'Mobile Apps';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Header */}
      <div className="bg-[#1F1F1F] border-b border-[#00ADB5]/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-[56px] font-[700] text-[#EEEEEE] mb-4">
              All Projects
            </h1>
            <p className="text-[20px] text-[#EEEEEE]/70 mb-8">
              Explore my complete portfolio of {allProjects.length} projects
            </p>
            <br />

            {/* Filter Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedFilter === 'all'
                    ? 'bg-[#00ADB5] text-[#0E0E0E]'
                    : 'bg-[#1F1F1F] text-[#EEEEEE] border border-[#00ADB5]/20 hover:border-[#00ADB5]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedFilter('web')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedFilter === 'web'
                    ? 'bg-[#00ADB5] text-[#0E0E0E]'
                    : 'bg-[#1F1F1F] text-[#EEEEEE] border border-[#00ADB5]/20 hover:border-[#00ADB5]'
                }`}
              >
                Web
              </button>
              <button
                onClick={() => setSelectedFilter('mobile')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedFilter === 'mobile'
                    ? 'bg-[#00ADB5] text-[#0E0E0E]'
                    : 'bg-[#1F1F1F] text-[#EEEEEE] border border-[#00ADB5]/20 hover:border-[#00ADB5]'
                }`}
              >
                Mobile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1F1F1F] rounded-2xl overflow-hidden border border-[#00ADB5]/20 hover:border-[#00ADB5] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,173,181,0.2)] group"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#00ADB5]/10 text-[#00ADB5] rounded-full text-[14px]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-[24px] font-[600] text-[#EEEEEE]">
                    {project.title}
                  </h3>
                  <p className="text-[16px] text-[#EEEEEE]/70">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#00ADB5] text-[#0E0E0E] rounded-lg hover:bg-[#00ADB5]/90 transition-all duration-300 font-[600]">
                    View Details
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
