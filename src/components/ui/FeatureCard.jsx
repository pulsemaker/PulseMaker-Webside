import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const FeatureCard = ({
    icon,
    title,
    description,
    delay = 0,
    className = ''
}) => {
    return (
        <GlassCard delay={delay} className={`p-6 md:p-8 ${className}`}>
            {/* Icon */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + 0.1 }}
                className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-violet/20 to-accent-primary/20 flex items-center justify-center border border-glass-border"
            >
                <span className="text-2xl text-accent-primary">{icon}</span>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">
                {description}
            </p>

            {/* Decorative line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: delay + 0.3 }}
                className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent"
            />
        </GlassCard>
    );
};

export default FeatureCard;
