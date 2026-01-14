"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImpactPage() {
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
                        Our <span className="text-primary italic">Impact</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/70 text-center max-w-3xl mx-auto"
                    >
                        Bridging grassroots realities to global power through feminist, decolonial research and strategy
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            Our <span className="text-primary italic">Philosophy</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-foreground/80 leading-relaxed text-center"
                        >
                            The pomegranate has always symbolised <span className="font-semibold text-primary">strength, knowledge, health and new beginnings</span>. Each seed of a pomegranate is unique, and we approach each of our clients within the prism of individualism.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-foreground/80 leading-relaxed text-center"
                        >
                            As a house of ideas, our aim is to provide each institution with a personal vision, plan and structure to create an efficient and effective means of delivering their message while ensuring gender is considered.
                        </motion.p>

                        {/* Strategy Diagram */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="my-16 flex justify-center"
                        >
                            <div className="relative w-full max-w-md aspect-square">
                                <Image
                                    src="/strategy-diagram.png"
                                    alt="Pomegranate House Strategy - Gender at the center with Research, Individualism, and Philosophy"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-12 bg-accent rounded-[2.5rem] shadow-sm border border-accent"
                        >
                            <p className="text-xl text-foreground/80 leading-relaxed text-center mb-6">
                                Pomegranate House brings in academic theories of <span className="font-semibold text-primary">business, governance, psychology and philosophy</span> under one roof. We analyse the client's philosophies and culture in order to create and implement new theories.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed text-center">
                                Our ways of research and testing is applicable for governance structures locally, nationally and globally.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bridging Realities Section */}
            <section className="py-24 bg-accent/30 relative overflow-hidden">
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-12 text-center"
                        >
                            We Bridge <span className="text-primary italic">Grassroots Realities</span> to Global Power
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p className="text-xl text-foreground/80 leading-relaxed text-center">
                                Pomegranate House is a <span className="font-semibold text-primary">feminist, decolonial research and strategy hub</span>. We use citizen data, lived experience, and local knowledge to drive structural change, from local communities to the United Nations.
                            </p>

                            <p className="text-2xl font-serif text-primary text-center italic py-8">
                                We don't just collect data; we shift who holds it, who uses it, and who benefits from it.
                            </p>

                            <p className="text-xl text-foreground/80 leading-relaxed text-center">
                                Whether we advise governments, support civil society, or reimagine progress metrics, our work builds systems rooted in justice.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            History & <span className="text-primary italic">Creation</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-foreground/80 leading-relaxed"
                        >
                            It is about time to have an organisation that focuses on making the world equal, in gender and other misconceptions. Pomegranate House was founded from working on a decade worth of work on gender inequality, sexual violence, mental health, psychology, radicalisation, diplomacy and other philosophical concepts.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-foreground/80 leading-relaxed"
                        >
                            An interesting path came when discussing a global governance concept where the much needed balance and opportunity to create a healthy world and new way of thinking did not exist. Working on the main concepts of what could help the world, Pomegranate House came up with a solution that helps everyone. A form of "global therapy" to create the life of peace, everyone would want.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-12 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden my-12"
                        >
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
                            <p className="text-2xl font-serif italic mb-4 relative z-10 text-center">
                                "Pomegranate House is a brilliant concept, this is a much needed style of thinking, and has the possibility to fill the gap"
                            </p>
                            <p className="text-sm uppercase tracking-wider font-bold text-secondary relative z-10 text-center">
                                Global Diplomatic Forum | Oct 2019
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-foreground/80 leading-relaxed text-center font-semibold"
                        >
                            Pomegranate House is the new voice of consultancy. Our research captures the clients identity and culture, and integrates gender balance effectively without disrupting your norm.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Gender Dividends Section */}
            <section className="py-24 bg-accent/30 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            Why <span className="text-primary italic">Gender Dividends</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-12 bg-white rounded-[2.5rem] shadow-sm border border-accent"
                        >
                            <p className="text-2xl font-serif text-foreground text-center leading-relaxed mb-6">
                                Research by <span className="font-bold text-primary">McKinsey</span> found that, if women are incorporated into the work stream equally, global GDP could grow by{" "}
                                <span className="text-primary font-bold">$28 trillion by 2025</span>.
                            </p>
                            <p className="text-lg text-foreground/70 text-center">
                                Depending on the location, between 49% and 51% of the world's population is female. In most areas of global society, females are forgotten or not acknowledged within systems.
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-foreground/80 leading-relaxed"
                        >
                            Barriers to achieving true gender parity include unconscious bias, which derives from social, religious or stereotypical concepts on what men, women or others should or should not be. These barriers originate from both men and women. These barriers are incorporated into the individuals' internal and external culture by association.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-primary font-semibold text-center py-4"
                        >
                            However, culture and social bias are not the same.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-foreground/80 leading-relaxed"
                        >
                            Pomegranate House understands the culture of a client. We focus on the importance of philosophy and strive to eliminate any bias. We provide a platform for clients' culture and philosophy to flourish long-term, in the most efficient and effective ways possible.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* UN SDGs Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
                        >
                            Where Does Pomegranate House <span className="text-primary italic">Fit</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 bg-primary mx-auto rounded-full"
                        />
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-foreground/80 leading-relaxed text-center"
                        >
                            Our global culture creates a sense of accountability. Pomegranate House incorporates the <span className="font-semibold text-primary">United Nations Sustainable Development Goals</span> within each project.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-accent rounded-[2.5rem] shadow-sm border border-accent"
                        >
                            <p className="text-lg text-foreground/80 leading-relaxed text-center mb-6">
                                We believe Pomegranate House can reduce inequality and promote gender equality. We can create partnerships for UN goals by promoting peaceful and inclusive societies where sustainable development can thrive.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed text-center">
                                We provide access to justice for all and build effective, accountable and inclusive institutions at all levels.
                            </p>
                        </motion.div>

                        {/* UN SDGs Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/un-sdgs.png"
                                alt="The 17 United Nations Sustainable Development Goals"
                                fill
                                className="object-contain bg-white p-8"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl font-serif text-primary text-center italic pt-8"
                        >
                            Pomegranate House can touch each one of the 17 Sustainable Development Goals by 2030.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-serif mb-8"
                    >
                        Ready to Learn More?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl mb-12 text-white/90"
                    >
                        If you want to read more about our philosophy, please visit our blog to find out more.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/blog"
                            className="inline-block px-12 py-6 bg-white text-primary rounded-full font-bold text-xl hover:bg-accent transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            Read More
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
