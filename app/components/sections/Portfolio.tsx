"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { PortfolioItem, PortfolioCategory } from "@/app/types/portfolio";

type TabCategory = "All" | PortfolioCategory;

const initialData: PortfolioItem[] = [
    { id: "1", name: "서울 선유초등학교", category: "School", detail: "초등학교 | 레고 스파이크 에센셜", count: "8회", year: "2024", month: "03" },
    { id: "2", name: "홍성 홍북중학교", category: "School", detail: "중학교 | FLL 멘토링", count: "16회", year: "2024", month: "04" },
    { id: "3", name: "인천 재능고등학교", category: "School", detail: "고등학교 | SW 해커톤 멘토링", count: "4회", year: "2024", month: "05" },
    { id: "4", name: "서울 밀알고등학교", category: "School", detail: "고등학교 | 오스모 잼 코딩", count: "12회", year: "2024", month: "06" },
    { id: "5", name: "인천 인주중학교", category: "School", detail: "중학교 | 디지털 새싹 리듬 코딩", count: "8회", year: "2024", month: "07" },
    { id: "6", name: "㈜부강산업", category: "Corp", detail: "기업 | ChatGPT 활용 보고서 작성", count: "2회", year: "2024", month: "08" },
    { id: "7", name: "㈜오토마", category: "Corp", detail: "기업 | ChatGPT 업무 활용", count: "3회", year: "2024", month: "09" },
    { id: "8", name: "㈜야놀자", category: "Corp", detail: "기업 | SQL 튜닝 사내 교육", count: "5회", year: "2024", month: "10" },
];

import { supabase } from "@/app/lib/supabase";

export function Portfolio() {
    const [activeTab, setActiveTab] = useState<TabCategory>("All");
    const [items, setItems] = useState<PortfolioItem[]>(initialData);
    const [totalHours] = useState<string>("1000+");

    useEffect(() => {
        const fetchPortfolio = async () => {
            const { data } = await supabase
                .from('portfolio')
                .select('*')
                .order('year', { ascending: false })
                .order('month', { ascending: false });

            if (data && data.length > 0) {
                setItems(data);
            }
        };
        fetchPortfolio();
    }, []);

    const filteredData = activeTab === "All"
        ? items
        : items.filter(item => item.category === activeTab);

    // Sort by integer year/month descending
    const sortedData = [...filteredData].sort((a, b) => {
        const dateA = parseInt((a.year || "0") + (a.month || "0"));
        const dateB = parseInt((b.year || "0") + (b.month || "0"));
        return dateB - dateA;
    });

    return (
        <section id="portfolio" className="py-24 bg-white">
            <Container>
                <SectionHeader
                    badge="Portfolio"
                    title="강의 및 프로젝트 실적"
                    description={`총 ${totalHours} 시간의 강의 경력, 다양한 기관 및 기업과 함께한 교육 현황입니다.`}
                />

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    {["All", "School", "Corp"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as TabCategory)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-primary text-white shadow-lg scale-105"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {tab === "All" ? "전체" : tab === "School" ? "학교 교육" : "기업 교육"}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {sortedData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="p-6 hover:border-primary/50 text-left relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="text-6xl font-bold text-gray-900">{item.year}</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <Badge variant={item.category === "School" ? "school" : "corp"} className="mb-2">
                                            {item.category === "School" ? "학교" : "기업"}
                                        </Badge>
                                        <span className="text-sm font-medium text-gray-400">
                                            {item.year}. {item.month}
                                        </span>
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold text-gray-900 line-clamp-1 mb-1">{item.name}</h4>
                                        <span className="text-sm font-semibold text-primary">{item.count}</span>
                                        <p className="text-gray-600 text-sm border-t border-gray-100 pt-3 mt-3 line-clamp-2">
                                            {item.detail}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </section>
    );
}
