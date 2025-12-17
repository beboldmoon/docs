"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { ExpertiseItem } from "@/app/types/expertise";

const initialExpertiseData: ExpertiseItem[] = [
    { id: "1", icon: "🤖", title: "AI & ChatGPT", desc: "ChatGPT 업무 활용, AI 디지털 리터러시, 프롬프트 엔지니어링" },
    { id: "2", icon: "💻", title: "코딩 교육", desc: "스크래치, 파이썬, 레고 스파이크 에센셜/프라임 멘토링" },
    { id: "3", icon: "🔧", title: "로봇 & 메이킹", desc: "핑퐁 로봇, 아두이노 활용, 메이커톤 및 SW 해커톤 대회" },
    { id: "4", icon: "🎯", title: "진로 교육", desc: "빅데이터 전문가, 인공지능 전문가 등 미래 직업 진로 체험" },
    { id: "5", icon: "🏢", title: "기업 교육", desc: "ChatGPT 활용 보고서 작성, SQL 튜닝 및 최적화 사내 교육" },
    { id: "6", icon: "📚", title: "취업 컨설팅", desc: "특성화고 진로 상담, 취업 포트폴리오 및 면접 코칭" },
    { id: "7", icon: "🏆", title: "FLL Challenge", desc: "FIRST LEGO League UNEARTHED 등 로봇 대회 전문 멘토링" },
    { id: "8", icon: "🌐", title: "데이터베이스", desc: "Aurora MySQL, 대용량 데이터베이스 모델링 및 성능 최적화" },
];

import { useState, useEffect } from "react";
import { supabase } from "@/app/lib/supabase";

export function Expertise() {
    const [items, setItems] = useState<ExpertiseItem[]>(initialExpertiseData);

    useEffect(() => {
        const fetchExpertise = async () => {
            const { data } = await supabase
                .from('expertise')
                .select('*')
                .order('created_at', { ascending: true });

            if (data && data.length > 0) {
                setItems(data);
            }
        };
        fetchExpertise();
    }, []);

    return (
        <section id="expertise" className="py-24 bg-gray-50">
            <Container>
                <SectionHeader
                    badge="Expertise"
                    title="전문 분야"
                    description="IT 실무 경험과 교육 노하우를 결합하여 다양한 분야의 전문 교육을 제공합니다."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="p-6 h-full flex flex-col items-center text-center gap-4 hover:border-primary/30 group">
                                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold font-outfit">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
