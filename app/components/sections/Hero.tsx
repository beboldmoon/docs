"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
            {/* Background Blobs */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <Badge variant="default" className="px-4 py-1 text-sm">
                            15년 IT 전문가 + AI 교육 강사
                        </Badge>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit leading-tight">
                            AI 시대,<br />
                            <span className="text-gradient">미래를 코딩하다</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                            야놀자, NHN 등 대기업 데이터베이스 전문가 출신.<br />
                            실무 경험을 바탕으로 살아있는 AI·코딩 교육을 제공합니다.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                강의 문의하기
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                포트폴리오 보기
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center items-center"
                    >
                        {/* Main Circle */}
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-primary/10 to-accent-pink/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/50 shadow-2xl">
                            <span className="text-9xl filter drop-shadow-xl">👩‍💻</span>

                            {/* Floating Icons */}
                            <motion.div
                                className="absolute -top-10 -right-4 text-6xl drop-shadow-lg"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                🤖
                            </motion.div>
                            <motion.div
                                className="absolute top-1/2 -right-12 text-5xl drop-shadow-lg"
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                🧱
                            </motion.div>
                            <motion.div
                                className="absolute bottom-0 -left-4 text-6xl drop-shadow-lg"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                💻
                            </motion.div>
                            <motion.div
                                className="absolute -top-4 left-0 text-5xl drop-shadow-lg"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                🎯
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
