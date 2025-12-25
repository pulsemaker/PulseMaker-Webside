import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Bot, ShieldCheck, Gem, Zap, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Hero = () => {
    const containerRef = useRef(null);

    // Mouse tracking for 3D tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Hero Content */}
            <div className="section-container relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-glass-white border border-glass-border backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                    </span>
                    <span className="text-sm text-text-secondary">Powered by Solana</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                >
                    The Ultimate <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-cyber-violet animate-text-shimmer">
                        Solana AI Agent
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-10"
                >
                    PulseMaker combines the speed of Solana with advanced AI to deliver real-time crypto market intelligence.
                    Access AI trading signals with Pine Script charts, use our secure Android & iOS wallet with encrypted login, and earn trading fee revenue share distributed to all token holders.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="primary" size="large">
                        Enter PulseMaker
                    </Button>
                    <Button variant="secondary" size="large">
                        Explore Ecosystem
                    </Button>
                </motion.div>

                {/* 3D Hero Visual */}
                <motion.div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative mt-16 mb-10 mx-auto"
                    style={{ perspective: '1000px' }}
                >
                    {/* 3D Rotating Platform */}
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: 'preserve-3d',
                        }}
                        className="relative mx-auto w-72 h-72 md:w-96 md:h-96"
                    >
                        {/* Glowing base platform */}
                        <motion.div
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Outer ring */}
                            <div
                                className="absolute inset-0 rounded-full border border-glass-border"
                                style={{ transform: 'translateZ(-20px)' }}
                            />

                            {/* Ring with gradient */}
                            <div
                                className="absolute inset-4 rounded-full"
                                style={{
                                    transform: 'translateZ(-10px)',
                                    background: 'conic-gradient(from 0deg, transparent, rgba(0,255,200,0.1), transparent, rgba(99,102,241,0.1), transparent)',
                                }}
                            />
                        </motion.div>

                        {/* Counter-rotating inner ring */}
                        <motion.div
                            animate={{ rotateZ: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-12 rounded-full border border-cyber-violet/30"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Orbital dots */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-primary shadow-glow-teal" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyber-violet shadow-glow-violet" />
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyber-purple" />
                        </motion.div>

                        {/* Center 3D Logo */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            <Logo size="hero" showText={false} />
                        </motion.div>

                        {/* Floating Data Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: i * 0.4,
                                }}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    left: `${20 + i * 12}%`,
                                    top: `${15 + (i % 3) * 25}%`,
                                    backgroundColor: i % 2 === 0 ? '#00ffc8' : '#6366f1',
                                    boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(0,255,200,0.5)' : 'rgba(99,102,241,0.5)'}`,
                                    transform: `translateZ(${20 + i * 10}px)`,
                                }}
                            />
                        ))}

                        {/* Floating labels with 3D effect */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-pulse-dark/90 border border-accent-primary/30 backdrop-blur-sm"
                            style={{
                                transform: 'translateZ(50px)',
                                boxShadow: '0 10px 40px rgba(0,255,200,0.2)',
                            }}
                        >
                            <span className="text-sm text-accent-primary font-medium flex items-center gap-2">
                                <Bot className="w-4 h-4" strokeWidth={2.5} />
                                AI Signals
                            </span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
                            className="absolute top-1/2 -left-12 md:-left-16 -translate-y-1/2 px-4 py-2 rounded-xl bg-pulse-dark/90 border border-cyber-violet/30 backdrop-blur-sm"
                            style={{
                                transform: 'translateZ(40px)',
                                boxShadow: '0 10px 40px rgba(99,102,241,0.2)',
                            }}
                        >
                            <span className="text-sm text-cyber-violet font-medium flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
                                ZK Wallet
                            </span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.6 }}
                            className="absolute top-1/2 -right-12 md:-right-16 -translate-y-1/2 px-4 py-2 rounded-xl bg-pulse-dark/90 border border-cyber-purple/30 backdrop-blur-sm"
                            style={{
                                transform: 'translateZ(40px)',
                                boxShadow: '0 10px 40px rgba(139,92,246,0.2)',
                            }}
                        >
                            <span className="text-sm text-cyber-purple font-medium flex items-center gap-2">
                                <Gem className="w-4 h-4" strokeWidth={2.5} />
                                Revenue Share
                            </span>
                        </motion.div>

                        {/* Glow effect */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(0,255,200,0.15) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)',
                                transform: 'translateZ(-30px)',
                                filter: 'blur(20px)',
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto pt-10"
                >
                    {[
                        { value: '50K+', label: 'Active Users' },
                        { value: '99.9%', label: 'Uptime' },
                        { value: '< 1ms', label: 'Latency' },
                        { value: '100%', label: 'On-Chain' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-2xl md:text-3xl font-heading font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border-2 border-glass-border flex items-start justify-center p-1"
                >
                    <div className="w-1.5 h-2.5 rounded-full bg-accent-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
