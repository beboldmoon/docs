import * as React from "react";
import { cn } from "@/app/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, glass = false, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl transition-all duration-300",
                    glass
                        ? "bg-glass"
                        : "bg-white border border-gray-100 shadow-sm",
                    hoverEffect && "hover:shadow-xl hover:-translate-y-1",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
