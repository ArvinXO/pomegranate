"use client";

import { motion } from "framer-motion";

const BriefIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#c5a059" strokeWidth="1.5" strokeDasharray="2 4" />
        <path d="M20 12C16 12 13 15 13 20C13 25 16 28 20 28C24 28 27 25 27 20C27 15 24 12 20 12Z" fill="#75032c" fillOpacity="0.1" />
        <path d="M20 12C20 12 13 18 13 20C13 22 15 24 17 24C19 24 20 22 20 22C20 22 21 24 23 24C25 24 27 22 27 20C27 18 20 12 20 12Z" stroke="#75032c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="18" r="2" fill="#c5a059" />
    </svg>
);

const ExamineIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="#c5a059" strokeWidth="1" />
        <path d="M20 5V8M20 32V35M5 20H8M32 20H35" stroke="#c5a059" strokeWidth="1" />
        <circle cx="20" cy="20" r="8" stroke="#75032c" strokeWidth="2" />
        <path d="M20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24C22.2091 24 24 22.2091 24 20" stroke="#75032c" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 26L32 32" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const CureIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35V30M10 25L13 23M30 25L27 23M20 5V10" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 10C15 10 11 14 11 20C11 26 15 30 20 30C25 30 29 26 29 20C29 14 25 10 20 10Z" fill="#75032c" fillOpacity="0.1" stroke="#75032c" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill="#c5a059" />
        <path d="M17 14C17 14 18 12 20 12C22 12 23 14 23 14" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default function WorkProcess() {
    const steps = [
        {
            title: "The Meet and Brief",
            description: "Contact us, explain the area of research and consultancy needed. We will then meet, and discuss the project constraints and goals.",
            icon: BriefIcon,
            color: "bg-accent border border-gold/20 text-primary"
        },
        {
            title: "The Examination",
            description: "A set plan will be created that will include the areas of services we provide. A breakdown of the cause, with solutions of needed change will be provided.",
            icon: ExamineIcon,
            color: "bg-white border border-gold/20 text-primary shadow-lg"
        },
        {
            title: "The Cure",
            description: "Our breakdown looks into how to create the change we have highlighted. We have a long-term agreement where assessment for continued progression can be attained.",
            icon: CureIcon,
            color: "bg-accent border border-gold/20 text-primary"
        }
    ];

    return (
        <section className="py-24 bg-cream relative overflow-hidden persian-floral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-bold text-xs uppercase tracking-widest mb-4">
                            Workflow
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-serif text-foreground mb-6">
                            How We <span className="text-primary italic">Transform</span> Systems
                        </h2>
                        <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
                            Our unique approach to consultancy dives into the layers of gender misconception, globally, nationally and locally.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-gold pb-2">
                            Our Methodology
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-0 relative border-gold/10 rounded-[3rem] overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`relative p-12 group transition-all duration-500 hover:bg-white/80 ${idx === 1 ? 'bg-accent/40' : 'bg-transparent'
                                }`}
                        >
                            {/* Step Number Backdrop */}
                            <div className="absolute top-8 right-8 text-9xl font-serif text-gold/[0.08] pointer-events-none select-none group-hover:text-gold/[0.15] transition-colors duration-500">
                                {idx + 1}
                            </div>

                            <div className={`w-20 h-20 rounded-[2rem] ${step.color} flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}>
                                <div className="absolute -inset-2 rounded-[2.5rem] bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <step.icon />
                            </div>

                            <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                {step.title}
                            </h3>

                            <p className="text-foreground/60 leading-relaxed relative z-10 text-sm">
                                {step.description}
                            </p>

                            {/* Decorative element */}
                            <div className="mt-8 flex items-center space-x-2">
                                <div className="w-8 h-[1px] bg-gold/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                            </div>

                            {/* Bottom decorative gold line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
