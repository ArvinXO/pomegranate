"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Database, FileText, Microscope, BarChart } from "lucide-react";

export default function ResearchPage() {
    const researchTools = [
        { title: "Quantitative Data", icon: BarChart },
        { title: "Qualitative Interviews", icon: FileText },
        { title: "Quasi-Experiments", icon: Microscope },
        { title: "Academic Theory", icon: Database },
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
                        Intellectual Rigor
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Research & <span className="text-primary italic">Methods</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/50 max-w-3xl mx-auto mb-12 font-serif italic"
                    >
                        "Using the best minds to create the most innovative concepts within research."
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
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Search size={24} />
                                </div>
                                <h2 className="text-4xl font-serif text-foreground">Our Methodology</h2>
                            </div>
                            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg">
                                <p>
                                    Our research tools are extensive, with methods of both qualitative and quantitative data collection and analysis. The unique element of Pomegranate House is our ability to provide <span className="text-primary font-bold">quasi-experiments</span> to understand the best process for each client.
                                </p>
                                <p>
                                    We provide academically sound approaches to extract data, such as appropriate survey questions, meaning the latest concepts and theories will be used. Once the project is in place, we monitor and evaluate the success of each project's development to achieve gender dividends and equality.
                                </p>
                                <div className="grid grid-cols-2 gap-6 pt-8">
                                    {researchTools.map((tool, i) => (
                                        <div key={i} className="flex items-center space-x-4 p-6 bg-accent/30 rounded-2xl border border-gold/10">
                                            <tool.icon className="text-primary" size={24} />
                                            <span className="text-sm font-bold uppercase tracking-widest">{tool.title}</span>
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
                                    <img src="/services_research_academic.webp" alt="Research Methodology" className="w-full h-auto" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-[10px] font-bold text-foreground/40 mb-10 uppercase tracking-[0.4em]">Academic Partnership</h3>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gold/10 hover:shadow-2xl transition-all duration-500 group">
                                            <div className="flex items-center justify-center mb-4">
                                                <svg className="w-20 h-20 text-red-700 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM4.5 9.59l7.5 3.41 7.5-3.41V8.18L12 11.41 4.5 8.18v1.41zM12 14.5L5 11.32v3.27l7 3.18 7-3.18v-3.27l-7 3.18z" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl font-serif text-foreground text-center">University of <span className="text-primary font-bold">Bedfordshire</span></div>
                                            <p className="text-xs text-foreground/40 mt-2 uppercase tracking-widest">Research Partner</p>
                                        </div>
                                        <p className="mt-8 text-sm text-foreground/40 italic font-light">
                                            "There are currently pilot studies being conducted, and we will be announcing further partners in due time."
                                        </p>
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
