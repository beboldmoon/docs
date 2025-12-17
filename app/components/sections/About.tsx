"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export function About() {
    const checklist = [
        "야놀자, NHN 등 대기업 DBA 경력",
        "SQLP · DAP · AI융합코딩교육지도사",
        "디지털 PBL 에듀케이터 2급",
        "AWS re:Invent 2021 참석",
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image/Emoji Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent-pink/10 to-accent-blue/10 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="text-9xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">🎓</span>

                            {/* Decorative circle */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div className="space-y-4">
                            <Badge variant="default">About Me</Badge>
                            <h2 className="text-4xl font-bold font-outfit">
                                복잡한 기술을<br />
                                <span className="text-gradient">쉽고 재미있게</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                15년 이상의 IT 실무 경험과 교육 역량을 바탕으로, 학생들과 기업 임직원들에게 실질적인 도움이 되는 AI·코딩 교육을 제공합니다. 단순히 지식을 전달하는 것을 넘어, 문제를 해결하고 새로운 가치를 창출하는 코딩의 즐거움을 알려드립니다.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {checklist.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg font-medium text-gray-800"
                                >
                                    <CheckCircle2 className="text-accent-pink w-6 h-6" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            경력 더보기
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
