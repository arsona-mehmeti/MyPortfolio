
import { useState, useEffect } from "react";
import { Server, Monitor, Database, BarChart3, Settings, Palette } from "lucide-react";

const Skills = () => {
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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["Vue.js", "JavaScript", "HTML5 & CSS3", "UI/UX Design"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Java Spring Boot", "RESTful APIs", "Authentication", "Microservices"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "DevOps",
      icon: Settings,
      skills: ["Docker", "Git", "CI/CD", "Linux"],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma", "Responsive Design", "User Experience", "Prototyping"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-6 flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-pink-500/30 transition-colors duration-300"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
