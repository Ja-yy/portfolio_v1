import React from 'react';
import { Linkedin, X, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-imperial-900 via-imperial-800 to-imperial-700 lg:pt-[7.5em] pt-[3em] pb-0 group transition-all duration-700 hover:from-imperial-800 hover:via-imperial-700 hover:to-imperial-600">
      <div className="px-[1em] lg:px-6">
        <div className="bg-gradient-to-br from-imperial-700 via-imperial-800 to-slate-800 xl:rounded-t-[100px] lg:rounded-t-[90px] rounded-t-[30px] relative overflow-hidden transition-all duration-700 group-hover:from-imperial-600 group-hover:via-imperial-700 group-hover:to-slate-700 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
          <div className="grid xl:grid-cols-4 grid-cols-1 xl:pt-16 xl:px-16 lg:pt-12 lg:px-12 pt-6 px-6">

            {/* First Column - Main heading */}
            <div className="text-white py-5 xl:py-0 transition-all duration-500 group-hover:transform group-hover:translate-y-[-2px]">
              <h6 className="font-['Audiowide'] font-bold text-[36px] leading-[50px] lg:w-9/12 w-full">
                <span className="text-blue-400 transition-all duration-500 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">AI is here to Stay</span><br/>
                <span className="text-pink-500 transition-all duration-500 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">Let's win together</span>
              </h6>

            </div>

            {/* Second Column - Let's work together */}
            <div className="text-white py-5 xl:py-0 transition-all duration-500 group-hover:transform group-hover:translate-y-[-2px]">
              <h6 className="font-bold text-[22px] text-emerald-400 leading-[36.41px] w-9/12 pb-6 transition-all duration-500 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">Let's work together</h6>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="flex items-center text-gray-300 gap-4 font-semibold group cursor-pointer text-[20px] leading-[36.41px] transition-all duration-500 hover:text-white">
                    Say Hello
                    <div className="relative p-[3px] inline-block rounded-full group-hover:bg-gradient-to-r transition-all duration-300 ease-in-out from-blue-400 via-pink-500 to-rose-400">
                      <div className="p-2 bg-imperial-700 rounded-full w-full h-full group-hover:rotate-45 transition-all duration-500 ease-in-out">
                        <ArrowRight className="text-white" size={16} />
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>

            {/* Third Column - Social */}
            <div className="text-white py-5 xl:py-0 transition-all duration-500 group-hover:transform group-hover:translate-y-[-2px]">
              <h6 className="font-bold text-[22px] leading-[36.41px] w-9/12 text-emerald-400 pb-6 transition-all duration-500 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">Social</h6>
              <a href="#" className="text-gray-400 block font-medium text-[20px] pt-3 w-10/12 leading-[30px] hover:text-white transition-all duration-300 hover:transform hover:translate-x-2 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                <div className="flex items-center">
                  <img src="/src/assets/github-mark/github-mark-white.svg" alt="GitHub" className="w-5 h-5 mr-3 transition-transform duration-300 hover:scale-110" />
                  GitHub
                </div>
              </a>
              <a href="#" className="text-gray-400 block font-medium text-[20px] pt-3 w-10/12 leading-[30px] hover:text-white transition-all duration-300 hover:transform hover:translate-x-2 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                <div className="flex items-center">
                  <Linkedin size={20} className="mr-3 transition-transform duration-300 hover:scale-110" />
                  LinkedIn
                </div>
              </a>
              <a href="#" className="text-gray-400 block font-medium text-[20px] pt-3 w-10/12 leading-[30px] hover:text-white transition-all duration-300 hover:transform hover:translate-x-2 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                <div className="flex items-center">
                  <X size={20} className="mr-3 transition-transform duration-300 hover:scale-110" />
                  X
                </div>
              </a>
            </div>

            {/* Fourth Column - Empty for spacing like Avinashi */}
            <div className="text-white py-5 xl:py-0">
            </div>

          </div>

          {/* Giant JAYYLAB SVG as image replacement */}
          <div className="w-full flex items-center justify-center py-8 overflow-hidden bg-gradient-to-t from-imperial-700 to-transparent transition-all duration-700 group-hover:from-imperial-600">
            <img
              src="/src/assets/JAYYLAB.svg"
              alt="JAYYLAB"
              className="opacity-40 select-none pointer-events-none transition-all duration-700 
                         w-[200%] sm:w-[180%] md:w-[160%] lg:w-[140%] xl:w-[120%] 2xl:w-[100%]
                         h-auto object-contain group-hover:opacity-60 group-hover:scale-105 
                         filter group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
