"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Lock, Loader2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AdminLogin({ onClose }: { onClose: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Optional: If using password login
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const [isPasswordLogin, setIsPasswordLogin] = useState(true); // Default to password

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            if (isPasswordLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                // Successful login triggers AuthContext update automatically
                onClose();
            } else {
                // Magic Link
                const { error } = await supabase.auth.signInWithOtp({ email });
                if (error) throw error;
                setMessage({ type: 'success', text: '이메일로 로그인 링크를 보냈습니다!' });
            }
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message || '로그인에 실패했습니다.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
            <Card className="w-full max-w-md bg-white p-8 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">관리자 로그인</h2>
                    <p className="text-gray-500 mt-2">
                        {isPasswordLogin ? "이메일과 비밀번호를 입력하세요." : "이메일로 로그인 링크를 받으세요."}
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            placeholder="admin@example.com"
                        />
                    </div>

                    {isPasswordLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            />
                        </div>
                    )}

                    {message && (
                        <div className={`text-sm p-3 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                            {message.text}
                        </div>
                    )}

                    <Button type="submit" variant="primary" className="w-full" disabled={loading}>
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (isPasswordLogin ? "로그인" : "로그인 링크 보내기")}
                    </Button>

                    <div className="text-center text-sm">
                        <button
                            type="button"
                            onClick={() => setIsPasswordLogin(!isPasswordLogin)}
                            className="text-primary hover:underline"
                        >
                            {isPasswordLogin ? "매직 링크로 로그인하기" : "비밀번호로 로그인하기"}
                        </button>
                    </div>
                </form>
            </Card>
        </motion.div>
    );
}
