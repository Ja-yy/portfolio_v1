import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-imperial-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-imperial-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-imperial-700 text-white p-8 lg:p-12">
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-rose-300">
                Let's collaborate on your next AI solution
              </h2>
              <p className="text-gray-300 mb-8">
                I'm available for projects involving AI automation, LLM
                pipelines, machine learning development, and technical
                consultancy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-rose-300">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-rose-300">Email</h3>
                    <p className="text-gray-300 text-sm">contact@alexai.dev</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-rose-300">
                    <MessageSquare size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-rose-300">Schedule a call</h3>
                    <p className="text-gray-300 text-sm">
                      Book a 30-minute consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 lg:p-12">
              <h3 className="font-serif text-2xl font-medium text-rose-300 mb-6">
                Send me a message
              </h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-rose-300 mb-1">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 bg-imperial-700 border border-imperial-600 rounded-md focus:ring-1 focus:ring-rose-300 focus:border-rose-300 text-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-rose-300 mb-1">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 bg-imperial-700 border border-imperial-600 rounded-md focus:ring-1 focus:ring-rose-300 focus:border-rose-300 text-white" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-rose-300 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 bg-imperial-700 border border-imperial-600 rounded-md focus:ring-1 focus:ring-rose-300 focus:border-rose-300 text-white" placeholder="Project inquiry" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-rose-300 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 bg-imperial-700 border border-imperial-600 rounded-md focus:ring-1 focus:ring-rose-300 focus:border-rose-300 text-white" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-imperial-600 text-rose-300 hover:bg-imperial-700 transition-colors">
                  Send Message
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
