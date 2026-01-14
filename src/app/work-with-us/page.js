"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, Mail, User, FileText, Briefcase } from "lucide-react";
import { useState } from "react";

const GlobalImpactIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#c5a059" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M24 12C20 12 16 16 16 24C16 32 20 36 24 36C28 36 32 32 32 24C32 16 28 12 24 12Z" fill="#75032c" fillOpacity="0.05" stroke="#75032c" strokeWidth="1.5" />
        <path d="M4 24H44M24 4V44" stroke="#c5a059" strokeWidth="0.5" opacity="0.3" />
        <circle cx="24" cy="24" r="3" fill="#c5a059" />
    </svg>
);

const MeaningfulWorkIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 40C24 40 36 32 36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20C12 32 24 40 24 40Z" fill="#75032c" fillOpacity="0.05" stroke="#75032c" strokeWidth="2" />
        <path d="M24 16L27 22H33L28 26L30 32L24 28L18 32L20 26L15 22H21L24 16Z" fill="#c5a059" fillOpacity="0.2" stroke="#c5a059" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="18" stroke="#c5a059" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
);

const ExpertTeamIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="18" r="8" stroke="#75032c" strokeWidth="2" fill="#75032c" fillOpacity="0.05" />
        <path d="M10 40C10 32.268 16.268 26 24 26C31.732 26 38 32.268 38 40" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10V6M34 14L37 11M42 24L46 24M34 34L37 37" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="18" r="2" fill="#c5a059" />
    </svg>
);

const FloralDivider = () => (
    <div className="flex items-center justify-center space-x-4 my-12">
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold/50">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
        </svg>
        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/30" />
    </div>
);

export default function WorkWithUsPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        cv: null,
        coverLetter: null,
        linkedin: "",
        phone: "",
        expertise: "",
        message: ""
    });

    const expertiseAreas = [
        "Gender Equality & Research",
        "Economics & Policy",
        "Health & Medicine",
        "Consumer Goods & Business",
        "Governance & Diplomacy",
        "Education & Training",
        "Other"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setFormData({ ...formData, [field]: file });
    };

    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-32 relative overflow-hidden persian-floral-bg">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-10"
                    >
                        Join Our Community
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-[7rem] font-serif text-foreground mb-8 leading-tight"
                    >
                        Work <span className="text-primary italic">With Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-3xl text-foreground/70 max-w-3xl mx-auto mb-10 font-serif italic"
                    >
                        "Change the world by joining Pomegranate House"
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-foreground/50 max-w-2xl mx-auto font-light"
                    >
                        Be part of a team that bridges grassroots realities to global power. We are looking for individuals who share our passion for gender equality and systemic change.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-32 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full mt-12"
                    />
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] persian-floral-bg pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-6xl font-serif text-foreground mb-8"
                        >
                            Why <span className="text-primary italic">Join Us</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-gold mx-auto rounded-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 mb-24">
                        {[
                            {
                                icon: GlobalImpactIcon,
                                title: "Global Impact",
                                description: "Work on projects that influence policy from local communities to the United Nations"
                            },
                            {
                                icon: MeaningfulWorkIcon,
                                title: "Meaningful Work",
                                description: "Contribute to closing the gender gap and creating lasting systemic change"
                            },
                            {
                                icon: ExpertTeamIcon,
                                title: "Expert Team",
                                description: "Collaborate with world-class specialists in economics, health, governance, and gender equality"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="p-12 bg-accent/40 backdrop-blur-sm rounded-[3rem] border border-gold/10 hover:border-gold/30 hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center relative group"
                            >
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gold/5 rounded-br-[3rem] -translate-x-1/2 -translate-y-1/2" />
                                <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon />
                                </div>
                                <h3 className="text-2xl font-serif text-primary mb-5">{item.title}</h3>
                                <p className="text-foreground/60 leading-relaxed font-light text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 bg-white rounded-[3.5rem] border border-gold/20 text-center relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute inset-0 opacity-[0.03] persian-floral-bg" />
                        <p className="text-xl text-foreground/80 leading-relaxed relative z-10 font-serif italic">
                            <span className="font-bold text-primary not-italic uppercase tracking-widest text-sm block mb-4">Note for Applicants</span>
                            Job adverts will appear when the need for more specialised skills arises. Please submit your details below to be considered for future opportunities within our growing team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Application Form Section */}
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
                            Submit Your <span className="text-primary italic">Application</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-foreground/50 font-light"
                        >
                            Please submit your CV and cover letter to begin your journey with us
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
                                        placeholder="jane.doe@global.org"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                    placeholder="+44 20 7123 4567"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* LinkedIn and Expertise */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    LinkedIn Profile
                                </label>
                                <input
                                    type="url"
                                    className="w-full px-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                    placeholder="linkedin.com/in/janedoe"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Area of Expertise
                                </label>
                                <div className="relative group">
                                    <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                                    <select
                                        className="w-full pl-14 pr-10 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none appearance-none text-foreground font-light"
                                        value={formData.expertise}
                                        onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                                    >
                                        <option value="">Select your expertise</option>
                                        {expertiseAreas.map((area, idx) => (
                                            <option key={idx} value={area}>{area}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold/50">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-3">
                            <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                Subject <span className="text-primary font-serif">*</span>
                            </label>
                            <div className="relative group">
                                <FileText className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-14 pr-6 py-5 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-3xl transition-all duration-500 outline-none text-foreground font-light"
                                    placeholder="e.g., Application for Gender Research Position"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* File Uploads */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Curriculum Vitae (CV) <span className="text-primary font-serif">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        id="cv-upload"
                                        onChange={(e) => handleFileChange(e, 'cv')}
                                    />
                                    <label
                                        htmlFor="cv-upload"
                                        className="flex items-center justify-between px-8 py-5 bg-accent/10 border border-dashed border-gold/30 hover:bg-gold/5 hover:border-gold rounded-3xl transition-all duration-500 cursor-pointer group"
                                    >
                                        <span className="text-foreground/40 text-sm font-light truncate max-w-[200px] group-hover:text-primary transition-colors">
                                            {formData.cv ? formData.cv.name : "Choose File (PDF, DOC)"}
                                        </span>
                                        <Upload className="text-gold opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all" size={18} />
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                    Cover Letter <span className="text-primary font-serif">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        id="cover-letter-upload"
                                        onChange={(e) => handleFileChange(e, 'coverLetter')}
                                    />
                                    <label
                                        htmlFor="cover-letter-upload"
                                        className="flex items-center justify-between px-8 py-5 bg-accent/10 border border-dashed border-gold/30 hover:bg-gold/5 hover:border-gold rounded-3xl transition-all duration-500 cursor-pointer group"
                                    >
                                        <span className="text-foreground/40 text-sm font-light truncate max-w-[200px] group-hover:text-primary transition-colors">
                                            {formData.coverLetter ? formData.coverLetter.name : "Choose File"}
                                        </span>
                                        <Upload className="text-gold opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all" size={18} />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Additional Message */}
                        <div className="space-y-3">
                            <label className="block text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] ml-4">
                                Additional Message
                            </label>
                            <textarea
                                rows={6}
                                className="w-full px-8 py-6 bg-accent/20 border-b border-gold/10 focus:border-gold rounded-[2rem] transition-all duration-500 outline-none resize-none text-foreground font-light leading-relaxed"
                                placeholder="Tell us why you'd like to join Pomegranate House and what unique perspective you bring to the table..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="w-full px-8 py-6 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all duration-500 shadow-3xl shadow-primary/20 hover:scale-[1.02] border border-gold/30"
                            >
                                Send Application to Our Team
                            </button>
                        </div>

                        <div className="pt-6 flex items-center justify-center space-x-2 text-foreground/30 text-[10px] uppercase tracking-[0.2em] font-bold italic">
                            <div className="w-6 h-[1px] bg-gold/20" />
                            <span>Privacy assured. Personal data encrypted.</span>
                            <div className="w-6 h-[1px] bg-gold/20" />
                        </div>
                    </motion.form>
                </div>
            </section>

            {/* What Happens Next Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                <div className="absolute inset-0 opacity-[0.015] persian-floral-bg pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-6xl font-serif text-foreground mb-8"
                        >
                            What Happens <span className="text-primary italic">Next</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="space-y-10">
                        {[
                            {
                                step: "I",
                                title: "Application Review",
                                description: "Our team will carefully review your application and assess your fit with our mission and cultural values."
                            },
                            {
                                step: "II",
                                title: "Initial Contact",
                                description: "If your profile matches our current or future needs, we'll reach out within 2-4 weeks for an initial conversation."
                            },
                            {
                                step: "III",
                                title: "Interview Process",
                                description: "Selected candidates will go through interviews with relevant team specialists to discuss alignment and vision."
                            },
                            {
                                step: "IV",
                                title: "Join the Team",
                                description: "Welcome to Pomegranate House. Together, we'll work to create meaningful gender dividends worldwide."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="flex gap-10 items-start p-10 bg-accent/30 backdrop-blur-sm rounded-[3rem] border border-gold/10 hover:border-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 relative group"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-[#110906] text-gold rounded-[1.5rem] flex items-center justify-center font-serif text-2xl border border-gold/30 shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {item.step}
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                    <p className="text-foreground/60 leading-relaxed font-light">{item.description}</p>
                                </div>
                                {/* Decorative line */}
                                <div className="absolute left-16 bottom-0 w-[2px] h-10 bg-gold/20 -translate-x-1/2 translate-y-full last:hidden" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
