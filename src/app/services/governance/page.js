"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Globe2, Landmark, Laptop, Scaling } from "lucide-react";

export default function GovernancePage() {
    const governanceLevels = [
        { title: "Global Governance", icon: Globe2 },
        { title: "Regional Governance", icon: Scaling },
        { title: "National Governance", icon: Landmark },
        { title: "Corporate Governance", icon: Shield },
        { title: "Local & Municipal Governance", icon: Users },
        { title: "Technological Governance", icon: Laptop },
    ];

    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden persian-floral-bg">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-10"
                    >
                        Structural Integrity
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Gaps of <span className="text-primary italic">Governance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/50 max-w-2xl mx-auto mb-12 font-serif italic"
                    >
                        "Decolonising systems to create gender-just outcomes at every level."
                    </motion.p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full" />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-12"
                        >
                            <div>
                                <h2 className="text-4xl font-serif text-foreground mb-8">How We Decolonise Governance</h2>
                                <p className="text-xl text-foreground/60 leading-relaxed font-light mb-8 italic">
                                    Governance systems shape how power flows, who gets heard, and whose needs are prioritised. Across every layer, unconscious bias and colonial legacies continue to distort efforts toward gender equality.
                                </p>
                                <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
                                    <p>At Pomegranate House, we identify and address governance gaps that undermine gender-just outcomes. Our analysis spans multiple levels:</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Global Governance",
                                            "Regional Governance",
                                            "National Governance",
                                            "Corporate Governance",
                                            "Local & Municipal Governance",
                                            "Technological Governance"
                                        ].map((level, i) => (
                                            <div key={i} className="flex items-center space-x-3 p-4 bg-accent/30 rounded-2xl border border-gold/10">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span className="text-sm font-bold uppercase tracking-wider">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-accent/20 rounded-[3rem] border border-gold/20 shadow-inner">
                                <p className="text-lg text-foreground/70 font-light leading-relaxed italic">
                                    "Rather than impose universal models, we work with institutions to recognise their contextual blind spots, understand how power and data interact, and design culturally-attuned frameworks rooted in equity."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="sticky top-32 space-y-12">
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-square">
                                    <img src="/services_governance_orb.webp" alt="Governance Orb" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-[10px] font-bold text-foreground/40 mb-8 uppercase tracking-[0.4em]">Our Partners in Governance</h3>
                                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10 hover:shadow-xl transition-all duration-300">
                                            <img src="/partner_gdf.webp" alt="Global Diplomatic Forum" className="h-16 w-auto grayscale contrast-125" />
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10 hover:shadow-xl transition-all duration-300">
                                            <div className="text-2xl font-black text-[#0066ff] tracking-tighter italic">gsmarthub</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

const Users = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
