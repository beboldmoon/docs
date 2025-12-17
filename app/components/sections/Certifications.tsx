"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const certs = [
    { name: "SQLP", desc: "SQL 전문가 (국가공인)", icon: "🏅" },
    { name: "DAP", desc: "데이터 아키텍처 전문가", icon: "🏅" },
    { name: "AI융합코딩교육지도사", desc: "AI 융합 교육 전문 자격", icon: "🎓" },
    { name: "디지털 PBL 에듀케이터", desc: "프로젝트 기반 학습 2급", icon: "📜" },
];

export function Certifications() {
    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <SectionHeader
                    badge="Certifications"
                    title="보유 자격증"
                    description="전문성을 입증하는 국가공인 자격증 및 지도사 자격입니다."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-8 flex flex-col items-center text-center gap-4 hover:border-primary transition-all group">
                                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {cert.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-outfit text-gray-900">{cert.name}</h3>
                                <p className="text-gray-600">{cert.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
