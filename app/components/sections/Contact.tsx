"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const type = formData.get("type") as string;
        const message = formData.get("message") as string;

        try {
            // 1. Save to Supabase
            await supabase.from('inquiries').insert({
                name,
                email,
                type,
                message,
                read: false
            });

            // 2. Open Mail Client (Optional backup)
            const subject = `[${type}] ${name}님의 문의사항`;
            const body = `${message}\n\n----------------\n이름: ${name}\n이메일: ${email}`;

            // Allow user to confirm if they want to open mail app? 
            // For now, we just do it as before, or maybe just relies on DB?
            // Let's keep mailto for immediate "Send" feeling but maybe only if desired.
            // Actually, if we save to DB, mailto is redundant if I check admin. 
            // But for "Static" site ethos, maybe keep it? 
            // Let's keep it but slightly delay or just do it.
            window.location.href = `mailto:aive.msh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Error submitting:", error);
            alert("전송 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
            setTimeout(() => setSuccess(false), 3000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-[120px]" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Info */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="default" className="mb-4 bg-primary/20 text-white border-primary/40">Contact Us</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                                함께 미래를 <span className="text-gradient">코딩해요</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                교육 관련 문의나 프로젝트 제안은 언제든 환영합니다.<br />
                                빠른 시일 내에 답변 드리겠습니다.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="text-accent-pink" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-lg font-medium">aive.msh@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Phone className="text-accent-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-lg font-medium">010-2164-2076</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-lg font-medium">경기도 성남시 분당구</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10" onClick={() => window.open('https://instagram.com/aive.msh', '_blank')}>
                                📸 Instagram
                            </Button>
                            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10" onClick={() => window.open('https://blog.naver.com/beboldmoon', '_blank')}>
                                📝 Blog
                            </Button>
                        </div>
                    </div>

                    {/* Right Form */}
                    <Card glass className="p-8 bg-white/5 border-white/10 backdrop-blur-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">이름</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">이메일</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="example@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium text-gray-300">문의 유형</label>
                                <select
                                    name="type"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [&>option]:text-black"
                                >
                                    <option value="school">학교 교육 문의</option>
                                    <option value="corp">기업 교육 문의</option>
                                    <option value="private">개인/기타 문의</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">메시지</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="문의하실 내용을 입력해주세요."
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent-pink hover:opacity-90 border-0"
                                disabled={loading}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    success ? "메일 앱이 열립니다! ✨" : "이메일 보내기 →"
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
