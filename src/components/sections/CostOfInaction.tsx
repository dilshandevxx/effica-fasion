"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "01/ Operational Tasks", title: "STAY MANUAL", value: "+33%", desc: "handling" },
  { label: "02/ Competitors", title: "MOVE FASTER", value: "+50%", desc: "growth" },
  { label: "03/ Missed", title: "AUTOMATION OPPORTUNITIES", value: "+66%", desc: "opportunities" },
  { label: "04/ Time wasted on", title: "REPETITIVE WORK", value: "+32%", desc: "/time" },
];

export function CostOfInaction() {
  return (
    <section className="py-24 border-b border-border bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-700" />
            Why delay hurts
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter"
          >
            THE LONGER YOU WAIT, <br />
            THE MORE EXPENSIVE IT <br />
            BECOMES <span className="text-muted-foreground">TO CATCH UP.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-px bg-border/40 border-y border-border/40 py-px">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 bg-background group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 lg:w-1/2">
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest whitespace-nowrap">
                  {stat.label}
                </span>
                <span className="font-bold text-lg uppercase tracking-widest group-hover:text-primary transition-colors">
                  {stat.title}
                </span>
              </div>
              
              <div className="flex items-center w-full md:w-1/2 mt-4 md:mt-0 gap-4">
                <div className="h-px bg-border flex-1 relative hidden md:block">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                    className="absolute inset-0 bg-white" 
                  />
                </div>
                <div className="bg-white text-black font-black text-xl px-6 py-3 rounded-full shrink-0 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono hidden lg:block shrink-0 min-w-[100px] text-right">
                  {stat.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
