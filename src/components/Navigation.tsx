
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  scrolled: boolean;
  onScrollTo: (section: string) => void;
}

const Navigation = ({ activeSection, scrolled, onScrollTo }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (sectionId: string) => {
    onScrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-black/95 backdrop-blur-lg py-3 shadow-lg shadow-pink-500/20" 
        : "bg-black/70 backdrop-blur-md py-5"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick("about")}
          className="text-2xl font-bold text-white hover:text-pink-400 transition-colors duration-300"
        >
          Arsona<span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleLinkClick(section.id)}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-pink-400 ${
                activeSection === section.id ? "text-pink-400" : "text-gray-300"
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-pink-400 transition-colors duration-300"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
                className={`block w-full text-left py-3 text-sm font-medium transition-colors duration-300 hover:text-pink-400 ${
                  activeSection === section.id ? "text-pink-400" : "text-gray-300"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
