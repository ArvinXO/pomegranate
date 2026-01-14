"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-secondary/10 blur-[120px] animate-pulse" />
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span>Global Governance Consultancy</span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-serif text-foreground leading-[1.05] mb-8">
                            A house of research that{" "}
                            <span className="inline-flex items-center">
                                <motion.span
                                    initial={{ x: -20, opacity: 0.7 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 1,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block text-primary italic"
                                >
                                    inte
                                </motion.span>
                                <motion.span
                                    initial={{ x: 20, opacity: 0.7 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 1,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block text-primary italic"
                                >
                                    grates
                                </motion.span>
                            </span>{" "}
                            gender.
                        </h1>

                        <p className="text-lg lg:text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl">
                            Pomegranate House ensures gender equality is reached in every community, worldwide, using individualism, research, and philosophy.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-primary text-white rounded-full text-center font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-105"
                            >
                                Hire us
                            </Link>
                            <Link
                                href="/services"
                                className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-full text-center font-bold text-lg hover:bg-accent/50 transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        {/* Elegant Image Placeholder / Abstract Graphic */}
                        <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 mix-blend-overlay" />
                            <img
                                src="/pomhouse.png"
                                alt="Empowering Global Governance"
                                className="w-full h-full object-cover grayscale-[10%] sepia-[5%] hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-[2rem]"
                        >
                            <div className="text-5xl font-serif text-primary mb-1">$28T</div>
                            <div className="text-xs uppercase tracking-[0.2em] font-bold text-muted">Potential Global GDP Raise</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
