import * as React from "react";

// User didn't ask for cva explicitly but it's good practice. I'll stick to simple cn + props for now to minimize install steps unless I install cva.
// I'll install cva. Wait, I didn't install cva in the plan. I will implement without cva to be safe or just add it.
// I'll implement without cva to avoid "install cva" step if I can.
// Actually, I can use a simple switch or map.

import { cn } from "@/app/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30",
            outline: "border-2 border-primary text-primary hover:bg-primary/10",
            ghost: "text-gray-600 hover:text-primary hover:bg-gray-100/50",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
