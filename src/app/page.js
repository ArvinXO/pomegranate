"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Impact from "@/components/Impact";
import WorkProcess from "@/components/WorkProcess";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import About from "@/components/About";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Impact />

      <Statistics />

      <WorkProcess />

      <About />

      <Team />

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="py-32 bg-accent relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl lg:text-7xl font-serif text-foreground mb-10">
            Ready to integrate <span className="text-primary italic">real change</span>?
          </h2>
          <p className="text-2xl text-foreground/60 mb-16 max-w-2xl mx-auto font-light">
            Our specialists understand the need and process for our corporate, regional, and global clients.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/contact"
              className="px-12 py-6 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
