"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const careerData = [
    {
        period: "2023 ~ Current",
        role: "AI 융합 코딩 교육 강사",
        company: "대담쌤 BeBold (Ashley Moon)",
        desc: "초·중·고 및 기업 대상 AI/코딩 교육, 디지털 리터러시 강의",
    },
    {
        period: "2020 - 2023",
        role: "DBA 매니저",
        company: "㈜야놀자",
        desc: "Aurora MySQL 운영, 대용량 트래픽 처리, AWS re:Invent 2021 참석",
    },
    {
        period: "2018 - 2020",
        role: "DBA 선임",
        company: "㈜NHN",
        desc: "70여개 서비스 DB 튜닝 및 기술 지원, 성능 최적화",
    },
    {
        period: "2016 - 2018",
        role: "DA / DBA",
        company: "㈜NHN ACE",
        desc: "데이터 모델링, 광고 플랫폼 데이터베이스 최적화",
    },
    {
        period: "2010 - 2016",
        role: "DBA",
        company: "㈜이노트리, ㈜엑시엄",
        desc: "삼성전자 글로벌 쇼핑몰, SKT 등 대형 프로젝트 수행",
    },
];

export function CareerTimeline() {
    return (
        <section id="career" className="py-24 bg-gray-50 overflow-hidden">
            <Container>
                <SectionHeader
                    badge="Experience"
                    title="Career Timeline"
                    description="데이터베이스 전문가에서 AI 교육 전문가로, 15년간의 여정"
                />

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent-pink to-accent-blue rounded-full opacity-20 hidden md:block" />

                    <div className="space-y-12 relative">
                        {careerData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <Card
                                        className={`p-6 md:p-8 relative ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                                        hoverEffect={true}
                                    >
                                        <span className="text-primary font-bold text-sm block mb-2">{item.period}</span>
                                        <h3 className="text-xl font-bold font-outfit text-gray-900">{item.company}</h3>
                                        <p className="text-lg font-semibold text-gray-700 mb-2">{item.role}</p>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </Card>
                                </div>

                                {/* Center Marker (Desktop) */}
                                <div className="relative hidden md:flex items-center justify-center w-12 h-12 shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent-pink shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10" />
                                    <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                                </div>

                                {/* Empty Spacer for Balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
