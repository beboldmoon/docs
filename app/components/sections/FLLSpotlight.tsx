"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { CheckCircle2 } from "lucide-react";

export function FLLSpotlight() {
    const features = [
        { title: "로봇 게임", desc: "2분 30초 동안 15가지 미션 수행" },
        { title: "혁신 프로젝트", desc: "고고학과 자원 발굴 주제" },
        { title: "Core Values", desc: "Discovery, Innovation, Impact" },
        { title: "팀워크", desc: "역할 분담과 협업 학습" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-600">
                            🏆 2025-2026 시즌 진행중
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-outfit leading-tight">
                            FLL Challenge<br />
                            <span className="text-primary">UNEARTHED</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            홍성 홍북중학교 학생들과 함께 세계 최대 로봇 대회에 도전합니다.
                            단순한 로봇 조립을 넘어, 문제를 해결하고 혁신적인 아이디어를 제안하는 과정을 통해
                            미래 인재로 성장합니다.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors"
                                >
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] lg:h-[500px] rounded-3xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                        <div className="relative z-10 text-center text-white p-8">
                            <span className="text-9xl drop-shadow-lg block mb-4 group-hover:scale-110 transition-transform duration-500">🤖</span>
                            <h3 className="text-2xl font-bold font-outfit">UNEARTHED</h3>
                            <p className="opacity-90">SUBMERGED Season</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl" />
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
