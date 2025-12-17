"use client";

import { cn } from "@/app/lib/utils";

const stats = [
    "15년+ IT 실무 경험",
    "2025년 부터",
    "AWS re:Invent 참석",
    "SQLP 전문가 자격",
    "초·중·고 맞춤 교육",
    "기업 교육 전문",
    "데이터베이스 전문가",
    "창의 융합 교육",
];

export function StatsMarquee() {
    return (
        <div className="bg-dark py-6 overflow-hidden border-y border-white/10">
            <div className="relative flex w-full overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-16 min-w-full items-center">
                    {/* Duplicate list for seamless loop */}
                    {[...stats, ...stats, ...stats].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-white text-lg md:text-xl font-medium">
                            <span className="text-accent-pink text-2xl">✓</span>
                            {stat}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
