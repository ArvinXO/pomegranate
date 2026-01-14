"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBranding } from "./Providers";

export default function EntranceAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const { finishIntro } = useBranding();

    useEffect(() => {
        // Hide animation after 2.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            finishIntro();
        }, 2500);

        return () => clearTimeout(timer);
    }, [finishIntro]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 1, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                        {/* Shimmering Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                            }}
                            className="relative"
                        >
                            <motion.img
                                layoutId="hero-logo"
                                src="/pom.webp"
                                alt="Pomegranate House"
                                className="h-32 w-auto object-contain z-50 mr-8 md:mr-0"
                                transition={{
                                    layout: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                                }}
                            />

                            {/* Refined Sweep Effect */}
                            <motion.div
                                initial={{ x: "-150%", skewX: -20 }}
                                animate={{ x: "250%", skewX: -20 }}
                                transition={{
                                    duration: 2,
                                    delay: 0.5,
                                    ease: [0.45, 0, 0.55, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-[60]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                            className="h-24 w-px bg-primary/20 hidden md:block origin-top"
                        />

                        {/* Elegant Text Reveal */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                                transition: { delay: 0.8, duration: 1, ease: "easeOut" }
                            }}
                            className="text-center md:text-left relative overflow-hidden"
                        >
                            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-4 select-none relative">
                                <motion.span
                                    layoutId="brand-text-pomegranate"
                                    className="inline-block"
                                    transition={{
                                        layout: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                                    }}
                                >
                                    Pomegranate
                                </motion.span>
                                <motion.span
                                    layoutId="brand-text-house"
                                    transition={{
                                        layout: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                                    }}
                                    className="text-primary italic ml-2 inline-block"
                                >
                                    House
                                </motion.span>

                                {/* Text Sweep */}
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 1.2,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
                                />
                            </h1>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="text-xs uppercase tracking-[0.6em] text-primary font-bold"
                            >
                                A House of Research
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Premium Sliding Panels */}
                    <motion.div
                        exit={{ x: "-100%" }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                        className="absolute inset-y-0 left-0 w-1/2 bg-white -z-10"
                    />
                    <motion.div
                        exit={{ x: "100%" }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                        className="absolute inset-y-0 right-0 w-1/2 bg-white -z-10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
