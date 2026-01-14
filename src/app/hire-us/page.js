"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, User, Briefcase, MapPin, Clock } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const FloralDivider = () => (
    <div className="flex items-center justify-center space-x-4 my-12">
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold/50">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
        </svg>
        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/30" />
    </div>
);

function HireUsContent() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        areaOfBusiness: "",
        message: ""
    });

    // Pre-fill form from query parameters
    useEffect(() => {
        const subject = searchParams.get('subject');
        const message = searchParams.get('message');

        if (subject || message) {
            setFormData(prev => ({
                ...prev,
                ...(subject && { areaOfBusiness: subject }),
                ...(message && { message: message })
            }));
        }
    }, [searchParams]);

    const businessAreas = [
        "Consultancy",
        "Gender Dividend, Culture and the Unconscious Bias",
        "Gaps of Governance",
        "Methodology",
        "Workshops, Seminars & Training"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <>
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
                        Strategic Partnership
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-[7rem] font-serif text-foreground mb-8 leading-tight"
                    >
                        Hire <span className="text-primary italic">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/70 max-w-3xl mx-auto mb-12 font-serif italic"
                    >
                        "Partner with us to create meaningful change in gender equality"
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-32 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full"
                    />
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015] persian-floral-bg pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                icon: Mail,
                                title: "Email Us",
                                content: "info@pomegranatehouse.org",
                                link: "mailto:info@pomegranatehouse.org"
                            },
                            {
                                icon: Briefcase,
                                title: "Our Services",
                                content: "Consultancy, Research & Training",
                                link: null
                            },
                            {
                                icon: User,
                                title: "Expert Team",
                                content: "Global specialists ready to help",
                                link: null
                            },
                            {
                                icon: MapPin,
                                title: "Location",
                                content: "London, UK",
                                link: null
                            },
                            {
                                icon: Clock,
                                title: "Office Hours",
                                content: "Mon - Fri\n10AM - 6PM",
                                link: null
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 bg-accent/40 backdrop-blur-sm rounded-[2rem] border border-gold/10 hover:border-gold/30 hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="text-primary" size={24} />
                                </div>
                                <h3 className="text-[9px] font-bold text-foreground/40 mb-2 uppercase tracking-[0.2em]">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} className="text-[11px] text-primary font-bold hover:text-gold transition-colors block underline underline-offset-4 decoration-gold/20 leading-tight">
                                        {item.content}
                                    </a>
                                ) : (
                                    <p className="text-[11px] text-foreground/60 leading-relaxed font-light whitespace-pre-line">{item.content}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <section className="py-32 bg-cream relative overflow-hidden persian-floral-bg">
                <div className="absolute -bottom-24 -left-24 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-serif text-foreground mb-8"
                        >
                            Start Your <span className="text-primary italic">Journey</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-foreground/50 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Use the form below to tell us about your project. Our specialists will review your requirements and reach out to schedule an initial consultation.
                        </motion.p>
                        <FloralDivider />
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white/80 backdrop-blur-xl p-10 lg:p-20 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(117,3,44,0.1)] border border-gold/10 space-y-10"
                    >
                        {/* Name Fields */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    First Name <span className="text-primary font-serif">*</span>
                                </label>
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-14 pr-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                        placeholder="Jane"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Last Name <span className="text-primary font-serif">*</span>
                                </label>
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-14 pr-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Email Address <span className="text-primary font-serif">*</span>
                                </label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                                    <input
                                        type="email"
                                        required
                                        className="w-full pl-14 pr-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                        placeholder="jane.doe@organization.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Phone <span className="text-primary font-serif">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                    placeholder="+44 20 7123 4567"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Area of Business */}
                        <div className="space-y-3">
                            <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                Area of Interest <span className="text-primary font-serif">*</span>
                            </label>
                            <div className="relative group">
                                <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                                <select
                                    required
                                    className="w-full pl-14 pr-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light appearance-none cursor-pointer"
                                    value={formData.areaOfBusiness}
                                    onChange={(e) => setFormData({ ...formData, areaOfBusiness: e.target.value })}
                                >
                                    <option value="">Select a service area</option>
                                    {businessAreas.map((area) => (
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-3">
                            <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                Tell Us About Your Project <span className="text-primary font-serif">*</span>
                            </label>
                            <textarea
                                required
                                rows={6}
                                className="w-full px-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light resize-none"
                                placeholder="Share your vision, challenges, and goals..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="w-full px-12 py-6 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-3xl shadow-primary/20 hover:scale-[1.02] border border-gold/30 group relative overflow-hidden"
                            >
                                <span className="relative z-10">Send Enquiry</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </section>
        </>
    );
}

export default function HireUsPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Navbar />
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-foreground/40 font-light">Loading...</p>
                    </div>
                </div>
            }>
                <HireUsContent />
            </Suspense>
            <Footer />
        </main>
    );
}
