"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white pt-32 pb-12 relative overflow-hidden" style={{ backgroundColor: '#110906' }}>
            {/* Persian Floral Overlay */}
            <div className="absolute inset-0 opacity-[0.03] persian-floral-bg invert" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Col */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-flex items-center space-x-3 group">
                            <img
                                src="/logo.webp"
                                alt="Pomegranate House Logo"
                                className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                            <span className="flex text-2xl font-serif tracking-tight">
                                <span className="text-gold">Pomegranate</span>
                                <span className="text-white italic ml-1 pr-4">House</span>
                            </span>
                        </Link>
                        <p className="text-white/40 leading-relaxed max-w-xs font-light text-sm">
                            Integrating gender equality worldwide through professional consultancy, philosophy, and in-depth academic research.
                        </p>
                        <div className="flex space-x-5">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href={Icon === Instagram ? "https://www.instagram.com/pom.hse" : "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[#110906] transition-all duration-500"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Col 1 */}
                    <div>
                        <h4 className="text-sm font-bold mb-10 text-gold uppercase tracking-[0.2em]">Services</h4>
                        <ul className="space-y-5">
                            {["Governance", "Gender at Work", "Research", "Consultancy"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/40 hover:text-gold transition-colors duration-300 text-sm font-light">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav Col 2 */}
                    <div>
                        <h4 className="text-sm font-bold mb-10 text-gold uppercase tracking-[0.2em]">Organisation</h4>
                        <ul className="space-y-5">
                            {["Our Impact", "About Us", "Work With Us", "Our News"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/40 hover:text-gold transition-colors duration-300 text-sm font-light">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-sm font-bold mb-10 text-gold uppercase tracking-[0.2em]">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 text-white/40">
                                <Mail size={18} className="mt-1 text-gold shrink-0 opacity-70" />
                                <span className="text-sm font-light">info@pomegranatehouse.org</span>
                            </li>
                            <li className="flex items-start space-x-4 text-white/40">
                                <MapPin size={18} className="mt-1 text-gold shrink-0 opacity-70" />
                                <span className="text-sm font-light">London, United Kingdom</span>
                            </li>
                        </ul>
                        <div className="mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.3em] text-primary hover:text-gold transition-all duration-300 group bg-white/5 px-6 py-3 rounded-full border border-gold/20 hover:bg-white/10"
                            >
                                <span className="border-b border-gold/30 pb-1 group-hover:border-white">Hire our specialists</span>
                                <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-white/20 text-[10px] uppercase tracking-widest font-bold">
                    <p>© {currentYear} Pomegranate House. Refined Excellence.</p>
                    <div className="flex space-x-10">
                        <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent mt-12" />
        </footer>
    );
}
