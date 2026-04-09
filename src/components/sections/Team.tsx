"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Carter",
    role: "AI Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Emma Lee",
    role: "Process Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Noah Kim",
    role: "Data Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sophia Martinez",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

export function Team() {
  return (
    <>
      {/* Start Smart Section (Dark Theme) */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* The portrait image Placeholder (Left) */}
            <div className="w-full md:w-1/2 flex justify-start">
              <div className="w-full max-w-[500px] aspect-[4/5] bg-zinc-900 overflow-hidden grayscale relative">
                 <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Start smart" fill className="object-cover" />
                 <div className="absolute inset-0 bg-black/10 z-10 mix-blend-overlay" />
              </div>
            </div>

            {/* Text Area (Right) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex mb-8">
                <span className="text-[10px] tracking-widest uppercase font-mono text-zinc-500 border-b border-zinc-800 pb-2 px-2 inline-block">04 / THE SYSTEM</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6">
                START SMART, <br />
                START SMALL
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-sm">
                Pick one routine task. We'll automate it end-to-end and keep everything else unchanged.
              </p>
              
              <Button size="lg" className="h-16 px-8 text-sm md:text-base tracking-widest uppercase font-bold bg-white text-black hover:bg-zinc-200 border-0 self-start rounded-none">
                OUR METHODOLOGY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section (Light Theme) */}
      <section className="py-24 bg-white text-black border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col mb-16">
            <div className="flex mb-8">
              <span className="text-[10px] tracking-widest uppercase font-mono text-zinc-500 border-b border-black pb-2 px-2 inline-block">05 / THE TEAM</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6">
              THE TEAM
            </h2>
          </div>

          {/* 4 Portrait Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-4 pb-2 border-b border-black/20">
                  <span>{member.role}</span>
                  <span>/{idx + 1}</span>
                </div>
                
                <div className="aspect-[3/4] bg-zinc-200 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-black">{member.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Marquee or extra decoration beneath, mentioned in template description */}
          <div className="mt-32 border-t border-b border-black/10 py-8 overflow-hidden relative flex items-center bg-[#f4f4f4]">
            <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 20, repeat: Infinity }}
               className="flex whitespace-nowrap gap-16 font-bold text-4xl opacity-10"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i}>EXPERTISE MATTERS. </span>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
