"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function ConsultancyPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 relative overflow-hidden persian-floral-bg">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-10"
                    >
                        Foundation of Success
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Consultancy & <span className="text-primary italic">Care Package</span>
                    </motion.h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary rounded-full" />
                </div>
            </section>

            {/* Consultation Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] -rotate-3" />
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img src="/services_meeting.webp" alt="Consultation" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Users size={24} />
                                </div>
                                <h2 className="text-4xl font-serif text-foreground">Consultation</h2>
                            </div>
                            <p className="text-xl text-foreground/60 leading-relaxed font-light mb-8 italic">
                                Each project goes through a rigorous three-step plan: brief analysis, deep-dive research, and strategic implementation.
                            </p>
                            <div className="space-y-6 text-foreground/70 font-light mb-10">
                                <p>We don't just provide answers; we ask the right questions to uncover structural bottlenecks:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Is there a change that needs to be made but unsure which part?",
                                        "Have you established a need for change regarding your governance structure?",
                                        "Is there a gendered issue or a diversity element that needs re-examining?",
                                    ].map((q, i) => (
                                        <li key={i} className="flex items-start space-x-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="/hire-us"
                                className="inline-flex items-center space-x-4 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:scale-105"
                            >
                                <span>Get in Touch</span>
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Care Package Section */}
            <section id="care-package" className="py-24 bg-cream relative overflow-hidden persian-floral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-4 border border-gold/20 rounded-[3rem] rotate-3" />
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img src="/services_care_package.webp" alt="Care Package" className="w-full h-auto" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                    <ShieldCheck size={24} />
                                </div>
                                <h2 className="text-4xl font-serif text-foreground">Care Package</h2>
                            </div>
                            <p className="text-xl text-foreground/60 leading-relaxed font-light mb-8 italic">
                                Ensuring that progress is not just achieved, but sustained and monitored for lasting transformation.
                            </p>
                            <div className="space-y-6 text-foreground/70 font-light mb-10">
                                <p>The Care Package provides a robust framework for oversight and continuous improvement:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Long-term monitoring and evaluation of success metrics.",
                                        "Compliance and accountability elements to maintain equality standards.",
                                        "Comparison of effectiveness across different demographics.",
                                        "Identifying and addressing areas resistant to structural change.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-4">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm text-foreground/40 italic font-light">
                                *This service ensures each project stays on track and thrives beyond initial implementation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
