"use client";

import { motion } from "framer-motion";

export default function Impact() {
    const stats = [
        {
            value: "70%",
            label: "Women's share of unpaid work globally",
            description: "Research shows that if women are properly integrated, global GDP can raise significantly."
        },
        {
            value: "1 in 3",
            label: "Women experience physical or sexual violence",
            description: "A stark reality that requires philosophical and structural change in every community."
        },
        {
            value: "$28T",
            label: "Potential GDP Growth",
            description: "Integrating women into society can raise global GDP between $12 trillion to $28 trillion."
        }
    ];

    return (
        <section className="py-24 bg-accent/30 relative overflow-hidden">
            {/* Decorative Pomegranate Shape */}
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                    >
                        Our Impact & The <span className="text-primary italic">Reality</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center"
                        >
                            <div className="text-6xl font-serif text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                                {stat.label}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center max-w-3xl mx-auto p-12 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
                    <p className="text-2xl font-serif italic mb-6">
                        "Pomegranate House is here to change how women are perceived."
                    </p>
                    <div className="text-sm uppercase tracking-[0.2em] font-bold text-secondary">A House of Research</div>
                </motion.div>
            </div>
        </section>
    );
}
