import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';

const WhyPulseMaker = () => {
    const features = [
        {
            icon: '🎯',
            title: 'Noise Reduction for Retail',
            description: 'Cut through market chaos with AI-filtered signals. Focus on high-probability setups, not endless noise.',
        },
        {
            icon: '📊',
            title: 'Signal Accountability',
            description: 'Every signal tracked on-chain. Historical performance transparent and verifiable by anyone.',
        },
        {
            icon: '🔐',
            title: 'Seedless-Friendly Security',
            description: 'Zero-knowledge authentication means no seed phrase exposure. Recovery-first design for peace of mind.',
        },
        {
            icon: '⚡',
            title: 'Token Utility Tied to Usage',
            description: 'Real utility, not speculation. Token value aligned with ecosystem activity and holder participation.',
        },
    ];

    return (
        <section id="features" className="relative py-24 md:py-32">
            <div className="section-container">
                <SectionHeading
                    subtitle="Why PulseMaker"
                    title="Intelligence Meets Integrity"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-accent-primary/5 blur-[100px] -translate-y-1/2 pointer-events-none"
                />
            </div>
        </section>
    );
};

export default WhyPulseMaker;
