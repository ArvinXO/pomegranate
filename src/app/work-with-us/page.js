"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, Mail, User, FileText, Briefcase } from "lucide-react";
import { useState } from "react";

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
        // Form submission logic here
        console.log("Form submitted:", formData);
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setFormData({ ...formData, [field]: file });
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
                        Work <span className="text-primary italic">With Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-foreground/80 text-center max-w-3xl mx-auto mb-4 font-serif"
                    >
                        Change the world by joining Pomegranate House
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-foreground/60 text-center max-w-2xl mx-auto"
                    >
                        Be part of a team that bridges grassroots realities to global power
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full mt-8"
                    />
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            Why <span className="text-primary italic">Join Us</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: "🌍",
                                title: "Global Impact",
                                description: "Work on projects that influence policy from local communities to the United Nations"
                            },
                            {
                                icon: "🎯",
                                title: "Meaningful Work",
                                description: "Contribute to closing the gender gap and creating lasting systemic change"
                            },
                            {
                                icon: "🤝",
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
                                className="p-8 bg-accent rounded-[2.5rem] shadow-sm border border-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 bg-primary/10 rounded-[2.5rem] border border-primary/20 text-center"
                    >
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            <span className="font-semibold text-primary">Job adverts will appear when the need for more specialised skills are needed.</span> Please keep an eye out for these advertisements or submit your details below to be considered for future opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-24 bg-accent/30 relative overflow-hidden">
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            Submit Your <span className="text-primary italic">Application</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/60"
                        >
                            Please submit your CV and cover letter if you would like to get involved
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
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
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                    placeholder="+44 123 456 7890"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* LinkedIn and Expertise */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    LinkedIn Profile
                                </label>
                                <input
                                    type="url"
                                    className="w-full px-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                    placeholder="linkedin.com/in/yourprofile"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    Area of Expertise
                                </label>
                                <div className="relative">
                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                    <select
                                        className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none appearance-none"
                                        value={formData.expertise}
                                        onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                                    >
                                        <option value="">Select your expertise</option>
                                        {expertiseAreas.map((area, idx) => (
                                            <option key={idx} value={area}>{area}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                Subject <span className="text-primary">*</span>
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none"
                                    placeholder="e.g., Application for Gender Research Position"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* File Uploads */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    Curriculum Vitae (CV) <span className="text-primary">*</span>
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
                                        className="flex items-center justify-center gap-3 w-full px-4 py-4 bg-accent border-2 border-dashed border-primary/30 hover:border-primary rounded-2xl transition-all duration-300 cursor-pointer group"
                                    >
                                        <Upload className="text-primary group-hover:scale-110 transition-transform" size={20} />
                                        <span className="text-foreground/60 group-hover:text-primary transition-colors">
                                            {formData.cv ? formData.cv.name : "Upload CV (PDF, DOC)"}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                    Cover Letter <span className="text-primary">*</span>
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
                                        className="flex items-center justify-center gap-3 w-full px-4 py-4 bg-accent border-2 border-dashed border-primary/30 hover:border-primary rounded-2xl transition-all duration-300 cursor-pointer group"
                                    >
                                        <Upload className="text-primary group-hover:scale-110 transition-transform" size={20} />
                                        <span className="text-foreground/60 group-hover:text-primary transition-colors">
                                            {formData.coverLetter ? formData.coverLetter.name : "Upload Cover Letter"}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Additional Message */}
                        <div>
                            <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">
                                Additional Message
                            </label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-4 bg-accent border-2 border-accent focus:border-primary rounded-2xl transition-colors duration-300 outline-none resize-none"
                                placeholder="Tell us why you'd like to join Pomegranate House and what unique perspective you bring..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full px-8 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-105 hover:shadow-xl"
                            >
                                Submit Application
                            </button>
                        </div>

                        <p className="text-sm text-foreground/50 text-center italic">
                            By submitting this form, you agree to our privacy policy and consent to us contacting you regarding opportunities at Pomegranate House.
                        </p>
                    </motion.form>
                </div>
            </section>

            {/* What Happens Next Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            What Happens <span className="text-primary italic">Next</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                step: "1",
                                title: "Application Review",
                                description: "Our team will carefully review your application and assess your fit with our mission and values."
                            },
                            {
                                step: "2",
                                title: "Initial Contact",
                                description: "If your profile matches our current or future needs, we'll reach out within 2-4 weeks for an initial conversation."
                            },
                            {
                                step: "3",
                                title: "Interview Process",
                                description: "Selected candidates will go through interviews with relevant team members to discuss opportunities and alignment."
                            },
                            {
                                step: "4",
                                title: "Join the Team",
                                description: "Welcome to Pomegranate House! Together, we'll work to create meaningful change in gender equality worldwide."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 items-start p-6 bg-accent/50 rounded-[2rem] border border-accent hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-primary mb-2">{item.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
