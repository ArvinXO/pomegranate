"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white pt-20 pb-10" style={{ backgroundColor: '#110906' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center space-x-3 group">
                            <img
                                src="/logo.webp"
                                alt="Pomegranate House Logo"
                                className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <span className="flex text-2xl font-serif tracking-tight">
                                <span className="text-primary">Pomegranate</span>
                                <span className="text-secondary italic ml-1 pr-4">House</span>
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed max-w-xs">
                            Integrating gender equality worldwide through professional consultancy, philosophy, and in-depth research.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Col 1 */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-primary">Services</h4>
                        <ul className="space-y-4">
                            {["Governance", "Gender at Work", "Research", "Consultancy"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav Col 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-primary">Organisation</h4>
                        <ul className="space-y-4">
                            {["Our Impact", "About Us", "Work With Us", "Our News"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-primary">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-white/60">
                                <Mail size={18} className="mt-1 text-primary shrink-0" />
                                <span>info@pomegranatehouse.org</span>
                            </li>
                            <li className="flex items-start space-x-3 text-white/60">
                                <MapPin size={18} className="mt-1 text-primary shrink-0" />
                                <span>London, United Kingdom</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors duration-200"
                            >
                                <span>Hire us today</span>
                                <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm">
                    <p>© {currentYear} Pomegranate House. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
