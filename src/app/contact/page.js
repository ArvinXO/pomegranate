"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, User, MessageSquare, Briefcase, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        areaOfBusiness: "",
        message: ""
    });

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
        // Form submission logic here
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-accent to-secondary/10 relative overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-serif text-foreground text-center mb-6"
                    >
                        Contact <span className="text-primary italic">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/70 text-center max-w-3xl mx-auto"
                    >
                        Let's start a conversation about creating meaningful change together
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full mt-8"
                    />
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Mail className="text-primary" size={32} />,
                                title: "Email Us",
                                content: "info@pomegranatehouse.org",
                                link: "mailto:info@pomegranatehouse.org"
                            },
                            {
                                icon: <Phone className="text-primary" size={32} />,
                                title: "Call Us",
                                content: "+44 (0) 20 XXXX XXXX",
                                link: "tel:+442XXXXXXXX"
                            },
                            {
                                icon: <MapPin className="text-primary" size={32} />,
                                title: "Location",
                                content: "London, United Kingdom",
                                link: null
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-accent rounded-[2.5rem] shadow-sm border border-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
                            >
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wider">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} className="text-foreground/70 hover:text-primary transition-colors">
                                        {item.content}
                                    </a>
                                ) : (
                                    <p className="text-foreground/70">{item.content}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-accent/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            Get in <span className="text-primary italic">Touch</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed"
                        >
                            Use the form below to tell us about your enquiry and we'll call you back to schedule an appointment. Please be as detailed as possible. Include what industry you need service for, along with any specific requests.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base text-foreground/60 max-w-3xl mx-auto mt-4 italic"
                        >
                            To help us best serve your enquiry, we recommend that you first describe the issue you have before telling us what you want to achieve.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"
                        />
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-accent space-y-6"
                    >
                        {/* Name Fields */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    First Name <span className="text-primary">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    Last Name <span className="text-primary">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    Email Address <span className="text-primary">*</span>
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                    <input
                                        type="email"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    Phone <span className="text-primary">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                    <input
                                        type="tel"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                        placeholder="+44 123 456 7890"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Area of Business */}
                        <div>
                            <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                Area of Business <span className="text-primary">*</span>
                            </label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                <select
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none appearance-none cursor-pointer"
                                    value={formData.areaOfBusiness}
                                    onChange={(e) => setFormData({ ...formData, areaOfBusiness: e.target.value })}
                                >
                                    <option value="">Select an area</option>
                                    {businessAreas.map((area, idx) => (
                                        <option key={idx} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                How Can We Help? <span className="text-primary">*</span>
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-6 text-primary/40" size={20} />
                                <textarea
                                    required
                                    rows={6}
                                    className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none resize-none"
                                    placeholder="Please describe your enquiry in detail. First, explain the issue or challenge you're facing, then tell us what you hope to achieve..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <p className="text-xs text-foreground/50 mt-2 italic">
                                Please do not include confidential or sensitive information in your message.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full px-8 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-105 hover:shadow-xl"
                            >
                                Submit Enquiry
                            </button>
                        </div>

                        <p className="text-sm text-foreground/50 text-center italic">
                            We'll review your enquiry and get back to you within 2-3 business days to schedule an appointment.
                        </p>
                    </motion.form>
                </div>
            </section>

            {/* Alternative Contact Methods */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-serif text-foreground mb-6"
                        >
                            Prefer to Reach Out Directly?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/70 mb-8"
                        >
                            You may also email or call us to make an appointment
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="mailto:info@pomegranatehouse.org"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-accent border-2 border-primary/20 text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
                            >
                                <Mail size={20} />
                                Email Us
                            </a>
                            <a
                                href="tel:+442XXXXXXXX"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-105"
                            >
                                <Phone size={20} />
                                Call Us
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
