"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Not strictly needed for single page scroll but good for future
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const navItems = [
    { name: "About", href: "#about" },
    { name: "전문분야", href: "#expertise" },
    { name: "경력", href: "#career" },
    { name: "포트폴리오", href: "#portfolio" },
];

// import { useAdmin } from "@/app/context/AdminContext";

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    // const { openAdmin } = useAdmin();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isOpen ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold font-outfit text-gradient">
                        대담쌤 BeBold
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            강의 문의
                        </Button>
                        <button
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Admin Login"
                            onClick={() => window.dispatchEvent(new Event("open-admin-login"))}
                        >
                            <Lock className="w-4 h-4" />
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <Container className="py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 font-medium py-2 block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button variant="primary" className="w-full" onClick={() => {
                                setIsOpen(false);
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                강의 문의
                            </Button>
                            <div className="pt-2 border-t border-gray-100">
                                <button
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-600 py-2 w-full"
                                    onClick={() => {
                                        setIsOpen(false);
                                        window.dispatchEvent(new Event("open-admin-login"));
                                    }}
                                >
                                    <Lock className="w-4 h-4" />
                                    <span className="text-sm">관리자 로그인</span>
                                </button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
