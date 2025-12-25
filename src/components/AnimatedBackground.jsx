import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AnimatedBackground = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-pulse-dark via-pulse-navy to-pulse-darker" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-overlay opacity-50" />

            {/* Primary glow orb - top right */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
            >
                <div className="w-full h-full rounded-full bg-gradient-radial from-cyber-violet/20 via-cyber-violet/5 to-transparent blur-3xl animate-pulse-glow" />
            </motion.div>

            {/* Secondary glow orb - bottom left */}
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            >
                <div className="w-full h-full rounded-full bg-gradient-radial from-accent-glow via-accent-primary/5 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            opacity: 0.1 + Math.random() * 0.3,
                            scale: 0.5 + Math.random() * 0.5,
                        }}
                        animate={{
                            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                        className="absolute w-1 h-1 rounded-full bg-accent-primary"
                        style={{
                            boxShadow: '0 0 10px rgba(0, 255, 200, 0.5)',
                        }}
                    />
                ))}
            </div>

            {/* Rotating ring element */}
            <motion.div
                style={{ rotate }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
            >
                <div className="w-full h-full rounded-full border border-glass-border opacity-20" />
                <div className="absolute top-10 left-1/2 w-2 h-2 rounded-full bg-accent-primary" />
                <div className="absolute bottom-10 left-1/2 w-2 h-2 rounded-full bg-cyber-violet" />
            </motion.div>

            {/* Noise texture */}
            <div className="absolute inset-0 noise-overlay" />
        </div>
    );
};

export default AnimatedBackground;
