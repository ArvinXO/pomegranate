"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Heart, Leaf, Users, Scale, Globe } from "lucide-react";

export default function TermsPage() {
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
                        Terms & <span className="text-primary italic">Conditions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/70 text-center max-w-3xl mx-auto"
                    >
                        Our commitment to equality, sustainability, and ethical practices
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full mt-8"
                    />
                </div>
            </section>

            {/* Policy Overview Cards */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                icon: <Scale className="text-primary" size={40} />,
                                title: "Equality Policy",
                                description: "Our commitment to creating an inclusive, fair, and respectful workplace for all"
                            },
                            {
                                icon: <Leaf className="text-primary" size={40} />,
                                title: "Sustainability Policy",
                                description: "Our dedication to environmental responsibility and sustainable practices"
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
                                <h3 className="text-2xl font-serif text-primary mb-3">{item.title}</h3>
                                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equality Policy Section */}
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
                            <Scale className="text-primary" size={48} />
                            <h2 className="text-4xl lg:text-5xl font-serif text-foreground">
                                Equality <span className="text-primary italic">Policy</span>
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-accent space-y-8">
                        {/* Policy Statement */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                Policy Statement
                            </h3>
                            <div className="pl-7 space-y-4 text-foreground/80 leading-relaxed">
                                <p>
                                    Pomegranate House recognises that discrimination and victimisation is unacceptable and that it is in the interests of the Company and its employees to utilise the skills of the total workforce. It is the aim of the Company to ensure that no employee or job applicant receives less favourable facilities or treatment (either directly or indirectly) in recruitment or employment on grounds of age, disability, gender / gender reassignment, marriage / civil partnership, pregnancy / maternity, race, religion or belief, sex, or sexual orientation (the protected characteristics).
                                </p>
                                <p>
                                    Our aim is that our workforce will be truly representative of all sections of society and each employee feels respected and able to give of their best.
                                </p>
                                <p>
                                    We oppose all forms of unlawful and unfair discrimination or victimisation. To that end the purpose of this policy is to provide equality and fairness for all in our employment.
                                </p>
                                <p>
                                    All employees, whether part-time, full-time or temporary, will be treated fairly and with respect. Selection for employment, promotion, training or any other benefit will be on the basis of aptitude and ability. All employees will be helped and encouraged to develop their full potential and the talents and resources of the workforce will be fully utilised to maximise the efficiency of the organisation.
                                </p>
                                <p>
                                    Our staff will not discriminate directly or indirectly, or harass customers or clients because of age, disability, gender reassignment, pregnancy and maternity, race, religion or belief, sex, and sexual orientation in the provision of the Company's goods and services.
                                </p>
                                <p>
                                    This policy and the associated arrangements shall operate in accordance with statutory requirements. In addition, full account will be taken of any guidance or Codes of Practice issued by the Equality and Human Rights Commission, any Government Departments, and any other statutory bodies.
                                </p>
                            </div>
                        </div>

                        {/* Our Commitment */}
                        <div>
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                Our Commitment
                            </h3>
                            <div className="pl-7">
                                <ul className="space-y-3 text-foreground/80">
                                    {[
                                        "To create an environment in which individual differences and the contributions of all our staff are recognised and valued.",
                                        "Every employee is entitled to a working environment that promotes dignity and respect to all. No form of intimidation, bullying or harassment will be tolerated.",
                                        "Training, development, and progression opportunities are available to all staff.",
                                        "To promote equality in the workplace which we believe is good management practice and makes sound business sense.",
                                        "We will review all our employment practices and procedures to ensure fairness.",
                                        "Breaches of our equality policy will be regarded as misconduct and could lead to disciplinary proceedings.",
                                        "This policy is fully supported by senior management and has been agreed with trade unions and/or employee representatives.",
                                        "The policy will be monitored and reviewed annually."
                                    ].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-accent/50 rounded-[2rem] border border-accent">
                                <h4 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                                    <Users size={24} />
                                    Management Responsibilities
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                                    Responsibility for ensuring the effective implementation and operation of the arrangements will rest with the Chief Executive. Directors / Managers will ensure that they and their staff operate within this policy and arrangements, and that all reasonable and practical steps are taken to avoid discrimination.
                                </p>
                            </div>

                            <div className="p-6 bg-accent/50 rounded-[2rem] border border-accent">
                                <h4 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                                    <Heart size={24} />
                                    Staff Responsibilities
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                                    Responsibility for ensuring that there is no unlawful discrimination rests with all staff and the attitudes of staff are crucial to the successful operation of fair employment practices.
                                </p>
                            </div>
                        </div>

                        {/* Rights of Disabled People */}
                        <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20">
                            <h4 className="text-xl font-serif text-primary mb-4">Rights of Disabled People</h4>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                The Company attaches particular importance to the needs of disabled people. Under the terms of this policy, managers are required to make reasonable adjustments to maintain the services of an employee who becomes disabled, include disabled people in training/development programmes, and give full and proper consideration to disabled people who apply for jobs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Policy Section */}
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
                            <Leaf className="text-primary" size={48} />
                            <h2 className="text-4xl lg:text-5xl font-serif text-foreground">
                                Sustainability <span className="text-primary italic">Policy</span>
                            </h2>
                        </div>
                        <p className="text-sm text-foreground/60 mb-4">Last Reviewed: 25/05/21 | Next Review: 25/05/22</p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-accent space-y-8">
                        {/* Mission Statement */}
                        <div className="p-6 bg-accent rounded-[2rem]">
                            <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                                <Globe className="text-primary" size={28} />
                                Mission Statement
                            </h3>
                            <p className="text-foreground/80 leading-relaxed">
                                Pomegranate House recognises that it has a responsibility to the environment beyond legal and regulatory requirements. We are committed to reducing our environmental impact and continually improving our environmental performance as an integral part of our business strategy and operating methods, with regular review points. We will encourage customers, suppliers and other stakeholders to do the same.
                            </p>
                        </div>

                        {/* Policy Areas */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Paper",
                                    items: [
                                        "Minimise the use of paper in the office",
                                        "Reduce packaging as much as possible",
                                        "Buy recycled and recyclable paper products",
                                        "Reuse and recycle all paper where possible"
                                    ]
                                },
                                {
                                    title: "Energy and Water",
                                    items: [
                                        "Reduce the amount of energy used",
                                        "Switch off lights and equipment when not in use",
                                        "Adjust heating with energy consumption in mind",
                                        "Consider energy efficiency when purchasing"
                                    ]
                                },
                                {
                                    title: "Office Supplies",
                                    items: [
                                        "Evaluate if needs can be met another way",
                                        "Assess environmental impact of new products",
                                        "Favour environmentally friendly products",
                                        "Reuse and recycle everything possible"
                                    ]
                                },
                                {
                                    title: "Transportation",
                                    items: [
                                        "Reduce travel to necessary trips only",
                                        "Promote alternatives like video conferencing",
                                        "Accommodate public transport users",
                                        "Favour 'green' vehicles"
                                    ]
                                }
                            ].map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-accent/50 rounded-[2rem] border border-accent hover:shadow-lg transition-shadow duration-300"
                                >
                                    <h4 className="text-lg font-serif text-primary mb-4">{section.title}</h4>
                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Culture & Commitment */}
                        <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20">
                            <h4 className="text-xl font-serif text-primary mb-4">Our Culture & Commitment</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground/80">
                                <div className="flex items-start gap-2">
                                    <Shield size={20} className="text-primary mt-1 flex-shrink-0" />
                                    <span>Comply with all regulatory requirements</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Users size={20} className="text-primary mt-1 flex-shrink-0" />
                                    <span>Involve staff in policy implementation</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Leaf size={20} className="text-primary mt-1 flex-shrink-0" />
                                    <span>Continually improve environmental performance</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Globe size={20} className="text-primary mt-1 flex-shrink-0" />
                                    <span>Use local labour and materials where available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Last Updated */}
            <section className="py-12 bg-accent/30">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-foreground/60 italic">
                        These policies are reviewed regularly to ensure they remain current and effective.
                        For questions or concerns, please contact us.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
