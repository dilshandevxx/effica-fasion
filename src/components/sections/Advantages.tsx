"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Advantages() {
  const advantages = [
    { title: "CLEAR, ACTIONABLE", highlight: "STRATEGY" },
    { title: "PROVEN", highlight: "AI FRAMEWORKS" },
    { title: "HANDS-ON", highlight: "IMPLEMENTATION" },
    { title: "TRANSPARENT", highlight: "COSTS" },
  ];

  return (
    <section className="py-24 bg-white text-black border-zinc-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-start mt-8">
          {/* Left: Heading */}
          <div className="w-full lg:w-1/2">
            <div className="flex mb-8">
              <span className="text-xs tracking-widest uppercase font-mono text-zinc-500 border-b border-black pb-2 px-2 inline-block">02 / WHY US</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6">
              WHY COMPANIES <br />
              CHOOSE EFFICA
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-zinc-600 mt-6 text-lg max-w-md font-medium"
            >
              We make AI adoption simple, strategic, and measurable.
            </motion.p>
          </div>
          
          {/* Right: List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end pt-[100px]">
             {/* Note: The list items usually don't have a header in the template like "OUR ADVANTAGES INCLUDE:" in the template screenshot it's just the list items. Let's just render the list */}
            <div className="flex flex-col border-t border-black">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-6 py-8 border-b border-black"
                >
                  <span className="text-xl font-bold font-mono">{(idx + 1).toString().padStart(2, "0")}</span>
                  <p className="font-medium uppercase text-xl md:text-2xl">
                    {adv.title} <span className="font-bold">{adv.highlight}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats and Phone section - "YOUR AI, EVERYWHERE" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#f8f8f8] rounded-none py-16 md:py-24 px-8 md:px-16 overflow-hidden relative border border-zinc-200">
          
          {/* Left Stats Block */}
          <div className="flex flex-col gap-12 relative z-10 justify-center">
            <div className="flex flex-wrap gap-8 items-center border-b border-black/10 pb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-4xl md:text-5xl font-black">3x</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 font-medium font-mono">Faster Approvals</p>
              </motion.div>
              <div className="h-12 w-[1px] bg-black/10 mx-2" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <p className="text-4xl md:text-5xl font-black">99.5%</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 font-medium font-mono">Uptime</p>
              </motion.div>
              <div className="h-12 w-[1px] bg-black/10 mx-2 hidden sm:block" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <p className="text-4xl md:text-5xl font-black">+28%</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 font-medium font-mono">Faster Responses</p>
              </motion.div>
            </div>

            <div className="mt-4">
              <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6 font-mono">
                <span className="w-2 h-2 rounded-full bg-black" />
                Real-Time AI Control
              </span>
              <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6 leading-none">
                YOUR AI, <br /> EVERYWHERE
              </h3>
              <p className="text-zinc-600 max-w-sm text-sm">
                Run your business smarter — track performance, approve automations, and get instant insights right from your phone.
              </p>
            </div>
          </div>

          {/* Right Phone Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center relative z-0 mt-8 lg:mt-0"
          >
            {/* Colorful blurred mesh blob */}
            <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-orange-400 opacity-60 z-0 mix-blend-multiply" />
            <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] bg-gradient-to-tr from-pink-400 to-yellow-300 opacity-70 z-0 mix-blend-multiply right-10 bottom-10" />

            {/* Phone Silhouette placeholder */}
            <div className="w-[200px] md:w-[260px] h-[400px] md:h-[500px] bg-black border-[6px] border-zinc-900 rounded-[3rem] shadow-2xl relative z-10">
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center mt-2 z-20">
                <div className="w-16 h-4 bg-zinc-800 rounded-full" />
              </div>
              <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] flex items-center justify-center p-2 relative overflow-hidden">
                <div className="w-full h-full border border-zinc-800 rounded-[2rem] bg-zinc-900 relative overflow-hidden">
                   <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="App interface" fill className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
