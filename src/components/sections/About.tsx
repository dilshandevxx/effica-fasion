"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function About() {
  const cards = [
    { title: "INITIAL AUDIT", src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" },
    { title: "STRATEGY DEVELOPMENT", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" },
    { title: "SYSTEM SETUP", src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" },
    { title: "TEAM TRAINING", src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-[#111111] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Video Placeholder (Left) */}
          <div className="w-full lg:w-5/12">
            <div className="flex border-b border-zinc-800 pb-2 mb-4">
              <span className="text-xs tracking-widest uppercase font-mono text-zinc-400">01 / WHO WE ARE</span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-none bg-zinc-900 overflow-hidden group cursor-pointer flex items-center justify-center filter grayscale transition-all duration-700 hover:grayscale-0"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
                alt="Our modern office" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-[#111]/30 group-hover:bg-transparent transition-colors z-10" />
              {/* Play Button Icon */}
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-20 group-hover:scale-110 transition-transform mix-blend-difference">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </motion.div>
          </div>

          {/* Text Area (Right) */}
          <div className="w-full lg:w-7/12 flex flex-col pt-6 lg:pt-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-12 text-zinc-100">
              WE SOLVE HANDS-ON <br className="hidden md:block" /> 
              <span className="text-zinc-500">AI CONSULTANTS</span> FOCUSED ON HELPING SMALL AND MID-SIZE BUSINESSES USE AUTOMATION WHERE IT MATTERS MOST. WE CUT THROUGH THE NOISE AND IMPLEMENT IT <span className="text-zinc-500">WITH NO DISRUPTION.</span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 border-t border-zinc-800 pt-8"
            >
              <div className="w-12 h-12 rounded-full relative overflow-hidden shrink-0 grayscale">
                 <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Jessica" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold tracking-widest text-sm uppercase">Jessica Burns</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Client Success Manager</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Image Cards Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 pt-12 border-t border-zinc-800">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">
                <span>{card.title}</span>
                <span>/ {idx + 1}</span>
              </div>
              <div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src={card.src} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
