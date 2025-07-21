import React, { useEffect, useRef } from 'react';
import { ArrowRight, Terminal, Code, Cpu } from 'lucide-react';

export const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Add animation classes on load
    const heroContent = document.getElementById('hero-content');
    if (heroContent) {
      heroContent.classList.add('animate-fade-in-up');
    }

    // Neural network animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation parameters
    const breathingSpeed = 0.003; // Faster breathing
    let breathingPhase = 0;

    // Neural network structure
    class Neuron {
      x: number;
      y: number;
      baseRadius: number;
      connections: Neuron[];
      colorPosition: number; // 0 = blue, 1 = purple

      constructor(x: number, y: number, colorPosition: number) {
        this.x = x;
        this.y = y;
        this.baseRadius = 2 + Math.random() * 3;
        this.connections = [];
        this.colorPosition = colorPosition;
      }

      draw(ctx: CanvasRenderingContext2D, breathingFactor: number) {
        // Calculate current radius with breathing effect
        const radius = this.baseRadius * (1 + 0.2 * breathingFactor);

        // Create glowing effect with gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, radius * 3
        );

        // Color based on position (blue to purple gradient)
        const blueColor = [64, 156, 255]; // Bright blue
        const purpleColor = [190, 100, 255]; // Bright purple

        const r = Math.round(blueColor[0] * (1 - this.colorPosition) + purpleColor[0] * this.colorPosition);
        const g = Math.round(blueColor[1] * (1 - this.colorPosition) + purpleColor[1] * this.colorPosition);
        const b = Math.round(blueColor[2] * (1 - this.colorPosition) + purpleColor[2] * this.colorPosition);

        // Bright center
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.9)`);
        // Mid glow
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.3)`);
        // Fade out
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        // Draw glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
        ctx.fill();
      }
    }

    // Create neural network similar to the image
    const createNetwork = () => {
      const neurons: Neuron[] = [];
      const totalNeurons = 25; // Fewer neurons for a cleaner look

      // Create neurons in a more organic pattern
      for (let i = 0; i < totalNeurons; i++) {
        // Position neurons in a diagonal pattern from left to right
        // Left side has more blue, right side has more purple
        const colorPosition = i / totalNeurons; // 0 to 1

        // Create a curved diagonal pattern
        const xPercent = colorPosition;
        const yOffset = Math.sin(colorPosition * Math.PI) * 0.3; // Curve upward in middle

        const x = canvas.width * (0.1 + xPercent * 0.8); // Use 80% of width, with 10% padding
        const y = canvas.height * (0.3 + yOffset + Math.random() * 0.4); // Center vertically with some randomness

        neurons.push(new Neuron(x, y, colorPosition));
      }

      // Create connections - fewer connections than before
      for (let i = 0; i < neurons.length; i++) {
        const neuron = neurons[i];

        // Connect to a few nearby neurons
        for (let j = 0; j < neurons.length; j++) {
          if (i !== j) {
            const otherNeuron = neurons[j];
            const dx = neuron.x - otherNeuron.x;
            const dy = neuron.y - otherNeuron.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only connect if they're close enough and with some randomness
            // Also prefer connections that go from left to right (blue to purple)
            if (distance < canvas.width * 0.25 &&
                Math.random() < 0.2 &&
                neuron.colorPosition < otherNeuron.colorPosition) {
              neuron.connections.push(otherNeuron);
            }
          }
        }
      }

      return neurons;
    };

    const neurons = createNetwork();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update breathing phase
      breathingPhase += breathingSpeed;
      if (breathingPhase > Math.PI * 2) {
        breathingPhase = 0;
      }

      // Calculate breathing factor (0 to 1)
      const breathingFactor = (Math.sin(breathingPhase) + 1) / 2;

      // Draw connections first (so they appear under nodes)
      neurons.forEach(neuron => {
        neuron.connections.forEach(connectedNeuron => {
          // Calculate connection opacity based on breathing
          const opacity = 0.15 + 0.1 * breathingFactor;

          // Draw connection with gradient - color based on the two connected neurons
          const gradient = ctx.createLinearGradient(
            neuron.x, neuron.y,
            connectedNeuron.x, connectedNeuron.y
          );

          // Start color (blue-ish)
          const r1 = Math.round(64 * (1 - neuron.colorPosition) + 190 * neuron.colorPosition);
          const g1 = Math.round(156 * (1 - neuron.colorPosition) + 100 * neuron.colorPosition);
          const b1 = Math.round(255 * (1 - neuron.colorPosition) + 255 * neuron.colorPosition);

          // End color (purple-ish)
          const r2 = Math.round(64 * (1 - connectedNeuron.colorPosition) + 190 * connectedNeuron.colorPosition);
          const g2 = Math.round(156 * (1 - connectedNeuron.colorPosition) + 100 * connectedNeuron.colorPosition);
          const b2 = Math.round(255 * (1 - connectedNeuron.colorPosition) + 255 * connectedNeuron.colorPosition);

          gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, ${opacity})`);

          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(connectedNeuron.x, connectedNeuron.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5 + 0.5 * breathingFactor;
          ctx.stroke();
        });
      });

      // Draw neurons on top
      neurons.forEach(neuron => {
        neuron.draw(ctx, breathingFactor);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-imperial-950 via-imperial-900 to-[#1a0b30]"
    >
      {/* Neural network canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Background elements - keeping subtle gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"></div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative py-12">
        <div id="hero-content" className="max-w-3xl mx-auto text-center opacity-0">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-rose-900/30 border border-rose-800 shadow-sm backdrop-blur-sm">
            <span className="text-xs font-medium text-rose-300">
              AI Developer & Engineer
            </span>
          </div>

          {/* Adding backdrop for better text readability */}
                    <div className="relative">
            <div className="absolute inset-0 bg-imperial-950/60 backdrop-blur-sm rounded-2xl -m-4"></div>
            <h1 className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-6 text-shadow p-4">
              Crafting Intelligence for <span className="bg-gradient-to-br from-rose-400 to-rose-600 text-transparent bg-clip-text">Tomorrow's Solutions</span>
            </h1>
          </div>

          <div className="relative mt-4">
            <div className="absolute inset-0 bg-imperial-950/40 backdrop-blur-sm rounded-xl -m-2"></div>
            <p className="relative text-base sm:text-lg md:text-xl text-rose-100 mb-8 leading-relaxed text-shadow p-2">
              From data analyst to AI developer with 3+ years of experience, my
              journey has been fueled by passion and curiosity in machine learning
              and large language models.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white hover:bg-rose-500 transition-all hover:scale-105 shadow-md"
            >
              View My Work
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-imperial-700 text-rose-200 hover:bg-imperial-800 hover:text-rose-400 hover:border-rose-800 transition-all shadow-sm backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              {
                icon: <Terminal size={20} strokeWidth={1.5} className="text-rose-400" />,
                label: 'AI Solutions'
              },
              {
                icon: <Code size={20} strokeWidth={1.5} className="text-rose-400" />,
                label: 'LLM Engineering'
              },
              {
                icon: <Cpu size={20} strokeWidth={1.5} className="text-rose-400" />,
                label: 'ML Architecture'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-imperial-800/80 border border-imperial-700 mb-2 shadow-sm group-hover:shadow-md group-hover:border-rose-700 transition-all backdrop-blur-sm">
                  {item.icon}
                </div>
                <span className="text-sm text-rose-200 group-hover:text-rose-400 transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - reducing bottom spacing to 4 from 8 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-rose-300 mb-1">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};
