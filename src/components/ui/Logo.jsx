import { motion } from 'framer-motion';

const Logo = ({ size = 'default', showText = true, className = '' }) => {
    const sizes = {
        small: { icon: 36, text: 'text-lg' },
        default: { icon: 44, text: 'text-xl' },
        large: { icon: 60, text: 'text-2xl' },
        hero: { icon: 100, text: 'text-3xl' },
    };

    const { icon, text } = sizes[size];

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`flex items-center gap-3 ${className}`}
        >
            {/* Premium 3D Animated Logo */}
            <div
                className="relative"
                style={{
                    width: icon,
                    height: icon,
                    perspective: '600px',
                }}
            >
                {/* Outer glow */}
                <motion.div
                    animate={{
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,255,200,0.4), rgba(99,102,241,0.4))',
                        filter: 'blur(12px)',
                    }}
                />

                {/* Main container with 3D rotation */}
                <motion.div
                    animate={{
                        rotateY: [0, 5, 0, -5, 0],
                        rotateX: [0, -3, 0, 3, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                    style={{
                        transformStyle: 'preserve-3d',
                        background: 'linear-gradient(145deg, #12172a 0%, #0a0f1a 50%, #080c15 100%)',
                        boxShadow: `
              0 4px 30px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(0, 255, 200, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.5)
            `,
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                >
                    {/* Shine sweep effect */}
                    <motion.div
                        animate={{
                            x: ['-150%', '250%'],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatDelay: 2,
                        }}
                        className="absolute inset-0 opacity-30"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                            transform: 'skewX(-20deg)',
                            width: '50%',
                        }}
                    />

                    {/* Logo SVG - Hexagon Pulse Design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            width={icon * 0.75}
                            height={icon * 0.75}
                            viewBox="0 0 64 64"
                            fill="none"
                            className="relative z-10"
                        >
                            {/* Hexagon outline */}
                            <motion.path
                                animate={{
                                    strokeDashoffset: [0, -200],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    strokeDashoffset: { duration: 20, repeat: Infinity, ease: 'linear' },
                                    opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                                }}
                                d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
                                stroke="url(#hexGradient)"
                                strokeWidth="1"
                                strokeDasharray="10 5"
                                fill="none"
                            />

                            {/* Inner hexagon */}
                            <motion.path
                                animate={{ scale: [0.95, 1, 0.95] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                d="M32 12L48 22V42L32 52L16 42V22L32 12Z"
                                fill="url(#innerHexGradient)"
                                stroke="rgba(0,255,200,0.3)"
                                strokeWidth="0.5"
                                style={{ transformOrigin: 'center' }}
                            />

                            {/* Pulse wave - left */}
                            <motion.path
                                animate={{
                                    pathLength: [0, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                d="M20 32 L26 32 L28 24 L30 40 L32 28 L34 36 L36 32 L44 32"
                                stroke="#00ffc8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                style={{ filter: 'drop-shadow(0 0 4px #00ffc8)' }}
                            />

                            {/* Center pulse dot */}
                            <motion.circle
                                animate={{
                                    r: [3, 5, 3],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                cx="32"
                                cy="32"
                                r="4"
                                fill="#00ffc8"
                                style={{ filter: 'drop-shadow(0 0 8px #00ffc8)' }}
                            />

                            {/* Decorative corner accents */}
                            <path d="M32 8L36 10V14L32 16L28 14V10L32 8Z" fill="url(#accentGradient)" opacity="0.8" />
                            <motion.circle
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                cx="32" cy="12" r="2" fill="#00ffc8"
                            />

                            <defs>
                                <linearGradient id="hexGradient" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00ffc8" />
                                    <stop offset="0.5" stopColor="#6366f1" />
                                    <stop offset="1" stopColor="#8b5cf6" />
                                </linearGradient>
                                <linearGradient id="innerHexGradient" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="rgba(99,102,241,0.3)" />
                                    <stop offset="1" stopColor="rgba(139,92,246,0.1)" />
                                </linearGradient>
                                <linearGradient id="accentGradient" x1="28" y1="8" x2="36" y2="16" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00ffc8" />
                                    <stop offset="1" stopColor="#6366f1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Corner frame lines */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent-primary/40 rounded-tl" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent-primary/40 rounded-tr" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyber-violet/40 rounded-bl" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyber-violet/40 rounded-br" />
                </motion.div>

                {/* Orbiting particle */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <motion.div
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-primary"
                        style={{ boxShadow: '0 0 10px #00ffc8, 0 0 20px #00ffc8' }}
                    />
                </motion.div>
            </div>

            {/* Logo Text */}
            {showText && (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`font-heading font-bold tracking-tight ${text}`}
                >
                    <span className="text-white">Pulse</span>
                    <span
                        className="relative"
                        style={{
                            background: 'linear-gradient(135deg, #00ffc8 0%, #6366f1 50%, #8b5cf6 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Maker
                        {/* Underline accent */}
                        <motion.span
                            animate={{ scaleX: [0, 1, 0], x: ['-50%', '0%', '50%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-primary to-transparent"
                            style={{ transformOrigin: 'left' }}
                        />
                    </span>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Logo;
