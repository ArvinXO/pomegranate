"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Coffee, Search, Shield, Globe, Heart, Users } from "lucide-react";

const services = [
    {
        title: "Consultation",
        description: "Our three-step plan: brief analysis, deep-dive research, and strategic implementation for sustainable gender dividends.",
        icon: Users,
        image: "/services_meeting.webp",
        href: "/services/consultancy",
        color: "primary"
    },
    {
        title: "Gender Dividend & Culture",
        description: "Exploring unconscious bias and generational norms to integrate women effectively into corporate and social structures.",
        icon: Heart,
        image: "/services_gender_culture.webp",
        href: "/services/gender-at-work",
        color: "gold"
    },
    {
        title: "Gaps of Governance",
        description: "Analyzing every layer—from corporate to global—to ensure gender-just outcomes and decolonized governance paths.",
        icon: Shield,
        image: "/services_governance_orb.webp",
        href: "/services/governance",
        color: "primary"
    },
    {
        title: "Research & Methods",
        description: "Bespoke qualitative and quantitative data collection using the latest academic theories and quasi-experimental methods.",
        icon: Search,
        image: "/services_research_academic.webp",
        href: "/services/research",
        color: "gold"
    },
    {
        title: "Workshops & Training",
        description: "Utilizing 'global therapy' concepts to address personal misconceptions and build cross-cultural management skills.",
        icon: Coffee,
        image: "/services_workshops_minimal.webp",
        href: "/services/workshops",
        color: "primary"
    },
    {
        title: "Care Package",
        description: "Ensuring long-term success through compliance monitoring, accountability oversight, and structural resilience mapping.",
        icon: Globe,
        image: "/services_care_package.webp",
        href: "/services/consultancy#care-package",
        color: "gold"
    }
];

const FloralDivider = () => (
    <div className="flex items-center justify-center space-x-4 my-12">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold/50">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
        </svg>
        <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-gold/30" />
    </div>
);

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-32 relative overflow-hidden persian-floral-bg">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-10"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-[7rem] font-serif text-foreground mb-8 leading-tight"
                    >
                        Our <span className="text-primary italic">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/50 max-w-4xl mx-auto mb-12 font-serif italic leading-relaxed"
                    >
                        Bridging grassroots realities with global power through specialized consultancy, deep-dive research, and transformative education.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-32 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full"
                    />
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 opacity-[0.015] persian-floral-bg pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-accent/30 rounded-[3rem] overflow-hidden border border-gold/10 hover:border-gold/30 hover:bg-white hover:shadow-3xl transition-all duration-500 flex flex-col"
                            >
                                {/* Service Image */}
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg border border-gold/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <service.icon size={20} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-3xl font-serif text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/60 leading-relaxed font-light mb-8 italic">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-gold transition-colors duration-300 group/btn"
                                        >
                                            <span>Explore Service</span>
                                            <span className="w-8 h-[1px] bg-gold/30 group-hover/btn:w-12 group-hover/btn:bg-gold transition-all duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Quote & CTA */}
            <section className="py-32 bg-cream relative overflow-hidden persian-floral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-20 bg-white rounded-[4rem] text-foreground shadow-2xl relative overflow-hidden border border-gold/10"
                    >
                        <div className="absolute inset-0 opacity-[0.03] persian-floral-bg" />
                        <h2 className="text-4xl font-serif text-primary mb-8 relative z-10 italic">
                            "Ready to transform your organizational landscape?"
                        </h2>
                        <p className="text-lg text-foreground/50 mb-10 relative z-10 font-light">
                            Our specialists are ready to help you navigate the complexities of gender dividends and cultural integration.
                        </p>
                        <Link
                            href="/hire-us"
                            className="inline-block px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-105 border border-gold/30 relative z-10"
                        >
                            Hire Our Specialists
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
