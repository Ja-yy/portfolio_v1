import React from 'react';
import { Linkedin, X, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-imperial-900 via-imperial-800 to-imperial-700 lg:pt-[7.5em] pt-[3em] pb-0">
      <div className="px-[1em] lg:px-6">
        <div className="bg-gradient-to-br from-imperial-700 via-imperial-800 to-slate-800 xl:rounded-t-[100px] lg:rounded-t-[90px] rounded-t-[30px] relative overflow-hidden">
          <div className="grid xl:grid-cols-4 grid-cols-1 xl:pt-16 xl:px-16 lg:pt-12 lg:px-12 pt-6 px-6">

            {/* First Column - Main heading */}
            <div className="text-white py-5 xl:py-0">
              <h6 className="font-['Audiowide'] font-bold text-[36px] leading-[50px] lg:w-9/12 w-full">
                <span className="text-blue-400">AI is here to Stay</span><br/>
                <span className="text-pink-500">Let's win together</span>
              </h6>
              <p className="text-gray-400 font-normal text-[21px] pt-8 w-10/12 leading-[30px]">
                Do you know, that our first Business to AI alignment session as well as <span className="font-semibold text-rose-300">small PoC's are free of cost?</span>
              </p>
            </div>

            {/* Second Column - Let's work together */}
            <div className="text-white py-5 xl:py-0">
              <h6 className="font-bold text-[22px] text-emerald-400 leading-[36.41px] w-9/12 pb-6">Let's work together</h6>
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
            <div className="text-white py-5 xl:py-0">
              <h6 className="font-bold text-[22px] leading-[36.41px] w-9/12 text-emerald-400 pb-6">Social</h6>
              <a href="#" className="text-gray-400 block font-medium text-[20px] pt-3 w-10/12 leading-[30px] hover:text-white transition-colors">
                <div className="flex items-center">
                  <img src="/src/assets/github-mark/github-mark-white.svg" alt="GitHub" className="w-5 h-5 mr-3" />
                  GitHub
                </div>
              </a>
              <a href="#" className="text-gray-400 block font-medium text-[20px] pt-3 w-10/12 leading-[30px] hover:text-white transition-colors">
                <div className="flex items-center">
                  <Linkedin size={20} className="mr-3" />
                  LinkedIn
                </div>
              </a>
              <a href="#" className="text-gray-400 block font-medium text-[20px] pt-3 w-10/12 leading-[30px] hover:text-white transition-colors">
                <div className="flex items-center">
                  <X size={20} className="mr-3" />
                  X
                </div>
              </a>
            </div>

            {/* Fourth Column - Empty for spacing like Avinashi */}
            <div className="text-white py-5 xl:py-0">
            </div>

          </div>

          {/* Giant JAYYLAB SVG as image replacement */}
          <div className="w-full flex items-center justify-center py-8 overflow-hidden bg-gradient-to-t from-imperial-700 to-transparent">
            <img
              src="/src/assets/JAYYLAB.svg"
              alt="JAYYLAB"
              className="opacity-20 select-none pointer-events-none
                         w-[200%] sm:w-[180%] md:w-[160%] lg:w-[140%] xl:w-[120%] 2xl:w-[100%]
                         h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
