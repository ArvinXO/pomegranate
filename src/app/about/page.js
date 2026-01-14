"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState(null);
    const [expandedBio, setExpandedBio] = useState(null);

    const team = [
        {
            name: "Hana Mosavie",
            role: "Founder",
            credentials: "BSc (Hons), Exec MPA, CMgr, FHEA",
            image: "/Hana_Mosavie.webp",
            color: "primary",
            bioSections: [
                {
                    title: "Academic & Professional Excellence",
                    content: "Hana has a decade worth of experience in research globally. Hana has worked with governments around the world and been involved in policy development. Currently, she is a FHEA accredited Visiting Lecturer for the MBA in the UK and Oman, teaching on the Strategy and Global Competitive Environment module, Corporate Entrepreneurship and Innovation module, as well as the Leading People Management module and many more. Recently completed a education governance project."
                },
                {
                    title: "Career Highlights",
                    content: "Hana has worked in the UK Parliament, Great Ormond Street Hospitals Children's Charity, NSPCC, The Children's Society and in London Organising Committee for the Olympic and Paralympic Games in 2012. Hana has worked significantly on the following topics: global governance, gender dividends and inequality, sexual violence, mental health, black and ethnic minority groups, education, de-radicalisation, migration, culture, diplomacy and business analysis."
                },
                {
                    title: "Leadership & Advisory Roles",
                    content: "Hana is also a Trustee of Feast With Us, a homeless charity that uses surplus foods to make nutritious meals and integrate with vulnerable adults, a Policy Advisor to the Global Diplomatic Forum, Country Director for Global Peace Chain and a Board Member for the CMI Women (Chartered Managers Institute)."
                }
            ]
        },
        {
            name: "Professor Adrian Kendry",
            role: "Economic Specialist",
            credentials: "",
            image: "/Professor Adrian Kendry.webp",
            color: "secondary",
            bioSections: [
                {
                    title: "NATO Leadership",
                    content: "Professor Kendry is the former Strategic and Economic Advisor to the Secretary General of NATO (2012-2014), prior to this role, Professor Kendry held the title of NATO Senior Defence Economist (2001-2014), Coordinator of NATO Economic Intelligence (2001-2012) and Admiral William Crowe Chair in Economics (1999)."
                },
                {
                    title: "Strategic Foresight Analysis",
                    content: "From 2015, he held the role of Lead Adviser and contributor on Economics and Security for the NATO Strategic Foresight Analysis programme (incorporating the security implications of the fusion and acceleration of new technologies, underpinning the growth of artificial intelligence and the intended labour-saving use of robots, the insecurity of increasing global and regional inequalities of income and wealth, the broad and long-term security implications of Brexit and the major security challenges and outlook for the Arctic High North and Climate Change insecurity; Russia; and North Africa and the Maghreb)."
                },
                {
                    title: "Academic Contributions",
                    content: "Professor Adrian Kendry has many publications and has presented in multiple countries (including North America, Europe, Russia Far East, Asia, Middle East, North Africa and the Gulf). Since 2018, Professor Kendry has been a Visiting Professor of Economics and Security at University of Winchester and since 2019 a Visiting Professor of Global Economics, Defence and Security, New Model in Technology and Engineering, in Hereford."
                }
            ]
        },
        {
            name: "Vibeke Brask Thomsen",
            role: "Gender Specialist",
            credentials: "",
            image: "/Vibeke Brask Thomsen.webp",
            color: "secondary",
            bioSections: [
                {
                    title: "International Experience",
                    content: "Vibeke has a strong affluent career within Gender. She has worked in Brussels on security, disarmament and nuclear non-proliferation. During her time working with women in post-conflict societies, she witnessed the effects of gender inequality. This experience led Vibeke to start her own successful non-profit organisation (NGO) SheCanHeCan (formerly known as GenderHopes)."
                },
                {
                    title: "SheCanHeCan Mission",
                    content: "With SheCanHeCan, she aims to address the inequalities that we witness every day and works to promote equal representation, equal salaries, equal access to education and jobs for all. She challenges stereotypes so that every person can realise their full potential independent of their gender. SheCanHeCan is Monaco-based which aims to inspire and support girls to take leadership roles by encouraging girls and boys to challenge deeply held, life-limiting gender stereotypes and to realise their full potential. Vibeke works to recognise the achievements and contributions of great female leaders throughout herstory."
                },
                {
                    title: "Board Memberships & Personal Life",
                    content: "Vibeke is also a Board Member of the Global Diplomatic Forum, London, and a Member of the Global Advisory Council of the Akilah Institute for Women, Kigali. She is also a working mother of three young children, who are each great inspiration for the nature of her work."
                }
            ]
        },
        {
            name: "Robert Hester",
            role: "Consumer Goods Specialist",
            credentials: "",
            image: "/Robert Hester.webp",
            color: "secondary",
            bioSections: [
                {
                    title: "FMCG Expertise",
                    content: "Robert has a renowned career within the FMCG sector & has a plethora experience globally as a student, professional, and entrepreneur."
                },
                {
                    title: "Professional Journey",
                    content: "Robert started out as a Management Trainee at AB InBev, one of the world's leading FMCG companies. He then became a founding employee of LVK, a specialist agency which grew ethical early-stage FMCG brands in UK Retail and online E-commerce. Currently he's leading e-commerce for GB & EU at Seedlip, the leading non-alcohol drinks company. Between AB InBev and LVK, Robert Founded Appreciate, the tech-for-good SaaS start-up connecting people with non-profits."
                },
                {
                    title: "Advisory & Leadership Roles",
                    content: "Since 2018, he has maintained positions as Advisor to Life Skills Haiti Foundation, and an Advisory Board Member on the Youth Working Group of the Global Diplomatic Forum (GDF). In 2019 he took up the role of Co-Chair to The Good Governance Partnership, a digital think-tank at the GDF pursuing the engagement of youth in global diplomacy."
                }
            ]
        },
        {
            name: "Dr. Aamenah Hawash",
            role: "Health Specialist",
            credentials: "MBBS, MRCGP, BSc (Hons), DFSRH, PgCertMedEd",
            image: "/Dr. Aamenah Hawash.webp",
            color: "secondary",
            bioSections: [
                {
                    title: "Medical Expertise",
                    content: "Dr Aamenah Hawash is a GMC registered General Practitioner, specialising in medical education, sexual health, and psychosexual medicine."
                },
                {
                    title: "Charitable Work & Community Service",
                    content: "Her interests lay heavily in the charitable sector, working at local foodbanks, including at Sufra, a NW London charity that looks at both the causes and consequences of extreme poverty, homelessness and social isolation in the community. Aamenah is an avid volunteer with Feast With Us (FEAST!) a charity that uses surplus foods to make a nutritious meal and integrate with vulnerable adults. She has a strong affinity to interfaith charitable work and health promotion, volunteering to give health seminar workshops for the local community."
                }
            ]
        }
    ];

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
                        About <span className="text-primary italic">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/70 text-center max-w-3xl mx-auto mb-8"
                    >
                        Like seeds in a pomegranate, each specialist connects to form our complete vision
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full"
                    />
                </div>
            </section>

            {/* Pomegranate Cross-Section Team Display */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Core - Founder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                        className="flex flex-col items-center mb-24"
                    >
                        <div className="relative group cursor-pointer" onClick={() => setSelectedMember(team[0])}>
                            {/* Hover glow effect */}
                            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-primary shadow-2xl group-hover:scale-105 transition-transform duration-300 bg-accent">
                                <Image
                                    src={team[0].image}
                                    alt={team[0].name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <h2 className="text-4xl font-serif text-primary mb-2">{team[0].name}</h2>
                            <p className="text-xl uppercase tracking-wider text-foreground/80 font-bold mb-2">{team[0].role}</p>
                            <p className="text-sm text-foreground/60 italic">{team[0].credentials}</p>
                        </div>
                    </motion.div>

                    {/* Surrounding Chambers - Specialists */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                        {team.slice(1).map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, rotate: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, type: "spring", bounce: 0.3 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedMember(member)}
                            >
                                {/* Card Container */}
                                <div className="bg-accent rounded-[2.5rem] p-6 shadow-sm border border-accent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                    {/* Circular Image */}
                                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary shadow-xl group-hover:border-primary transition-colors duration-300">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-serif text-primary mb-2">{member.name}</h3>
                                        <p className="text-sm uppercase tracking-wider text-foreground/80 font-bold mb-2">{member.role}</p>
                                        {member.credentials && (
                                            <p className="text-xs text-foreground/60 italic mb-4">{member.credentials}</p>
                                        )}

                                        {/* Click to view */}
                                        <div className="flex items-center justify-center gap-2 text-primary text-sm font-semibold mt-4">
                                            <span>View Full Bio</span>
                                            <ChevronDown size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* Seed accent dots */}
                                <div className="flex justify-center gap-2 mt-4">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beautiful Responsive Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", bounce: 0.3 }}
                            className="bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-hidden relative my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg"
                            >
                                <X size={20} className="sm:w-6 sm:h-6" />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                                {/* Header with Image */}
                                <div className="relative bg-gradient-to-br from-primary/10 via-accent to-secondary/10 p-6 sm:p-12">
                                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                                        {/* Image */}
                                        <div className="flex-shrink-0">
                                            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-primary shadow-2xl">
                                                <Image
                                                    src={selectedMember.image}
                                                    alt={selectedMember.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Header Info */}
                                        <div className="flex-1 text-center lg:text-left">
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary mb-2 sm:mb-3">{selectedMember.name}</h2>
                                            <p className="text-lg sm:text-xl uppercase tracking-wider text-foreground/80 font-bold mb-2">{selectedMember.role}</p>
                                            {selectedMember.credentials && (
                                                <p className="text-sm sm:text-base text-foreground/60 italic mb-4 sm:mb-6">{selectedMember.credentials}</p>
                                            )}

                                            {/* Decorative divider */}
                                            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start mt-4">
                                                <div className="w-12 sm:w-16 h-1 bg-primary rounded-full" />
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                                <div className="w-2 h-2 bg-secondary rounded-full" />
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Sections */}
                                <div className="p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
                                    {selectedMember.bioSections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group"
                                        >
                                            {/* Section Title */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                                <h3 className="text-xl sm:text-2xl font-serif text-primary group-hover:text-secondary transition-colors duration-300">
                                                    {section.title}
                                                </h3>
                                            </div>

                                            {/* Section Content */}
                                            <div className="pl-0 sm:pl-7">
                                                <div className="p-4 sm:p-6 bg-accent/50 rounded-[1.5rem] sm:rounded-[2rem] border border-accent hover:shadow-lg transition-all duration-300">
                                                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                                                        {section.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 sm:p-8 bg-accent/30 border-t border-accent">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <p className="text-sm text-foreground/60 italic text-center sm:text-left">
                                            Part of the Pomegranate House team
                                        </p>
                                        <button
                                            onClick={() => setSelectedMember(null)}
                                            className="px-6 sm:px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Quote */}
            <section className="py-32 bg-cream relative overflow-hidden persian-floral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-16 bg-white rounded-[4rem] text-foreground shadow-2xl relative overflow-hidden border border-gold/20"
                    >
                        <div className="absolute inset-0 opacity-[0.03] persian-floral-bg" />
                        <p className="text-3xl sm:text-4xl font-serif italic text-primary relative z-10">
                            "Together, we form the complete fruit of change"
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
