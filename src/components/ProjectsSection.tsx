import React, { useState } from 'react';
import { ArrowRight, BarChart2, FileText, Activity } from 'lucide-react';
export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const projects = [{
    title: 'Political Bias Detection Model',
    description: 'Developed a political bias detection model achieving 90% accuracy through detailed client consultations, architecture selection via AutoML, and custom deep learning model development with MLflow experiment tracking.',
    category: 'nlp',
    icon: <BarChart2 strokeWidth={1.5} />,
    stats: ['90% Accuracy', 'AutoML', 'MLflow']
  }, {
    title: 'Healthcare Data Extraction Pipeline',
    description: 'Built a healthcare-focused data extraction and mapping pipeline that improved accuracy from below 50% to 75%, achieving 100% data extraction efficiency with robust fallback handling wrapped around a FastAPI architecture.',
    category: 'data',
    icon: <FileText strokeWidth={1.5} />,
    stats: ['75% Accuracy', '100% Extraction', 'FastAPI']
  }, {
    title: 'Sentiment Analysis for Financial Markets',
    description: 'Created a real-time sentiment analysis system for financial markets that processes news articles and social media to predict market movements with 82% correlation to actual market shifts.',
    category: 'nlp',
    icon: <Activity strokeWidth={1.5} />,
    stats: ['82% Correlation', 'Real-time', 'Scalable']
  }];
  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);
  return <section id="projects" className="py-20 bg-imperial-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-rose-300 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300">
            A selection of AI solutions that demonstrate my approach to solving
            complex problems with innovative technology.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-imperial-800 rounded-lg shadow-sm">
            {['all', 'nlp', 'data'].map(tab => <button key={tab} className={`px-4 py-2 text-sm rounded-md transition-colors ${activeTab === tab ? 'bg-imperial-700 text-rose-300 font-medium' : 'text-gray-300 hover:text-rose-200'}`} onClick={() => setActiveTab(tab)}>
                {tab === 'all' ? 'All Projects' : tab === 'nlp' ? 'NLP & ML' : 'Data Engineering'}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => <div key={index} className="bg-imperial-800 border border-imperial-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-imperial-700 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-imperial-800 text-rose-300">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-rose-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stats.map((stat, i) => <span key={i} className="inline-block px-3 py-1 text-xs bg-imperial-700 border border-imperial-600 text-gray-300 rounded-full">
                      {stat}
                    </span>)}
                </div>
                <a href="#" className="inline-flex items-center text-sm text-rose-300 hover:text-rose-200">
                  View Case Study
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-imperial-700 text-rose-300 hover:bg-imperial-800 transition-colors">
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};
