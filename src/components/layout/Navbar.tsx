"use client";

import { useState } from "react";
import Link from "next/link";
import { Copyleft as EfficaLogo } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <EfficaLogo className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-xl tracking-tighter">Effica&deg;</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#how-we-work" className="hover:text-primary/70 transition-colors">How We Work</Link>
          <Link href="#services" className="hover:text-primary/70 transition-colors">Services</Link>
          <Link href="#results" className="hover:text-primary/70 transition-colors">Results</Link>
          <Button variant="default" size="sm" className="hidden lg:inline-flex">
            Get template
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-sm font-medium tracking-widest uppercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "+ Menu"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4 text-center">
          <Link href="#how-we-work" onClick={() => setIsOpen(false)} className="py-2 hover:bg-muted rounded-md">How We Work</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="py-2 hover:bg-muted rounded-md">Services</Link>
          <Link href="#results" onClick={() => setIsOpen(false)} className="py-2 hover:bg-muted rounded-md">Results</Link>
          <Button variant="default" className="w-full mt-4">
            Get template
          </Button>
        </div>
      )}
    </nav>
  );
}
