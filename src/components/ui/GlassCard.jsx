import { motion } from 'framer-motion';

const GlassCard = ({
    children,
    className = '',
    hover = true,
    glow = false,
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -4, scale: 1.01 } : {}}
            className={`
        relative overflow-hidden rounded-2xl
        bg-glass-white backdrop-blur-xl
        border border-glass-border
        transition-all duration-300
        ${hover ? 'hover:bg-glass-hover hover:border-accent-glow hover:shadow-glass' : ''}
        ${glow ? 'shadow-glow-teal' : ''}
        ${className}
      `}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-glow/0 to-cyber-glow/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
