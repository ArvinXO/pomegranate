"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Cookie, Lock, Eye, Globe, Link as LinkIcon } from "lucide-react";

export default function PrivacyPage() {
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
                        Privacy & <span className="text-primary italic">Cookie Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/70 text-center max-w-3xl mx-auto"
                    >
                        Your privacy and data protection are important to us
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full mt-8"
                    />
                </div>
            </section>

            {/* Overview Cards */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: <Cookie className="text-primary" size={40} />,
                                title: "Cookie Usage",
                                description: "How we use cookies to enhance your experience"
                            },
                            {
                                icon: <Lock className="text-primary" size={40} />,
                                title: "Data Protection",
                                description: "Your information is secure and protected"
                            },
                            {
                                icon: <Eye className="text-primary" size={40} />,
                                title: "Transparency",
                                description: "Clear information about data collection"
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
                                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cookies and Similar Technologies */}
            <section className="py-24 bg-accent/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Cookie className="text-primary" size={48} />
                            <h2 className="text-4xl lg:text-5xl font-serif text-foreground">
                                Cookies & <span className="text-primary italic">Similar Technologies</span>
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-accent space-y-8">
                        {/* What are Cookies */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                What are Cookies?
                            </h3>
                            <div className="pl-7 space-y-4 text-foreground/80 leading-relaxed">
                                <p>
                                    A cookie is a small text file which is highlighted onto your computer or electronic device when you access our website. Similar technologies include web beacons, action tags, local shared objects ('flash cookies') and single-pixel gifs. Such technologies can be used to track users' actions and activities, and to store information about them.
                                </p>
                            </div>
                        </div>

                        {/* How We Use Cookies */}
                        <div className="p-6 bg-accent rounded-[2rem]">
                            <h4 className="text-xl font-serif text-primary mb-4">How We Use Cookies</h4>
                            <p className="text-foreground/80 leading-relaxed">
                                We use these cookies and/or similar technologies on this website to obtain information regarding location and preference on the website. This can provide better quality of information within our site for the users benefit.
                            </p>
                        </div>

                        {/* Information Collected */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                Information Collected
                            </h3>
                            <div className="pl-7 space-y-4 text-foreground/80 leading-relaxed">
                                <p>
                                    We may obtain information about your computer or any other electronic device which you use to access our website, such as your IP address, your browser and/or internet log information. We will treat this information as your personal information.
                                </p>
                                <p>
                                    In certain circumstances we may also collect personal information about you but only where you voluntarily provide it (e.g. by completing an online form) or where you purchase services from us.
                                </p>
                            </div>
                        </div>

                        {/* Consent for Cookies */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                Consent for Cookies
                            </h3>
                            <div className="pl-7 space-y-4 text-foreground/80 leading-relaxed">
                                <p>
                                    In most cases we will need your consent in order to use cookies on this website. The exception is where the cookie is essential for us to provide you with a service you have requested, or essential to the inherent functionality of the website (e.g. to enable you to complete the contact forms).
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20">
                                        <h5 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                            <Shield size={20} />
                                            Initial Consent
                                        </h5>
                                        <p className="text-sm">
                                            On the first occasion a pop-up will ask the user to consent by clicking a checkbox. This preference will then be stored for the future.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-secondary/5 rounded-[2rem] border border-secondary/20">
                                        <h5 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                            <Eye size={20} />
                                            Opt-Out Option
                                        </h5>
                                        <p className="text-sm">
                                            A banner will be shown to all users who have consented to cookies being used. If not accepted this will be taken as an opt-out option of the use of such technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <LinkIcon className="text-primary" size={48} />
                            <h2 className="text-4xl lg:text-5xl font-serif text-foreground">
                                Third-Party <span className="text-primary italic">Cookies</span>
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-accent space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                External Links & Platforms
                            </h3>
                            <div className="pl-7 space-y-4 text-foreground/80 leading-relaxed">
                                <p>
                                    We host third party links on our page, however, by clicking on this portal means you leave our cookie authority. We are not responsible for any third-party website linked to this page. Once you have entered a new website please see their privacy and cookie policy.
                                </p>
                            </div>
                        </div>

                        {/* Social Media Platforms */}
                        <div className="p-6 bg-accent rounded-[2rem]">
                            <h4 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                                <Globe size={24} />
                                Social Media Platforms
                            </h4>
                            <p className="text-foreground/80 leading-relaxed mb-6">
                                The linked highlights refer to our social media platforms which include:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { name: "Facebook", icon: "📘" },
                                    { name: "Twitter", icon: "🐦" },
                                    { name: "Instagram", icon: "📷" },
                                    { name: "LinkedIn", icon: "💼" }
                                ].map((platform, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-4 bg-white rounded-[1.5rem] border border-accent text-center hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="text-3xl mb-2">{platform.icon}</div>
                                        <p className="text-sm font-semibold text-foreground">{platform.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-sm text-foreground/60 mt-6 italic">
                                Google Analytics may be used when using these sites.
                            </p>
                        </div>

                        {/* Important Notice */}
                        <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20">
                            <div className="flex items-start gap-4">
                                <Shield className="text-primary flex-shrink-0 mt-1" size={32} />
                                <div>
                                    <h4 className="text-lg font-serif text-primary mb-2">Important Notice</h4>
                                    <p className="text-sm text-foreground/80 leading-relaxed">
                                        When you click on external links or social media platforms, you are leaving our website and entering a third-party site. We are not responsible for the privacy practices or content of these external sites. Please review their individual privacy and cookie policies before proceeding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Rights */}
            <section className="py-24 bg-accent/30 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6">
                            Your <span className="text-primary italic">Rights</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Lock size={28} />,
                                title: "Access Your Data",
                                description: "You have the right to request access to the personal information we hold about you"
                            },
                            {
                                icon: <Shield size={28} />,
                                title: "Data Protection",
                                description: "Your data is protected and stored securely in accordance with GDPR regulations"
                            },
                            {
                                icon: <Eye size={28} />,
                                title: "Transparency",
                                description: "We are transparent about what data we collect and how we use it"
                            },
                            {
                                icon: <Cookie size={28} />,
                                title: "Cookie Control",
                                description: "You can manage your cookie preferences at any time through your browser settings"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 bg-white rounded-[2rem] shadow-sm border border-accent hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-primary flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-serif text-primary mb-2">{item.title}</h4>
                                        <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-foreground/70 mb-4">
                        If you have any questions about our privacy and cookie policy, please don't hesitate to contact us.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
