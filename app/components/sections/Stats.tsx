"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const stats = [
    { value: "15+", label: "Years IT Experience" },
    { value: "100+", label: "Lessons in 2025" },
    { value: "70+", label: "Services Tuned at NHN" },
    { value: "4", label: "Professional Certifications" },
];

export function Stats() {
    return (
        <section className="py-20 bg-dark text-white">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="space-y-2 p-4"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-accent-blue">
                                {stat.value}
                            </div>
                            <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
