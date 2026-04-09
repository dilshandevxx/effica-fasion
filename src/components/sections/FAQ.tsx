"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Do I need to know anything about AI to get started?",
    answer: "No. Our process is built for business owners and teams who have no technical background. We explain every step in plain language and handle all technical setup and integration for you.",
  },
  {
    question: "How much does the service cost, and what is included?",
    answer: "We offer transparent pricing tiers based on your needs. Check out our Pricing section for detailed plans. Custom enterprise requirements are priced individually.",
  },
  {
    question: "What if I don't have a technical team or any technical knowledge?",
    answer: "That's exactly why we exist. We act as your fractional Technical AI team, implementing and maintaining these systems so you don't have to.",
  },
  {
    question: "What happens if I want to cancel the subscription?",
    answer: "You can cancel monthly subscriptions at any time. Annual subscriptions are billed upfront with a 20% discount. You retain ownership of the data generated.",
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer: "We work closely with you during the implementation phase to ensure the automation hits your exact requirements. We iterate until the process is optimal.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 border-b border-border bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <SectionHeading subtitle="08 Help & Info">
              <span className="text-white">FAQ</span>
            </SectionHeading>
            
            <div className="mt-20 pt-8 border-t border-border/40">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">STILL UNSURE?</h3>
              <p className="text-muted-foreground mb-8">
                My role is to make sure every client feels supported from day one.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-background" />
                <div>
                  <p className="font-bold tracking-widest text-sm uppercase">Jessica Burns</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Client Success Manager</p>
                </div>
              </div>
              
              <button className="text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors w-full flex justify-between items-center">
                Ask a question <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-background">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900 transition-colors"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-xl ml-4 shrink-0 transition-transform duration-300 transform font-light">
                      {openIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-sm text-muted-foreground uppercase tracking-widest font-mono leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
