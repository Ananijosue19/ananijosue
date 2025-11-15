import { useState } from 'react';
import { Github, Linkedin, Twitter, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[48px] font-[700] text-[#EEEEEE] text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-[18px] text-[#EEEEEE]/70 text-center mb-12">
          Interested in working together? Let's talk.
        </p>

        <div className="bg-[#1F1F1F] p-8 md:p-12 rounded-2xl border border-[#00ADB5]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#EEEEEE] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#00ADB5]/30 rounded-lg text-[#EEEEEE] focus:outline-none focus:border-[#00ADB5] transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#EEEEEE] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#00ADB5]/30 rounded-lg text-[#EEEEEE] focus:outline-none focus:border-[#00ADB5] transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#EEEEEE] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#00ADB5]/30 rounded-lg text-[#EEEEEE] focus:outline-none focus:border-[#00ADB5] transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00ADB5] text-[#0E0E0E] rounded-lg hover:bg-[#00ADB5]/90 transition-all duration-300 hover:scale-105 font-[600]"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-[#00ADB5]/20">
            <p className="text-[#EEEEEE]/70 text-center mb-6">Connect with me</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0E0E0E] rounded-lg hover:bg-[#00ADB5]/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} color="#EEEEEE" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0E0E0E] rounded-lg hover:bg-[#00ADB5]/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} color="#EEEEEE" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0E0E0E] rounded-lg hover:bg-[#00ADB5]/20 transition-all duration-300 hover:scale-110"
              >
                <Twitter size={24} color="#EEEEEE" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
