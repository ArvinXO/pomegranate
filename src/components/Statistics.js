"use client";

import { motion } from "framer-motion";

export default function Statistics() {
    const stats = [
        {
            value: "~60%",
            label: "Female Graduates Globally",
            description: "Women now constitute the majority of higher education graduates in most regions worldwide."
        },
        {
            value: "31.5%",
            label: "Global Gender Gap Remains",
            description: "Despite progress, significant inequality persists across economic, political, and social dimensions."
        },
        {
            value: "4.3 vs 1.6",
            label: "Hours of Unpaid Work Daily",
            description: "Women spend 4.3 hours per day on unpaid care work compared to men's 1.6 hours globally."
        },
        {
            value: "134 Years",
            label: "To Reach Gender Parity",
            description: "At current rates of progress, it will take approximately 134 years to close the global gender gap completely."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Pomegranate Shape */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                    >
                        The <span className="text-primary italic">Reality</span> of Gender Inequality
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-accent p-10 rounded-[2.5rem] shadow-sm border border-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center"
                        >
                            <div className="text-5xl font-serif text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center max-w-3xl mx-auto p-12 bg-accent rounded-[3rem] border border-primary/10"
                >
                    <p className="text-xl font-serif text-foreground mb-4">
                        <span className="text-primary font-bold">COVID-19</span> and future pandemics have shown that each crisis can push back female equality by decades.
                    </p>
                    <p className="text-foreground/60 leading-relaxed">
                        Without active intervention and systemic change, progress toward gender equality remains fragile and vulnerable to global disruptions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
