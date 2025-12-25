import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const Partners = () => {
    // Placeholder partner logos
    const partners = [
        { name: 'Solana', placeholder: '◎' },
        { name: 'Jupiter', placeholder: '🪐' },
        { name: 'Raydium', placeholder: '⚡' },
        { name: 'Magic Eden', placeholder: '🔮' },
        { name: 'Phantom', placeholder: '👻' },
        { name: 'Orca', placeholder: '🐋' },
    ];

    return (
        <section id="partners" className="relative py-24 md:py-32">
            <div className="section-container">
                <SectionHeading
                    subtitle="Ecosystem Partners"
                    title="Building Together"
                />

                {/* Partner Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 200, 0.3)' }}
                            className="aspect-[3/2] rounded-xl bg-glass-white border border-glass-border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer hover:bg-glass-hover"
                        >
                            <span className="text-3xl md:text-4xl opacity-60">{partner.placeholder}</span>
                            <span className="text-xs text-text-muted font-medium">{partner.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Collaboration CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                        Interested in building on or integrating with PulseMaker? We're always looking for ecosystem partners.
                    </p>
                    <Button variant="secondary">
                        Partner With Us
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
