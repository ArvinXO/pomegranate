"use client";

import { motion } from "framer-motion";
import { Coffee, Search, HeartPulse } from "lucide-react";

export default function WorkProcess() {
    const steps = [
        {
            title: "The Meet and Brief",
            description: "Contact us, explain the area of research and consultancy needed. We will then meet, and discuss the project constraints and goals.",
            icon: Coffee,
            color: "bg-orange-50 text-orange-600"
        },
        {
            title: "The Examination",
            description: "A set plan will be created that will include the areas of services we provide. A breakdown of the cause, with solutions of needed change will be provided.",
            icon: Search,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "The Cure",
            description: "Our breakdown looks into how to create the change we have highlighted. We have a long-term agreement where assessment for continued progression can be attained.",
            icon: HeartPulse,
            color: "bg-primary/5 text-primary"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6">
                            How We <span className="text-primary italic">Transform</span> Systems
                        </h2>
                        <p className="text-lg text-foreground/60 leading-relaxed">
                            Our unique approach to consultancy dives into the layers of gender misconception, globally, nationally and locally.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-2">
                            Our Methodology
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-0 relative border-accent/20 rounded-3xl overflow-hidden shadow-2xl">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`relative p-12 group transition-all duration-500 ${idx === 1 ? 'bg-accent/20' : 'bg-white'
                                }`}
                        >
                            {/* Step Number Backdrop */}
                            <div className="absolute top-8 right-8 text-8xl font-serif text-foreground/[0.03] pointer-events-none select-none">
                                0{idx + 1}
                            </div>

                            <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                <step.icon size={32} />
                            </div>

                            <h3 className="text-2xl font-serif text-foreground mb-4">
                                {step.title}
                            </h3>

                            <p className="text-foreground/60 leading-relaxed relative z-10">
                                {step.description}
                            </p>

                            {/* Bottom decorative line */}
                            <div className="absolute bottom-0 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
