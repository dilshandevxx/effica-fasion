"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    num: "01/",
    title: "Understand your workflow — no jargon, just clear analysis",
  },
  {
    num: "02/",
    title: "Spot automation opportunities — specific, relevant use cases",
  },
  {
    num: "03/",
    title: "We handle integration and ensure smooth operation.",
  },
  {
    num: "04/",
    title: "Implement & optimize — we handle setup & integration",
  },
];

export function Process() {
  return (
    <section className="py-24 border-b border-border bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <SectionHeading subtitle="05 How We Do It">
              THE FAST TRACK <br />
              <span className="text-white">TO AI SUCCESS</span>
            </SectionHeading>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mt-6 text-lg"
            >
              No generic advice. No complex dashboards. Just practical improvements.
            </motion.p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-background p-8 md:p-12 min-h-[240px] flex flex-col justify-between group hover:bg-zinc-900 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-4xl md:text-5xl font-bold font-mono tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">
                      {step.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  </div>
                  <p className="font-bold text-sm tracking-widest uppercase mt-8 text-muted-foreground group-hover:text-foreground transition-colors">
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-4 border-zinc-900 flex shrink-0 relative overflow-hidden">
                   {/* fake pie chart */}
                   <div className="absolute inset-0 bg-primary" />
                   <div className="absolute top-0 right-0 w-8 h-16 bg-zinc-700" />
                </div>
                <p className="text-xs uppercase tracking-widest font-bold">
                  On average, our clients reduce manual <br />
                  work <span className="text-primary">by 35% in the first month.</span>
                </p>
              </div>

              <Button variant="outline" className="w-full sm:w-auto mt-4 sm:mt-0 font-bold tracking-widest group border-border/50">
                START AI JOURNEY
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
