"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full bg-[#111111] text-white flex flex-col justify-center overflow-hidden pt-24 md:pt-32 pb-16">
      
      {/* Background Image / Portrait */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] z-0 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10 h-full" />
        {/* We use a colorful/profile placeholder here */}
        <Image 
          src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80" 
          alt="AI Portrait" 
          fill 
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 mix-blend-color z-10 bg-gradient-to-tr from-purple-500/20 to-orange-500/20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col h-full w-full justify-between">
        
        {/* Top specific small nav/metadata area seen in template */}
        <div className="hidden md:flex justify-between items-start w-full mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-1 text-xs uppercase tracking-widest font-mono text-zinc-400"
          >
            <span>EFFICA TEMPLATE</span>
            <span className="text-white">FOR FRAMER / 2025</span>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col max-w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[4rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] font-black tracking-tighter uppercase leading-[0.85] text-white -ml-1 md:-ml-2 mix-blend-difference"
          >
            A CLEAR <br className="hidden md:block"/> AI PLAN
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 md:mt-8 ml-1 md:ml-4 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-zinc-300">
              FOR YOUR BUSINESS
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-sm uppercase tracking-widest font-mono">
              / WE HELP BUSINESSES APPLY AI WHERE IT MATTERS.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-24 md:mt-32 flex flex-col md:flex-row items-stretch md:items-center gap-4 max-w-3xl"
        >
          <Button size="lg" className="h-16 px-8 text-sm md:text-base tracking-widest uppercase font-bold bg-[#111111] hover:bg-zinc-800 text-white border border-zinc-800 flex-1 rounded-none">
            BOOK STRATEGY SESSION
          </Button>
          <Button variant="outline" size="lg" className="h-16 px-8 text-sm md:text-base tracking-widest uppercase font-bold bg-white text-black hover:bg-gray-100 flex-1 rounded-none border-0">
            START FOR FREE
          </Button>
          
          {/* Avatar group block */}
          <div className="flex items-center gap-4 bg-zinc-900 h-16 px-6 border border-zinc-800">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 border-background" />
              <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 border-background" />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 text-[10px] text-yellow-500">★★★★★</div>
              <span className="text-[10px] tracking-widest uppercase font-mono text-zinc-400">4.9/5 RATING</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
