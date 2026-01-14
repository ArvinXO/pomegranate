"use client";

import { motion } from "framer-motion";

const GraduationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10L35 18L20 26L5 18L20 10Z" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 21V28C10 28 15 32 20 32C25 32 30 28 30 28V21" stroke="#75032c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 18V28" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="35" cy="28" r="2" fill="#c5a059" />
    </svg>
);

const GapIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="20" r="8" stroke="#75032c" strokeWidth="2" />
        <circle cx="25" cy="20" r="8" stroke="#c5a059" strokeWidth="2" />
        <path d="M15 20H25" stroke="#75032c" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
);

const TimeIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="#c5a059" strokeWidth="1" />
        <path d="M20 10V20L26 24" stroke="#75032c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="2" fill="#c5a059" />
    </svg>
);

const CenturiesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10H28L20 20L12 10Z" fill="#75032c" fillOpacity="0.1" stroke="#c5a059" strokeWidth="1.5" />
        <path d="M12 30H28L20 20L12 30Z" stroke="#c5a059" strokeWidth="1.5" />
        <path d="M20 25C20 25 21 27 21 28C21 29 20 30 20 30C20 30 19 29 19 28C19 27 20 25 20 25Z" fill="#c5a059" />
        <path d="M10 10V30M30 10V30" stroke="#c5a059" strokeWidth="1" opacity="0.5" />
    </svg>
);

export default function Statistics() {
    const stats = [
        {
            value: "~60%",
            label: "Female Graduates Globally",
            description: "Women now constitute the majority of higher education graduates in most regions worldwide.",
            icon: GraduationIcon
        },
        {
            value: "31.5%",
            label: "Global Gender Gap Remains",
            description: "Despite progress, significant inequality persists across economic, political, and social dimensions.",
            icon: GapIcon
        },
        {
            value: "4.3 vs 1.6",
            label: "Hours of Unpaid Work Daily",
            description: "Women spend 4.3 hours per day on unpaid care work compared to men's 1.6 hours globally.",
            icon: TimeIcon
        },
        {
            value: "134 Years",
            label: "To Reach Gender Parity",
            description: "At current rates of progress, it will take approximately 134 years to close the global gender gap completely.",
            icon: CenturiesIcon
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Gold Elements */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

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
                        className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full"
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
                            className="bg-accent/40 backdrop-blur-sm p-10 rounded-[2.5rem] border border-gold/10 hover:border-gold/40 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-16 h-16 bg-gold/5 rounded-br-3xl -translate-x-1/2 -translate-y-1/2" />

                            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <stat.icon />
                            </div>

                            <div className="text-5xl font-serif text-primary mb-4 group-hover:scale-110 transition-transform duration-300 gold-text">
                                {stat.value}
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-foreground/60 leading-relaxed font-light">
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
                    className="mt-20 text-center max-w-3xl mx-auto p-12 bg-cream rounded-[3rem] border border-gold/20 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="80" height="80" viewBox="0 0 100 100" className="text-gold">
                            <path d="M50 10 Q60 30 50 50 Q40 30 50 10" fill="currentColor" />
                            <path d="M50 90 Q60 70 50 50 Q40 70 50 90" fill="currentColor" />
                            <path d="M10 50 Q30 60 50 50 Q30 40 10 50" fill="currentColor" />
                            <path d="M90 50 Q70 60 50 50 Q70 40 90 50" fill="currentColor" />
                        </svg>
                    </div>
                    <p className="text-xl font-serif text-foreground mb-6 relative z-10">
                        <span className="text-primary font-bold">COVID-19</span> and future pandemics have shown that each crisis can push back female equality by decades.
                    </p>
                    <p className="text-foreground/60 leading-relaxed relative z-10 font-light italic">
                        Without active intervention and systemic change, progress toward gender equality remains fragile and vulnerable to global disruptions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
