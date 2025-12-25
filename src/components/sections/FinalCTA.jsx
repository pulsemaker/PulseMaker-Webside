import { motion } from 'framer-motion';
import Button from '../ui/Button';

const FinalCTA = () => {
    return (
        <section className="relative py-24 md:py-40 overflow-hidden">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        Ready to Trade{' '}
                        <span className="gradient-text">Smarter?</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                        Join thousands of traders using AI-powered signals, zero-knowledge security,
                        and transparent incentives to navigate the Solana ecosystem.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button variant="primary" size="large">
                            Enter PulseMaker
                        </Button>
                        <Button variant="secondary" size="large">
                            Read Docs
                        </Button>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 mt-12"
                    >
                        {[
                            '🔒 Audited Smart Contracts',
                            '⚡ Built on Solana',
                            '🔐 ZK-Secured',
                        ].map((badge, index) => (
                            <span
                                key={index}
                                className="flex items-center gap-2 text-sm text-text-muted"
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Gradient Orbs */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-cyber-violet/20 blur-[150px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-primary/20 blur-[150px] -translate-y-1/2" />
            </motion.div>
        </section>
    );
};

export default FinalCTA;
