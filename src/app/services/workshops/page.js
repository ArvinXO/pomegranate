"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee, Brain, Send, HelpCircle, HeartHandshake } from "lucide-react";

export default function WorkshopsPage() {
    const sessions = [
        {
            title: "Global Therapy",
            description: "A unique concept used to understand the self within the global context, identifying how personal misconceptions are formed.",
            icon: HeartHandshake
        },
        {
            title: "Leadership Styles",
            description: "Analyzing and adapting leadership approaches to combat bias and foster a culture of conscious inclusion.",
            icon: Brain
        },
        {
            title: "Cross-Cultural Management",
            description: "Building the necessary skills to lead diverse teams effectively across geographical and cultural borders.",
            icon: Coffee
        }
    ];

    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden persian-floral-bg">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-10"
                    >
                        Transformative Learning
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Workshops, Seminars & <span className="text-primary italic">Training</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/50 max-w-3xl mx-auto mb-12 font-serif italic"
                    >
                        "Utilizing 'global therapy' to build empathy and cross-cultural management skills."
                    </motion.p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full" />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-12"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Coffee size={24} />
                                </div>
                                <h2 className="text-4xl font-serif text-foreground">Transforming Perspectives</h2>
                            </div>
                            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg italic">
                                <p>
                                    Pomegranate House uses the idea of "global therapy" to understand the self. Our WST (Workshop, Seminar & Training) sessions are designed to dismantle deeply held misconceptions.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {sessions.map((session, i) => (
                                    <div key={i} className="flex gap-6 p-8 bg-accent/30 rounded-[2.5rem] border border-gold/10 hover:border-primary/20 transition-all duration-300 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <session.icon size={26} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-serif text-foreground mb-3">{session.title}</h4>
                                            <p className="text-sm text-foreground/50 font-light leading-relaxed">{session.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="sticky top-32 space-y-12">
                                <div className="relative rounded-[4rem] overflow-hidden shadow-3xl border-4 border-white">
                                    <img src="/services_workshops_minimal.webp" alt="Workshop Setting" className="w-full h-auto" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20" />
                                </div>

                                <Link href="/hire-us?subject=Workshop%20%26%20Training%20Enquiry&message=I%20would%20like%20to%20enquire%20about%20tailored%20workshops%20and%20training%20sessions%20for%20my%20team.">
                                    <div className="p-12 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden border border-gold/20 hover:bg-primary/90 transition-all duration-300 cursor-pointer group">
                                        <div className="absolute inset-0 opacity-10 persian-floral-bg invert" />
                                        <h3 className="text-2xl font-serif italic mb-6 relative z-10">Enquire About Training</h3>
                                        <p className="text-white/70 font-light mb-10 relative z-10">
                                            Tailored seminars and workshops for your team, focused on specific geographical or cultural needs.
                                        </p>
                                        <div className="flex gap-4 relative z-10">
                                            <div className="flex-1 bg-white/10 rounded-full px-6 py-4 border border-white/20 flex items-center space-x-3 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300">
                                                <HelpCircle size={18} className="text-gold" />
                                                <span className="text-xs uppercase tracking-widest font-bold">Ask a Question</span>
                                            </div>
                                            <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-[#110906] shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Send size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
