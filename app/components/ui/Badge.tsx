import * as React from "react";
import { cn } from "@/app/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "school" | "corp" | "private";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-primary/10 text-primary border-primary/20",
        school: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
        corp: "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
        private: "bg-gray-100 text-gray-600 border-gray-200",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
