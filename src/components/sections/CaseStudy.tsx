"use client";

import { motion } from "framer-motion";
import { Copyleft as EfficaLogo } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CaseStudy() {
  return (
    <section id="results" className="py-24 border-b border-border bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border-y border-border/40 bg-border/40 mb-16">
          {/* Left Column */}
          <div className="bg-zinc-950 p-8 md:p-16 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
                06 Results
              </p>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">CASE STUDY</h2>
              <p className="text-lg text-muted-foreground font-medium mb-12 max-w-sm">
                LocalRent Co. partnered with Effica to streamline order intake and customer support across 18 locations.
              </p>
              
              <div className="flex flex-col gap-4 border-t border-border/40 pt-8">
                <div className="flex justify-between items-center text-sm uppercase tracking-widest font-mono text-muted-foreground pb-4 border-b border-border/40">
                  <span>Date:</span>
                  <span className="text-foreground">Mar 2025</span>
                </div>
                <div className="flex justify-between items-center text-sm uppercase tracking-widest font-mono text-muted-foreground pb-4 border-b border-border/40">
                  <span>Industry:</span>
                  <span className="text-foreground text-right">Retail & E-commerce</span>
                </div>
                <div className="flex justify-between items-center text-sm uppercase tracking-widest font-mono text-muted-foreground pb-4">
                  <span>Challenge:</span>
                  <span className="text-foreground text-right w-1/2">Manual order management & customer support delays</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <Button variant="link" className="px-0 uppercase tracking-widest font-bold text-xs h-auto py-2 flex items-center gap-2 text-foreground hover:text-primary">
                Read the full story <span className="text-primary text-base">&rarr;</span>
              </Button>
            </div>
          </div>

          {/* Right Column (Quote) */}
          <div className="bg-zinc-900 p-8 md:p-16 relative overflow-hidden flex flex-col justify-between group">
            {/* Background texture/image placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888048684-245ed72a3928?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-900 to-transparent" />
            
            <div className="relative z-10 flex justify-between items-start mb-12">
              <span className="text-7xl pt-4 text-white font-serif leading-none opacity-50">&ldquo;</span>
              <EfficaLogo className="w-8 h-8 opacity-50" />
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-12"
              >
                <span className="text-white/40">THEY DIDN&apos;T OVERWHELM US WITH JARGON OR ENDLESS OPTIONS.</span> JUST A CLEAR PLAN, EXECUTED QUICKLY. WE SAW MEASURABLE RESULTS IN THE FIRST MONTH.
              </motion.h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700" />
                <div>
                  <p className="font-bold tracking-widest text-sm uppercase">Andrew W.</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CEO of LocalRent Co.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border-y border-border/40 py-px text-center">
          <div className="bg-zinc-950 p-12 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Hours saved <br/>monthly</span>
            <span className="text-6xl md:text-7xl font-black">50+</span>
          </div>
          <div className="bg-zinc-950 p-12 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Increase in <br/>retention</span>
            <span className="text-6xl md:text-7xl font-black">+15%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
