"use client";

import { useAuth } from "@/app/context/AuthContext";
import { AdminDashboard } from "./AdminDashboard";

// Wrapper to lazy load or conditionally render
export function AdminPanel() {
    const { user } = useAuth();

    if (!user) return null;

    return <AdminDashboard />;
}
