"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    num: "01",
    title: "CUSTOMER SERVICE",
    desc: "AI chatbots and automation workflows that handle 80% of routine inquiries, freeing your team for complex issues.",
    tags: ["#SUPPORT", "#AUTOMATION"],
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "02",
    title: "SALES",
    desc: "Predictive lead scoring and automated outreach sequences to help your sales teams focus on closing deals.",
    tags: ["#LEADGEN", "#CRM"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "03",
    title: "OPERATIONS",
    desc: "Streamline back-office tasks, inventory management, and logistics with intelligent automation tools.",
    tags: ["#EFFICIENCY", "#OPS"],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "04",
    title: "DATA ANALYTICS",
    desc: "Real-time dashboards and predictive models that turn your raw business data into actionable strategies.",
    tags: ["#DATA", "#INSIGHTS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4f4f4] text-black pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 items-start pt-8">
          <div className="w-full lg:w-1/2">
            <div className="flex mb-8">
              <span className="text-xs tracking-widest uppercase font-mono text-zinc-500 border-b border-black pb-2 px-2 inline-block">03 / SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6">
              THE FAST TRACK <br />
              TO AI SUCCESS
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-end lg:pt-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-600 mb-8 font-medium"
            >
              We provide practical AI consulting and automation services for companies that want results — not just theory. Our work is tailored, transparent, and focused on the areas of your business where AI makes a real impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 border-black text-black hover:bg-black hover:text-white rounded-none h-14">
                About us
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-black pb-4">
                <h3 className="font-bold text-lg uppercase max-w-[150px] leading-tight">{service.title}</h3>
                <span className="text-zinc-500 font-mono text-sm leading-none pt-4">/{service.num}</span>
              </div>
              <div className="aspect-[4/3] w-full bg-zinc-200 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <p className="text-sm text-zinc-600 uppercase leading-relaxed font-medium">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-zinc-400 font-mono tracking-widest border border-zinc-300 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
