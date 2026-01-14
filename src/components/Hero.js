"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden persian-floral-bg">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-gold/5 blur-[150px] animate-pulse" />
                <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                            </span>
                            <span>Global Governance Consultancy</span>
                        </motion.div>

                        <h1 className="text-6xl lg:text-[7rem] font-serif text-foreground leading-[0.95] mb-10 tracking-tight">
                            A house of research that <br />
                            <span className="inline-flex items-center">
                                <motion.span
                                    initial={{ x: -20, opacity: 0.7 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block text-primary italic gold-text"
                                >
                                    inte
                                </motion.span>
                                <motion.span
                                    initial={{ x: 20, opacity: 0.7 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block text-primary italic gold-text"
                                >
                                    grates
                                </motion.span>
                            </span>{" "}
                            gender.
                        </h1>

                        <p className="text-xl lg:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-xl font-light">
                            Pomegranate House ensures gender equality is reached in every community, worldwide, using individualism, research, and philosophy.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href="/contact"
                                className="px-10 py-5 bg-primary text-white rounded-full text-center font-bold text-lg hover:bg-primary/90 transition-all duration-500 shadow-2xl shadow-primary/30 hover:scale-105 border border-gold/30"
                            >
                                Hire our specialists
                            </Link>
                            <Link
                                href="/services"
                                className="px-10 py-5 bg-white/50 backdrop-blur-sm text-primary border border-gold/20 rounded-full text-center font-bold text-lg hover:bg-accent/80 transition-all duration-500 hover:scale-105"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block relative"
                    >
                        {/* Elegant Decorative Frame */}
                        <div className="absolute -inset-4 border border-gold/20 rounded-[3.5rem] -rotate-2 pointer-events-none" />
                        <div className="absolute -inset-4 border border-primary/10 rounded-[3.5rem] rotate-1 pointer-events-none" />

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(117,3,44,0.15)] border-[12px] border-white/80 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-gold/10 mix-blend-overlay" />
                            <img
                                src="/pomhouse.png"
                                alt="Empowering Global Governance"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                            />

                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none persian-floral-bg mix-blend-soft-light" />
                        </div>

                        {/* Floating Stats Card - Premium Style */}
                        <motion.div
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-12 -left-12 z-20 bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-gold/20"
                        >
                            <div className="text-6xl font-serif gold-text mb-2">$28T</div>
                            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 text-center">Potential Global GDP Raise</div>
                            <div className="mt-4 flex justify-center space-x-1">
                                <div className="w-1 h-1 rounded-full bg-gold" />
                                <div className="w-1 h-1 rounded-full bg-gold/50" />
                                <div className="w-1 h-1 rounded-full bg-gold/20" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
