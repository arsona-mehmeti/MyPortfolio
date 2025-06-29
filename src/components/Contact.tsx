
import { useState, useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400/20 to-purple-400/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Header */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in working together or have a project in mind? I'd love to hear from you!
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:arsona.mehmeti@example.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            
            <a
              href="https://github.com/arsona-mehmeti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              View More Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2025 Arsona Mehmeti. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
