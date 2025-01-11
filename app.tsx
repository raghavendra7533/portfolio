import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Netflix PRD",
      description: "Comprehensive Product Requirements Document for Netflix, detailing feature specifications, user stories, and implementation strategy",
      techStack: ["Product Strategy", "PRD", "User Research"],
      highlights: [
        "Detailed user personas and journey maps",
        "Feature prioritization framework",
        "Success metrics and KPIs"
      ],
      link: "https://verbose-zebu-337.notion.site/Netflix-PRD-7eaf83a6b5754cc98638b739f744ddf3?pvs=4"
    },
    {
      title: "'How Might We' Statements",
      description: "Strategic approach to problem-solving using the 'How Might We' framework to identify opportunities and challenges",
      techStack: ["Problem Framing", "Design Thinking", "Strategy"],
      highlights: [
        "Problem space exploration",
        "Opportunity identification",
        "Solution ideation framework"
      ],
      link: "https://verbose-zebu-337.notion.site/HMW-Statements-c1fbe2b6cf1e4fc5bd9ee7babac8b589?pvs=4"
    },
    {
      title: "Visualise Solutions",
      description: "Visual representation of product solutions and concepts, bringing ideas to life through detailed mockups and wireframes",
      techStack: ["UI/UX", "Product Design", "Wireframing"],
      highlights: [
        "User interface concepts",
        "Solution visualization",
        "Design iterations"
      ],
      link: "https://verbose-zebu-337.notion.site/Visualise-Solutions-9d02dafec764493b9b87173204dc986a?pvs=4"
    },
    {
      title: "Todo API",
      description: "Built a RESTful API using Flask and Python for task management with complete CRUD operations",
      techStack: ["Python", "Flask", "RESTful API"],
      highlights: [
        "Implemented CRUD operations",
        "Added user authentication",
        "Deployed on Heroku"
      ],
      link: "https://github.com/raghavendra7533/Flask-API-APICHALLENGE"
    }
  ];

  const experiences = [
    {
      role: "Product Manager",
      company: "Surview.io",
      period: "Sept 2024 - Present",
      points: [
        "Spearheaded end-to-end development from market research to MVP creation",
        "Conducted comprehensive user research and interviews",
        "Leveraged AI technology to enhance user interview process",
        "Analyzed data to ideate and prioritize product solutions"
      ]
    },
    {
      role: "Founder's Office Intern",
      company: "Unlearn Product",
      period: "Oct 2024 - Present",
      points: [
        "Oversaw end-to-end member experience and operational processes",
        "Developed and executed effective marketing strategies to drive engagement and growth",
        "Conducted data analysis to identify insights and implemented solutions to optimize revenue",
        "Collaborated with cross-functional teams and external vendors to ensure seamless operations"
      ]
    },
    {
      role: "Associate Software Developer",
      company: "Bugasura",
      period: "Jan 2023 - July 2024",
      points: [
        "Developed user-focused webpages using HTML, CSS, and JavaScript",
        "Collaborated cross-functionally to integrate frontend with backend systems",
        "Leveraged Figma and MAMP for efficient design and data management",
        "Worked in Agile Development Lifecycle"
      ]
    },
    {
      role: "Intern - Generalist",
      company: "Moolya Software Testing",
      period: "May 2022 - May 2023",
      points: [
        "Gained expertise in no-code tools like Webflow and Airtable to build quick, scalable solutions",
        "Developed a To-Do API using Python and Flask to address specific user needs",
        "Collaborated with pre-sales to align product solutions with customer requirements",
        "Implemented Google Ads and Tag Manager to track performance metrics",
        "Automated workflows with Zapier to streamline data management"
      ]
    },
    {
      role: "Co-Founder",
      company: "Terega Tech",
      period: "Jun 2020 - Jan 2023",
      points: [
        "Conducted competitive research to recommend consumer technology, growing readership to 10,000 monthly",
        "Authored tech blogs to help users make informed product choices",
        "Aligned content with user needs and market trends"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelors in Computer Applications",
      school: "Sikkim University",
      period: "2022 - 2025",
      status: "Pursuing"
    },
    {
      degree: "PM in Residence, Product Management",
      school: "Unlearn Product",
      period: "Jul 2024 - Sept 2024"
    },
    {
      degree: "High School (PUC)",
      school: "Jnana Sweekar PU College",
      period: "May 2022"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "Python", "Flask", "Webflow", 
    "Figma", "Product Research", "UX Design", "Growth Analytics",
    "Airtable", "Zapier", "Google Analytics", "Google Tag Manager"
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Rest of the JSX remains the same */}
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center p-8 relative">
        <div className="text-center space-y-4 max-w-3xl">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Raghavendra Radhakrishnan
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            Not Your Average Product Manager
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Breaking Barriers | Building Dreams | Making Impact
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/raghavendra7533" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/raghavendra-radhakrishnan-a2b8a2175" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:raghavendra8076@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto animate-on-scroll" id="about-content">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Started programming at 13 and mastered HTML, CSS, and JavaScript by 14. At 16, launched a tech blog, 
            sparking a love for product thinking and problem-solving. Started my professional journey as a Frontend 
            Developer at 18, building and maintaining web applications in agile teams. I thrive at the intersection 
            of technology, creativity, and strategy, aiming to build products that make a difference.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-gray-50 p-6 rounded-lg shadow-lg animate-on-scroll transition-all duration-700 ${
                  isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`project-${index}`}
              >
                <h3 className="text-xl font-bold mb-2 text-indigo-600">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`animate-on-scroll transition-all duration-700 ${
                  isVisible[`exp-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`exp-${index}`}
              >
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
                  <p className="text-indigo-500 mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`bg-gray-50 p-6 rounded-lg shadow-lg animate-on-scroll transition-all duration-700 ${
                  isVisible[`edu-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`edu-${index}`}
              >
                <h3 className="text-lg font-bold text-indigo-600">{edu.degree}</h3>
                <p className="text-indigo-500">{edu.school}</p>
                <p className="text-gray-600">{edu.period}</p>
                {edu.status && <p className="text-green-600 mt-2">{edu.status}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full animate-on-scroll transition-all duration-700 ${
                  isVisible[`skill-${index}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                id={`skill-${index}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <p>© 2025 Raghavendra Radhakrishnan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;