"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#f4f4f4] text-black pt-32 pb-8 overflow-hidden relative">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-300 via-purple-300 to-orange-300 rounded-full blur-[120px] opacity-40 z-0 mix-blend-multiply" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        
        {/* Contact Intro CTA */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-6 font-bold">READY TO START?</p>
          <a href="#" className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">
            GET IN TOUCH 
            <span className="inline-block ml-4 -translate-y-2 md:-translate-y-4">
              <span className="w-12 h-12 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl md:text-4xl">&rarr;</span>
            </span>
          </a>
        </div>

        {/* Giant Logo */}
        <div className="w-full flex justify-center mb-24 cursor-default">
          <span className="text-[15vw] font-black uppercase tracking-tighter leading-none select-none text-black">
            EFFICA.
          </span>
        </div>

        {/* Footer Links grid */}
        <div className="w-full border-t border-black/10 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col items-start gap-4">
             <span className="font-bold text-2xl tracking-tighter uppercase mb-4">Effica</span>
             <p className="text-zinc-600 text-sm max-w-[200px]">
               We help businesses apply AI where it actually matters — without the noise.
             </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Company</h4>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">About us</Link>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">Case Studies</Link>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">News</Link>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Connect</h4>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">LinkedIn</Link>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">Twitter</Link>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">Instagram</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Legal</h4>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">Privacy Policy</Link>
            <Link href="#" className="hover:text-black text-zinc-600 text-sm font-bold uppercase tracking-tight">Terms of Service</Link>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 font-mono tracking-widest uppercase pb-4">
          <p>&copy; {new Date().getFullYear()} EFFICA STUDIO</p>
          <p className="mt-4 md:mt-0">ALL RIGHTS RESERVED</p>
        </div>

      </div>
    </footer>
  );
}
