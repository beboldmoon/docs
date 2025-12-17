import * as React from "react";
import { cn } from "@/app/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    badge?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    light?: boolean;
}

export function SectionHeader({
    badge,
    title,
    description,
    align = "center",
    light = false,
    className,
    ...props
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 mb-12",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
            {...props}
        >
            {badge && (
                <Badge variant="default" className="mb-2">
                    {badge}
                </Badge>
            )}
            <h2
                className={cn(
                    "text-3xl md:text-4xl font-bold font-outfit",
                    light ? "text-white" : "text-gray-900"
                )}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        "text-lg max-w-2xl",
                        light ? "text-gray-300" : "text-gray-600"
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
