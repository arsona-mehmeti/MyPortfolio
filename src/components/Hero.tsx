
import { useEffect, useState } from "react";
import { ArrowDown, Github } from "lucide-react";

interface HeroProps {
  onScrollTo: (section: string) => void;
}

const Hero = ({ onScrollTo }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-pink-900/30 border border-pink-500/50 rounded-full text-pink-400 font-medium text-sm mb-6 hover:bg-pink-900/50 transition-colors duration-300">
              Full Stack Developer
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              <span className="inline-block animate-bounce-in">Arsona</span>{" "}
              <span className="inline-block animate-bounce-in animation-delay-200">Mehmeti</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              I build <span className="text-pink-400 font-semibold">digital experiences</span> that are both functional and beautiful.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate developer who enjoys creating clean, user-friendly experiences that make a real difference. I focus on building intuitive solutions that are both functional and enjoyable to use.            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onScrollTo("projects")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </button>
              
              <a
                href="https://github.com/arsona-mehmeti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                <img
                  src="/lovable-uploads/75f40cdc-97ad-4fd7-8d68-1d7eeb3ac6b5.png"
                  alt="Arsona Mehmeti"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
