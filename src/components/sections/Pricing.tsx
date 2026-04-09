"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "PRO",
    price: "$ 1990",
    period: "MONTHLY",
    desc: "THE CLEAR PATH TO A FULL SCALE PLAN",
    features: [
      "AI APPLICATION PLAN",
      "IMPLEMENTATION OF 1 AUTOMATION",
      "POST SETUP CHECKLIST",
      "EMAIL SUPPORT FOR 30 DAYS",
    ],
    cta: "GET STARTED"
  },
  {
    name: "ENTERPRISE",
    price: "$ 450",
    period: "MONTHLY",
    desc: "ON-GOING AI SUPPORT & MORE",
    features: [
      "FULL AI STRATEGY",
      "TECHNICAL IMPLEMENTATION",
      "MAINTENANCE & OPTIMIZATION",
      "DEDICATED MANAGER",
      "24/7 SUPPORT",
    ],
    cta: "GET STARTED"
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 flex flex-col pt-8">
          <div className="flex mb-8">
            <span className="text-[10px] tracking-widest uppercase font-mono text-zinc-500 border-b border-zinc-800 pb-2 px-2 inline-block">06 / WHY US</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1]">
            PRICING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 w-full">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-between border border-zinc-800 bg-zinc-900 overflow-hidden"
            >
              {/* Colorful blob overlay inside the card */}
              {idx === 0 && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />
              )}
              {idx === 1 && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="flex flex-col mb-16 border-b border-zinc-800 pb-16">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2 text-zinc-300">{plan.name}</h3>
                  <div className="mt-4 flex items-end gap-2 mb-2">
                    <span className="text-5xl md:text-7xl font-black">{plan.price}</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-widest font-mono pb-2">/ {plan.period}</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                    {plan.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-6 mb-16">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex gap-4 items-center border-b border-zinc-800/50 pb-4">
                      <span className="text-zinc-600 text-sm">--</span>
                      <span className="text-xs text-zinc-300 uppercase tracking-widest font-mono leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <Button size="lg" className="w-full bg-white text-black hover:bg-zinc-200 uppercase tracking-widest font-bold text-sm rounded-none h-14">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
