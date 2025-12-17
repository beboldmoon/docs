"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/app/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { LogOut, Plus, Trash2, Edit2, Loader2 } from "lucide-react";

export function AdminDashboard() {
    const { user, signOut } = useAuth();
    const [activeTab, setActiveTab] = useState<"expertise" | "portfolio" | "inquiries">("expertise");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user, activeTab]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data: fetchedData, error } = await supabase
                .from(activeTab)
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setData(fetchedData || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("정말 삭제하시겠습니까?")) return;
        try {
            const { error } = await supabase.from(activeTab).delete().eq('id', id);
            if (error) throw error;
            fetchData(); // Refresh website
        } catch (error) {
            console.error("Delete failed:", error);
            alert("삭제에 실패했습니다.");
        }
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <Container>
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Badge variant="default" className="mb-2">Admin Dashboard</Badge>
                        <h1 className="text-3xl font-bold">관리자 페이지</h1>
                        <p className="text-gray-500">환영합니다, {user.email}님</p>
                    </div>
                    <Button variant="outline" onClick={() => signOut()} className="flex gap-2">
                        <LogOut className="w-4 h-4" /> 로그아웃
                    </Button>
                </div>

                <div className="flex gap-4 mb-6 border-b border-gray-200">
                    <button
                        className={`pb-3 px-1 font-medium ${activeTab === "expertise" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
                        onClick={() => setActiveTab("expertise")}
                    >
                        전문 분야
                    </button>
                    <button
                        className={`pb-3 px-1 font-medium ${activeTab === "portfolio" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
                        onClick={() => setActiveTab("portfolio")}
                    >
                        포트폴리오
                    </button>
                    <button
                        className={`pb-3 px-1 font-medium ${activeTab === "inquiries" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
                        onClick={() => setActiveTab("inquiries")}
                    >
                        문의 내역
                    </button>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {/* Header Action */}
                        {activeTab !== "inquiries" && (
                            <div className="flex justify-end">
                                <Button variant="primary" className="flex gap-2" onClick={() => alert("기능 구현 중: 데이터 추가는 Supabase 대시보드를 이용해주세요.")}>
                                    <Plus className="w-4 h-4" /> 새 항목 추가
                                </Button>
                            </div>
                        )}

                        {/* Data List */}
                        {data.map((item) => (
                            <Card key={item.id} className="p-4 flex justify-between items-center bg-white shadow-sm">
                                <div>
                                    <h3 className="font-bold">{item.title || item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.desc || item.detail || item.message}</p>
                                    {activeTab === "inquiries" && <p className="text-xs text-blue-500 mt-1">{item.email}</p>}
                                </div>
                                <div className="flex gap-2">
                                    {activeTab !== "inquiries" && (
                                        <Button size="sm" variant="ghost" onClick={() => alert("Supabase 대시보드에서 수정해주세요.")}>
                                            <Edit2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                    <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(item.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </Card>
                        ))}

                        {data.length === 0 && (
                            <div className="text-center py-12 text-gray-400">
                                데이터가 없습니다.
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </div>
    );
}
