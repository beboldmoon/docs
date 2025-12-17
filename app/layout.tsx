"use client";

import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import { AdminPanel } from "./components/admin/AdminPanel";
import { AdminLogin } from "./components/admin/AdminLogin";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

// Separate component to handle Admin Login Logic inside AuthProvider
function AppContent({ children }: { children: React.ReactNode }) {
  const [showLogin, setShowLogin] = useState(false);

  // Expose a way to open login (using window event for simplicity across components)
  useEffect(() => {
    const handleOpenLogin = () => setShowLogin(true);
    window.addEventListener("open-admin-login", handleOpenLogin);
    return () => window.removeEventListener("open-admin-login", handleOpenLogin);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <AdminPanel />
      {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-gray-900`}>
        <AuthProvider>
          <AppContent>{children}</AppContent>
        </AuthProvider>
      </body>
    </html>
  );
}
