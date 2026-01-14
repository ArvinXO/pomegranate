"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useBranding } from "./Providers";

const NavItem = ({ title, items, href }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!items) {
        return (
            <Link
                href={href || "#"}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 px-4 py-2 text-sm font-medium"
            >
                {title}
            </Link>
        );
    }

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors duration-200 px-4 py-2 text-sm font-medium">
                <span>{title}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-1 w-64 bg-white border border-accent rounded-xl shadow-xl overflow-hidden z-50 py-2"
                    >
                        {items.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href || "#"}
                                className="block px-4 py-3 text-sm text-foreground/70 hover:bg-accent/50 hover:text-primary transition-all duration-200 border-b border-accent/30 last:border-0"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isIntroFinished } = useBranding();

    const navData = [
        { title: "Our Impact", href: "/impact" },
        {
            title: "Services",
            items: [
                { title: "Overview", href: "/services" },
                { title: "Consultancy & Care Package", href: "/services/consultancy" },
                { title: "Governance", href: "/services/governance" },
                { title: "Gender at Work", href: "/services/gender-at-work" },
                { title: "Research", href: "/services/research" },
                { title: "Workshops, Seminars & Training", href: "/services/workshops" },
            ],
        },
        {
            title: "Our Team",
            items: [
                { title: "About Us", href: "/about" },
                { title: "Work With Us", href: "/work-with-us" },
            ],
        },
        {
            title: "News",
            items: [
                { title: "Our Blogs", href: "/blogs" },
                { title: "Social Media", href: "https://www.instagram.com/pom.hse" },
            ],
        },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isIntroFinished ? 0 : -100,
                opacity: isIntroFinished ? 1 : 0
            }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 // Small delay after intro finish
            }}
            className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-accent"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Area */}
                    <div className="flex items-center min-w-[200px] h-full">
                        <AnimatePresence mode="popLayout">
                            {isIntroFinished && (
                                <motion.div
                                    key="navbar-branding"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link href="/" className="flex items-center space-x-3 group relative z-[101]">
                                        <motion.img
                                            layoutId="hero-logo"
                                            src="/logo.webp"
                                            alt="Pomegranate House"
                                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            transition={{
                                                layout: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                                            }}
                                        />
                                        <span className="hidden sm:flex text-xl font-serif text-primary tracking-tight">
                                            <motion.span
                                                layoutId="brand-text-pomegranate"
                                                transition={{
                                                    layout: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                                                }}
                                            >
                                                Pomegranate
                                            </motion.span>
                                            <motion.span
                                                layoutId="brand-text-house"
                                                className="text-gold italic ml-1 pr-4"
                                                transition={{
                                                    layout: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                                                }}
                                            >
                                                House
                                            </motion.span>
                                        </span>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop Nav */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: isIntroFinished ? 1 : 0,
                            x: isIntroFinished ? 0 : 20
                        }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hidden md:flex items-center space-x-2"
                    >
                        {navData.map((nav, idx) => (
                            <NavItem key={idx} {...nav} />
                        ))}
                        <Link
                            href="/hire-us"
                            className="ml-4 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105 border border-gold/30"
                        >
                            Hire us
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isIntroFinished ? 1 : 0 }}
                        className="md:hidden"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-foreground/70"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-accent overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navData.map((nav, idx) => (
                                <div key={idx} className="block">
                                    {nav.items ? (
                                        <div className="py-2">
                                            <div className="text-sm font-bold text-primary px-2 mb-2 uppercase tracking-wider">{nav.title}</div>
                                            {nav.items.map((item, id) => (
                                                <Link
                                                    key={id}
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block px-4 py-2 text-base text-foreground/70 hover:text-primary"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={nav.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-2 py-3 text-lg font-medium text-foreground/80 hover:text-primary"
                                        >
                                            {nav.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/hire-us"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-6 block w-full text-center px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20"
                            >
                                Hire us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
