import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const TrustSection = () => {
    const trustPoints = [
        {
            icon: '⚠️',
            title: 'Signals are not financial advice',
            description: 'Our AI provides analysis and insights, but all trading decisions remain yours. We provide data, not guarantees.',
        },
        {
            icon: '🏷️',
            title: 'Risk labels included',
            description: 'Every signal comes with a clear risk assessment. Low, medium, or high — you always know what you\'re evaluating.',
        },
        {
            icon: '🎮',
            title: 'User-controlled execution',
            description: 'No automated trades without your approval. You maintain full control over your funds at all times.',
        },
    ];

    return (
        <section className="relative py-24 md:py-32">
            <div className="section-container">
                <SectionHeading
                    subtitle="Trust & Responsibility"
                    title="Transparency First"
                />

                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-8 md:p-12" hover={false}>
                        <div className="grid gap-8">
                            {trustPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-5"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-glass-white border border-glass-border flex items-center justify-center text-2xl">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-heading font-semibold text-white mb-2">
                                            {point.title}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-8 border-t border-glass-border"
                        >
                            <p className="text-sm text-text-muted text-center leading-relaxed">
                                PulseMaker is committed to responsible trading practices. Past performance does not guarantee future results.
                                Cryptocurrency trading involves substantial risk. Only trade with funds you can afford to lose.
                            </p>
                        </motion.div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
