import React from 'react';
import { Quote } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Alex's expertise in AI model development transformed our approach to content analysis. The political bias detection system exceeded our expectations in both accuracy and implementation speed.",
    author: 'Jane Smith',
    role: 'CTO, MediaTech Solutions'
  }, {
    quote: 'Working with this AI engineer was a revelation for our healthcare data challenges. The extraction pipeline they built has become central to our operations, saving countless hours and improving decision-making.',
    author: 'Dr. Michael Chen',
    role: 'Director of Innovation, HealthCare Analytics'
  }, {
    quote: "The depth of knowledge in machine learning architecture and practical implementation is remarkable. They didn't just deliver a model, but provided insights that helped us understand our data better.",
    author: 'Sarah Johnson',
    role: 'VP of Product, AI Ventures'
  }];
  return <section id="testimonials" className="py-20 bg-imperial-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-rose-300 mb-4">
            Client Endorsements
          </h2>
          <p className="text-lg text-gray-300">
            Feedback from professionals who have experienced the impact of my AI
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-imperial-800 border border-imperial-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 text-rose-300">
                <Quote size={24} strokeWidth={1.5} />
              </div>
              <blockquote className="mb-6">
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </blockquote>
              <div>
                <p className="font-serif font-medium text-rose-300">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
