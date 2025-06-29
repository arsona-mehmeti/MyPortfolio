
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Voting System",
      description: "Electronic voting platform with real-time results and admin dashboard built with Spring Boot.",
      tech: ["Java Spring Boot", "Thymeleaf", "PostgreSQL", "JavaScript"],
      github: "https://github.com/arsona-mehmeti/eVoting-System",
      demo: null,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Healthcare Appointment Platform",
      description: "Comprehensive clinic management system with multi-role access control and patient management.",
      tech: ["Spring Boot", "Vue.js", "PostgreSQL", "JWT"],
      github: "https://github.com/arsona-mehmeti/Healtcare-Appointment-System-Frontend",
      demo: null,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool to learn and visualize sorting algorithms and pathfinding techniques.",
      tech: ["HTML5", "CSS3", "JavaScript", "D3.js"],
      github: "https://github.com/arsona-mehmeti/AlgorithmVisualizations",
      demo: null,
      gradient: "from-indigo-500 to-cyan-600"
    },
    {
      title: "Addiction Predictor",
      description: "Machine learning model for identifying at-risk students with 92% accuracy using behavioral data.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      github: "https://github.com/arsona-mehmeti/Student-SocialMedia-Addiction-Predictor",
      demo: null,
      gradient: "from-cyan-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-6 flex items-center justify-center`}>
                <Github className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
