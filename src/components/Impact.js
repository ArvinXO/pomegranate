"use client";

import { motion } from "framer-motion";

const UnpaidWorkIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8V40M24 8L34 18M24 8L14 18" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24Z" stroke="#75032c" strokeWidth="1" strokeDasharray="1 4" />
        <circle cx="24" cy="24" r="12" stroke="#c5a059" strokeWidth="1" />
    </svg>
);

const ViolenceIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L8 10V22C8 31.5 14.5 40 24 44C33.5 40 40 31.5 40 22V10L24 4Z" fill="#75032c" fillOpacity="0.05" stroke="#75032c" strokeWidth="1.5" />
        <path d="M24 14V24M24 24L20 20M24 24L28 20" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="30" r="2" fill="#c5a059" />
    </svg>
);

const GDPIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z" stroke="#c5a059" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M24 12V36M12 24H36" stroke="#75032c" strokeWidth="0.5" opacity="0.3" />
        <path d="M16 28L24 20L32 28" stroke="#75032c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 20L24 12L32 20" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Impact() {
    const stats = [
        {
            value: "70%",
            label: "Women's share of unpaid work globally",
            description: "Research shows that if women are properly integrated, global GDP can raise significantly.",
            icon: UnpaidWorkIcon
        },
        {
            value: "1 in 3",
            label: "Women experience physical or sexual violence",
            description: "A stark reality that requires philosophical and structural change in every community.",
            icon: ViolenceIcon
        },
        {
            value: "$28T",
            label: "Potential GDP Growth",
            description: "Integrating women into society can raise global GDP between $12 trillion to $28 trillion.",
            icon: GDPIcon
        }
    ];

    return (
        <section className="py-32 bg-cream relative overflow-hidden persian-floral-bg">
            {/* Decorative Gold Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-8"
                    >
                        Our Global Context
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-serif text-foreground mb-8"
                    >
                        Our Impact & The <span className="text-primary italic">Reality</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] shadow-xl shadow-primary/5 border border-gold/10 hover:border-gold/30 hover:shadow-primary/10 hover:-translate-y-3 transition-all duration-500 group text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />

                            <div className="flex justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                <div className="w-20 h-20 rounded-[2rem] bg-accent flex items-center justify-center border border-gold/10 shadow-inner">
                                    <stat.icon />
                                </div>
                            </div>

                            <div className="text-6xl font-serif text-primary mb-6 group-hover:scale-110 transition-transform duration-300 gold-text">
                                {stat.value}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                                {stat.label}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed text-sm">
                                {stat.description}
                            </p>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold/20 rounded-full group-hover:w-16 group-hover:bg-primary/20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-4xl mx-auto p-16 bg-white rounded-[4rem] text-foreground shadow-2xl relative overflow-hidden border border-gold/20"
                >
                    <div className="absolute inset-0 opacity-[0.03] persian-floral-bg" />

                    <div className="relative z-10">
                        <svg className="w-12 h-12 mx-auto mb-8 text-gold opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM0.0170898 21L0.0170898 18C0.0170898 16.8954 0.912521 16 2.01709 16H5.01709C5.56937 16 6.01709 15.5523 6.01709 15V9C6.01709 8.44772 5.56937 8 5.01709 8H2.01709C0.912521 8 0.0170898 7.10457 0.0170898 6V5C0.0170898 3.89543 0.912521 3 2.01709 3H7.01709C8.12166 3 9.01709 3.89543 9.01709 5V15C9.01709 18.3137 6.33081 21 3.01709 21H0.0170898Z" />
                        </svg>
                        <p className="text-3xl lg:text-4xl font-serif italic mb-10 leading-relaxed text-primary">
                            "Pomegranate House is here to change how women are perceived."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="text-sm uppercase tracking-[0.4em] font-bold text-foreground/40 mb-2">A House of Research</div>
                            <div className="w-12 h-[1px] bg-gold/50" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
