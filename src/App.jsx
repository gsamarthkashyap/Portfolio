import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, GraduationCap, Menu, X, Home} from 'lucide-react';
import './App.css';
import profile from './assets/Profile.jpg'


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'projects', 'certifications','contact'];
      const scrollPosition = window.scrollY + 100;
      const isNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 1);

    if (isNearBottom) {
      setActiveSection('contact');
      return; // Exit early to set 'contact' definitively
    }
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ["Java", "Python", "C/C++", "HTML/CSS", "LaTeX"],
    frameworks: ["Git/GitHub", "Microsoft Azure", "OpenCV", "Spring Boot", "Django", "React"],
    technical: ["Data Structures & Algorithms", "SQL", "DBMS", "OOP", "Cloud Computing", "OS"]
  };

  const projects = [
    {
      name: "Code Complexity Analyzer",
      description: "Full-stack application analyzing source code time complexity using ANTLR for parsing. Features a React frontend with Spring Boot backend for instant complexity insights.",
      tech: ["Java", "Spring Boot", "React", "ANTLR"],
      link: "https://code-complexity-analyzer-frontend.vercel.app/"
    },
    {
      name: "Currency Converter",
      description: "Real-time currency conversion application with live exchange rate APIs. Built with Django backend and React frontend for accurate, dynamic conversions.",
      tech: ["Django", "React", "REST API"],
      link: "https://github.com/gsamarthkashyap/Currency-Converter"
    },
    {
      name: "Face Recognition Attendance System",
      description: "Real-time face recognition system using OpenCV with automated attendance marking. Features dynamic face encoding and streamlined logging for accuracy.",
      tech: ["Python", "OpenCV", "dlib"],
      link: "https://github.com/gsamarthkashyap/Attendance-Management-Using-Face-Recognition-"
    }
  ];

  const education = [
    {
      institution: "RNS Institute of Technology",
      degree: "Bachelor of Engineering - CSE (AIML)",
      period: "2022 - 2026",
      score: "CGPA: 8.9"
    },
    {
      institution: "Base PU College",
      degree: "PUC (PCMC)",
      period: "2020 - 2022",
      score: "Percentage: 95%"
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-100' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="bg-animation">
        <div className={`blob blob1 ${darkMode ? 'dark' : ''}`}></div>
        <div className={`blob blob2 ${darkMode ? 'dark' : ''}`}></div>
        <div className={`blob blob3 ${darkMode ? 'dark' : ''}`}></div>
      </div>

      {/* Navigation */}
    <nav className={`fixed top-0 w-full z-50 shadow-md transition-colors duration-300 ${
      darkMode ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO / HOME BUTTON (Left) */}
        <a 
          href="#home" 
          className={`transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
        >
          <Home 
            size={28} 
            className="hover:text-blue-600 transition-colors"
          />
        </a>

        {/* FULL SCREEN NAVIGATION LINKS (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-2">
          {['home', 'skills', 'education', 'projects', 'certifications', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-all font-medium px-4 py-2 rounded-lg ${
                activeSection === section
                  ? darkMode 
                    ? 'text-blue-400 bg-blue-900/30 border-b-2 border-blue-400' 
                    : 'font-extrabold border-b-2 border-blue-600'
                  : darkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                    : 'hover:text-blue-600 hover:bg-gray-100'
              }`}
              style={
                !darkMode
                  ? { backgroundColor: 'white', 
                      color: activeSection === section ? '#2563eb' : '#1f2937' }
                  : {}
              }
            >
              {section === 'home' ? 'Introduction' : section}
            </button>
          ))}
        </div> {/* End of desktop links */}

        {/* MOBILE TOGGLE & DARK MODE BUTTONS (Right) */}
        <div className="flex items-center">
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            // **CHANGE 1: p-3 changed to p-2 for better size alignment with the menu button**
            className={`p-2 rounded-full transition-all hover:scale-110 shadow-md ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300'
                : 'hover:bg-gray-100 text-gray-900 border border-gray-200'
            }`}
            style={!darkMode ? { backgroundColor: 'white' } : {}}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* MOBILE MENU ICON - Visible only on small screens */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            // **CHANGE 2: ml-3 changed to ml-4 for better separation**
            className={`p-2 rounded-full ml-4 md:hidden transition-colors ${
              darkMode 
                ? 'text-gray-100 bg-gray-800'
                : 'text-gray-900 border border-gray-200 shadow-sm'
            }`}
            style={!darkMode ? { backgroundColor: 'white' } : {}}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div> {/* End of max-w-6xl container */}
      
      {/* MOBILE MENU DROPDOWN - Collapsible Menu Container */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} 
          ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white border-gray-200'}
          border-t transition-all duration-300 ease-out`}
        // FINAL ATTEMPT AT AGGRESSIVE WHITE OVERRIDE
        style={{
          // Ensures no background image/gradient
          backgroundImage: 'none',
          // If the above fails, using background property here is the final hope
          background: !darkMode ? 'white' : undefined,
        }}
      >
        {['home', 'skills', 'education', 'projects', 'certifications', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => {
              scrollToSection(section);
              setIsMenuOpen(false); // Close menu on link click
            }}
            // **OPTIONAL CHANGE: px-6 changed to px-4 for slightly more centered look under icons**
            className={`block w-full text-left capitalize px-4 py-3 font-medium transition-colors ${
              activeSection === section
                ? darkMode 
                  ? 'text-blue-400 bg-gray-800' 
                  : 'text-blue-600 bg-white' // Light Mode ACTIVE
                : darkMode 
                  ? 'text-gray-300 hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100' // Light Mode NON-ACTIVE
            }`}
            // Guarantee white background for non-active links in light mode
            style={
              !darkMode && activeSection === section // <--- ADDED: Active section inline style for light mode
                ? { backgroundColor: 'white' } 
                : !darkMode && activeSection !== section 
                  ? { backgroundColor: 'white' } 
                  : {}
            }
          >
            {section === 'home' ? 'Introduction' : section}
          </button>
        ))}
      </div>
    </nav>

      {/* Header / Introduction Section */}
      <section id="home" className={`pt-32 pb-20 px-6 relative z-10 `}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className={`w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 bg-gradient-to-br from-blue-500 to-purple-600 ${
                darkMode ? 'ring-gray-700' : 'ring-white'
              }`}>
                <img
                  src={profile} 
                  alt="Samarth G Profile"
                  // New adjustment: Keep scale and x-translate, change y-translate to positive for downward shift
                  // scale-[1.05] (5% zoom)
                  // -translate-x-1 (4px left)
                  // translate-y-2 (8px down)
                  className="scale-[1.08] w-full h-full object-cover transform -translate-x-2 translate-y-1.5" 
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${
                darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}>
                Samarth G
              </h1>
              <p className={`text-xl leading-relaxed max-w-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Tech enthusiast with a passion for software development and a solid foundation in data structures and algorithms. Eager to learn, grow, and contribute to a dynamic tech environment.
              </p>
              <div className="mt-4 md:mt-6"> {/* Updated spacing here */}
                <a
                  href="https://drive.google.com/file/d/1IHdV4mprvvIq2ac9Z4opb6YJKBTqyoAJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    darkMode 
                      ? { color: '#ffffff' } // Guarantee white text in dark mode
                      : {}
                  }
                  // NEW STYLES: Matches the language tags' gradient/color scheme
                  className={`inline-flex items-center gap-2 font-medium px-6 py-2 rounded-lg transition-all shadow-md hover:scale-105 transform active:scale-95 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-900/70 to-purple-900/70 hover:bg-gradient-to-l' // Removed text-white here
                      : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 hover:shadow-lg'
                  }`}
                >
                  View Resume <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className={`py-20 px-6 relative z-10 `}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${
            darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Technical Skills
          </h2>
          <div className={`backdrop-blur-sm p-8 rounded-xl shadow-lg space-y-6 ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-gray-200' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-gray-200' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-gray-200' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 relative z-10 `}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 bg-gradient-to-r ${
            darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            <GraduationCap size={36} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                  darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{edu.institution}</h3>
                <p className={`text-lg mb-3 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{edu.degree}</p>
                <div className={`flex justify-between items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span>{edu.period}</span>
                  <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 relative z-10 `}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r ${
            darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Projects
          </h2>
          
          {/* Parent Container: 'items-stretch' makes cards equal height in the grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:max-w-4xl xl:max-w-6xl mx-auto justify-center items-stretch">
            
            {projects.map((project, index) => (
              <div
                key={index}
                // Added 'flex flex-col' here to enable content alignment inside the card
                className={`
                  backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group 
                  ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}
                  flex flex-col
                  
                  {/* Logic for the last card (index === 2 if there are 3 projects) */}
                  ${projects.length > 2 && index === projects.length - 1 ? 'md:col-span-2 md:mx-auto md:max-w-lg' : ''}
                `}
              >
                {/* Content Wrapper: 'flex-grow' makes this section fill available vertical space */}
                <div className='flex-grow'>
                  <h3 className={`text-xl font-bold mb-3 flex items-center justify-between ${
                    darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    {project.name}
                  </h3>
                  <p className={`mb-4 text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300' 
                            : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Link: 'mt-auto' pushes the link to the bottom of the card */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 transition-colors font-medium mt-auto ${
                    darkMode 
                      ? 'text-blue-400 hover:text-purple-400' 
                      : 'text-blue-600 hover:text-purple-600'
                  }`}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-6 relative z-10 `}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold mb-12 text-center flex items-center justify-center gap-3 bg-gradient-to-r ${
            darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            <Award size={36} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Certifications
          </h2>
          <div className={`backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Data Structures & Backend with Java</h3>
            <p className={`mb-4 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Coursera</p>
            <ul className={`space-y-2 mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Comprehensive understanding of core data structures, operations, and complexity analysis</li>
              <li>• Java backend development with Spring Boot and REST APIs</li>
              <li>• Focus on architecture, scalability, and industry best practices</li>
            </ul>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/1A7NAK52QHYL"
              className={`inline-flex items-center gap-2 transition-colors font-medium ${
                darkMode 
                  ? 'text-blue-400 hover:text-purple-400' 
                  : 'text-blue-600 hover:text-purple-600'
              }`}
            >
              View Certificate <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer id='contact'
      className={`relative z-10 py-12 px-6 mt-20 transition-all duration-500 ${
        darkMode
          ? 'bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] text-white'
          : 'bg-gradient-to-r from-blue-200 to-purple-300 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Name and Role */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">Samarth G</h3>
          <p
            className={`${
              darkMode ? 'text-blue-200' : 'text-gray-700'
            } transition-all`}
          >
            Software Developer | Tech Enthusiast
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="mailto:gsamarthkashyap@gmail.com"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-white hover:text-blue-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            <Mail size={20} />
            <span>gsamarthkashyap@gmail.com</span>
          </a>
          <a
            href="tel:+918884045990"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            <Phone size={20} />
            <span>+91-8884045990</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/gsamarthkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-white hover:text-blue-300'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-blue-600'
            }`}
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/samarth-g-"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-white hover:text-blue-300'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-blue-600'
            }`}
          >
            <Linkedin size={24} />
          </a>
        </div>

        <p
          className={`text-center text-sm ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          © 2025 Samarth G. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
}

export default App;