"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Brain, Landmark, Users } from "lucide-react";

export default function GenderAtWorkPage() {
    const focusAreas = [
        {
            title: "Generational Norms",
            description: "Understanding how inherited beliefs shape contemporary corporate culture.",
            icon: Landmark
        },
        {
            title: "Unconscious Bias",
            description: "Deep-dive analysis of the hidden biases that affect recruitment and promotion.",
            icon: Brain
        },
        {
            title: "Conscious Inclusion",
            description: "Strategic tools to actively integrate gender parity into the organizational DNA.",
            icon: Sparkles
        },
        {
            title: "Cultural Mapping",
            description: "Examining the unique cultural reasoning of every client's geographical setting.",
            icon: Users
        }
    ];

    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden persian-floral-bg">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-10"
                    >
                        Cultural Intelligence
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Gender Dividend & <span className="text-primary italic">Culture</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/50 max-w-3xl mx-auto mb-12 font-serif italic"
                    >
                        "Understanding the layers of unconscious bias to create truly integrated societies."
                    </motion.p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full" />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-10"
                        >
                            <h2 className="text-4xl font-serif text-foreground mb-8">Culture and the Unconscious Bias</h2>
                            <p className="text-xl text-foreground/60 leading-relaxed font-light italic mb-8">
                                Our main focus is through understanding our unconscious bias towards any group. We understand that the development of society and corporate organisations means generational norms may be integrated.
                            </p>
                            <div className="space-y-8">
                                <p className="text-foreground/70 font-light leading-relaxed">
                                    We look to ensure we eliminate gendered, cultural or any other unconscious bias. We assess the clients internal and external policies, processes and ways of working to ensure we understand the level of change needed.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {focusAreas.map((area, i) => (
                                        <div key={i} className="p-6 bg-accent/30 rounded-[2rem] border border-gold/10 hover:border-primary/20 transition-all duration-300 group">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                <area.icon size={20} />
                                            </div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">{area.title}</h4>
                                            <p className="text-xs text-foreground/50 font-light">{area.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="sticky top-32 space-y-16">
                                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
                                    <img src="/services_gender_culture.webp" alt="Gender and Culture" className="w-full h-auto" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                                </div>

                                <div>
                                    <h3 className="text-[10px] font-bold text-foreground/40 mb-10 text-center uppercase tracking-[0.4em]">Strategic Partners in Gender</h3>
                                    <div className="grid grid-cols-2 gap-8 items-center">
                                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gold/10 flex items-center justify-center">
                                            <img src="/partner_nawo.webp" alt="NAWO" className="h-12 w-auto grayscale contrast-125" />
                                        </div>
                                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gold/10 flex flex-col items-center">
                                            <div className="text-xl font-bold tracking-tighter text-teal-600">SHECAN</div>
                                            <div className="text-[8px] uppercase tracking-widest text-foreground/40 mt-1">Redefining Leadership</div>
                                        </div>
                                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gold/10 flex items-center justify-center">
                                            <div className="text-2xl font-black text-blue-900">epic</div>
                                            <div className="text-[10px] ml-1 font-light italic">assist</div>
                                        </div>
                                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gold/10 flex flex-col items-center">
                                            <div className="text-sm font-bold text-black border-b-2 border-black pb-1">Kingston University</div>
                                            <div className="text-[8px] uppercase tracking-widest text-foreground/40 mt-1">London</div>
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
