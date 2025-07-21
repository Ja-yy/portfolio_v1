import React, { useEffect } from 'react';
import { Braces, Cpu, Database, Code, LineChart, Network } from 'lucide-react';

export const SkillsSection = () => {
  useEffect(() => {
    // Improved reveal animations on scroll that don't break layout
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: <Cpu strokeWidth={1.5} className="text-rose-400" />,
      items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'OpenCV']
    },
    {
      category: 'LLM Engineering',
      icon: <Braces strokeWidth={1.5} className="text-rose-400" />,
      items: ['Hugging Face', 'LangChain', 'LlamaIndex', 'Langfuse', 'Unsloth AI']
    },
    {
      category: 'Backend & APIs',
      icon: <Code strokeWidth={1.5} className="text-rose-400" />,
      items: ['FastAPI', 'Flask', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Data Engineering',
      icon: <Database strokeWidth={1.5} className="text-rose-400" />,
      items: ['SQL', 'MongoDB', 'Elasticsearch', 'Airflow', 'dbt']
    },
    {
      category: 'Analytics & Visualization',
      icon: <LineChart strokeWidth={1.5} className="text-rose-400" />,
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    {
      category: 'MLOps & Deployment',
      icon: <Network strokeWidth={1.5} className="text-rose-400" />,
      items: ['Docker', 'Kubernetes', 'MLflow', 'AWS', 'GCP']
    }
  ];

  const certifications = [
    'Google Data Analysis Certificate',
    'DevTown Data Scientist Training',
    'AWS Machine Learning Specialty',
    'Deep Learning Specialization'
  ];

  return (
    <section id="skills" className="py-16 bg-imperial-800">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-rose-200">
            A comprehensive toolkit refined through years of hands-on experience
            in AI development and machine learning engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-imperial-900 border border-imperial-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-imperial-800 shadow-sm mb-4">
                {skill.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-sm bg-imperial-700 border border-imperial-600 text-rose-200 rounded-lg hover:bg-rose-900/30 hover:text-rose-400 hover:border-rose-800 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto reveal">
          <h3 className="font-serif text-2xl font-medium text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-imperial-900 border border-imperial-700 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-900/30 text-rose-400 mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-rose-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
