"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
    const team = [
        {
            name: "Hana Mosavie",
            role: "Founder",
            image: "/Hana_Mosavie.webp"
        },
        {
            name: "Professor Adrian Kendry",
            role: "Economic Specialist",
            image: "/Professor Adrian Kendry.webp"
        },
        {
            name: "Vibeke Brask Thomsen",
            role: "Gender Specialist",
            image: "/Vibeke Brask Thomsen.webp"
        },
        {
            name: "Robert Hester",
            role: "Consumer Goods Specialist",
            image: "/Robert Hester.webp"
        },
        {
            name: "Dr. Aamenah Hawash",
            role: "Health Specialist",
            image: "/Dr. Aamenah Hawash.webp"
        }
    ];

    return (
        <section className="py-32 bg-cream relative overflow-hidden persian-floral-bg">
            {/* Decorative Gold Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                    >
                        Our <span className="text-primary italic">Team</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/60 max-w-2xl mx-auto mb-6"
                    >
                        Like seeds within a pomegranate, each specialist brings unique expertise to create meaningful change
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full"
                    />
                </div>

                {/* Pomegranate Seed Layout */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Center founder - larger seed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="group relative">
                            {/* Gold rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 rounded-full border border-gold/20 border-dashed"
                            />
                            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold shadow-[0_20px_50px_rgba(117,3,44,0.15)] relative bg-accent group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={team[0].image}
                                    alt={team[0].name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-full">
                                <h3 className="text-2xl font-serif text-primary mb-1">{team[0].name}</h3>
                                <p className="text-sm uppercase tracking-wider text-foreground/60 font-bold">{team[0].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Surrounding team members - smaller seeds arranged in arc */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 items-start justify-items-center">
                        {team.slice(1).map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.5 + idx * 0.15,
                                    type: "spring",
                                    bounce: 0.5
                                }}
                                className="group relative"
                            >
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl relative bg-accent group-hover:scale-105 group-hover:border-primary transition-all duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-56">
                                    <h3 className="text-lg font-serif text-foreground mb-1">{member.name}</h3>
                                    <p className="text-xs uppercase tracking-wider text-foreground/60 font-bold">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="mt-32 text-center"
                >
                    <p className="text-lg font-serif text-primary/60 italic mb-8">
                        Together, we form the complete fruit of change
                    </p>
                    <motion.a
                        href="/about"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.4 }}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all duration-500 shadow-2xl shadow-primary/30 hover:scale-105 border border-gold/30 group"
                    >
                        <span>Learn More About Our Team</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
