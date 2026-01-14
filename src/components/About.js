"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold opacity-50">
        <path d="M12 2C12 2 12 10 2 12C12 14 12 22 12 22C12 22 12 14 22 12C12 10 12 2 12 2Z" fill="currentColor" />
    </svg>
);

export default function About() {
    return (
        <section className="py-32 bg-cream relative overflow-hidden persian-floral-bg">
            {/* Decorative Gold Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-6"
                    >
                        <LeafIcon />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Who We Are & Why We Can <span className="text-primary italic">Change This</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full"
                    />
                </div>

                <div className="max-w-5xl mx-auto space-y-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl text-foreground/80 leading-relaxed text-center font-light"
                    >
                        Pomegranate House is a <span className="font-semibold text-primary">multi-faceted organisation</span>, with a unique approach of consultancy that dives into the layers of gender misconception, globally, nationally and locally. Examining the cultural reasoning in every client's setting, making women truly integrated without being disruptive.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-16 bg-white/80 backdrop-blur-md rounded-[4rem] shadow-2xl shadow-primary/5 border border-gold/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                        <p className="text-3xl font-serif text-foreground text-center leading-relaxed">
                            Research shows that if women are properly integrated into society, global GDP can raise between{" "}
                            <span className="gold-text font-bold">$12 trillion to $28 trillion</span>.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 pt-12">
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-foreground/70 leading-relaxed font-light"
                        >
                            Pomegranate House focuses on <span className="font-semibold text-primary">gender dividends</span> through the prism of research, individualism and philosophy. Within these three prisms, cultural identity, tradition, academic theories mixed with secondary and primary research will be conducted to get to the root of the cause for every client.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-foreground/70 leading-relaxed font-light"
                        >
                            Our specialists understand the need and process for our corporate, regional, and global clients. We bridge the gap between tradition and modernization, ensuring that progress is sustainable and culturally resonant.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-24 text-center max-w-4xl mx-auto p-16 bg-white rounded-[4rem] text-foreground shadow-2xl relative overflow-hidden border border-gold/20"
                    >
                        <div className="absolute inset-0 opacity-[0.03] persian-floral-bg" />

                        <div className="relative z-10">
                            <p className="text-3xl font-serif italic mb-10 text-primary">
                                "Pomegranate House is here to change how women are perceived."
                            </p>
                            <Link
                                href="/impact"
                                className="inline-block px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-105 border border-gold/30"
                            >
                                Visit Our Impact Page
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
