"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-24 bg-accent/30 relative overflow-hidden">
            {/* Decorative Pomegranate Shape */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                    >
                        Who We Are & Why We Can <span className="text-primary italic">Change This</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full"
                    />
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-foreground/80 leading-relaxed text-center"
                    >
                        Pomegranate House is a <span className="font-semibold text-primary">multi-faceted organisation</span>, with a unique approach of consultancy that dives into the layers of gender misconception, globally, nationally and locally. Examining the cultural reasoning in every client's setting, making women truly integrated without being disruptive.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-12 bg-white rounded-[2.5rem] shadow-sm border border-accent"
                    >
                        <p className="text-2xl font-serif text-foreground text-center leading-relaxed">
                            Research shows that if women are properly integrated into society, global GDP can raise between{" "}
                            <span className="text-primary font-bold">$12 trillion to $28 trillion</span>.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-foreground/80 leading-relaxed text-center"
                    >
                        Pomegranate House focuses on <span className="font-semibold text-primary">gender dividends</span> through the prism of research, individualism and philosophy. Within these three prisms, cultural identity, tradition, academic theories mixed with secondary and primary research will be conducted to get to the root of the cause for every client.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-foreground/80 leading-relaxed text-center"
                    >
                        Our specialists understand the need and process for our corporate, regional, and global clients.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 text-center max-w-3xl mx-auto p-12 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
                        <p className="text-2xl font-serif italic mb-6 relative z-10">
                            "Pomegranate House is here to change how women are perceived."
                        </p>
                        <Link
                            href="/impact"
                            className="relative z-10 inline-block px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:scale-105"
                        >
                            Visit Our Impact Page
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
