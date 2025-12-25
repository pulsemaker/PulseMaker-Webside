import { motion } from 'framer-motion';
import { Check, Zap, Layers, Globe2, Bot, Coins, Users, Rocket, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Roadmap = () => {
    const phases = [
        {
            phase: 'Phase 1',
            title: 'Foundation',
            timeline: 'December 2025',
            status: 'active',
            icon: Rocket,
            items: ['Solana Program Development', 'Token Launch: Jan 1, 2026', 'Community Building', 'Strategic Partnerships'],
        },
        {
            phase: 'Phase 2',
            title: 'AI Trading Signals',
            timeline: 'January 2026',
            status: 'upcoming',
            icon: Bot,
            items: ['Pine Script Charts Integration', 'Python Notification Backend', 'Telegram & Discord Alerts', 'Beta Access for Holders'],
        },
        {
            phase: 'Phase 3',
            title: 'ZK Mobile Wallet',
            timeline: 'February 2026',
            status: 'upcoming',
            icon: Layers,
            items: ['Android Expo App', 'iOS Expo App', 'Encrypted Login System', 'Centralized Wallet Management'],
        },
        {
            phase: 'Phase 4',
            title: 'Trading Fee Revenue Share',
            timeline: 'March 2026',
            status: 'upcoming',
            icon: Coins,
            items: ['Custom Rust Program', 'Fee Distribution System', 'Holder Revenue Dashboard', 'Auto-Payouts to Holders'],
        },
    ];

    return (
        <section id="roadmap" className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-container">
                <SectionHeading
                    subtitle="Roadmap"
                    title="The Path Forward"
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {phases.map((phase, index) => {
                            const PhaseIcon = phase.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative"
                                >
                                    {/* Phase indicator */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className={`relative w-12 h-12 rounded-xl flex items-center justify-center z-10 ${phase.status === 'completed'
                                                ? 'bg-gradient-to-br from-accent-primary to-cyan-400 text-white shadow-lg shadow-accent-primary/30'
                                                : phase.status === 'active'
                                                    ? 'bg-gradient-to-br from-cyber-violet to-accent-primary text-white shadow-lg shadow-cyber-violet/30'
                                                    : 'bg-glass-white border border-glass-border text-text-muted hover:border-glass-hover'
                                                }`}
                                        >
                                            {phase.status === 'completed' ? (
                                                <Check className="w-6 h-6" strokeWidth={3} />
                                            ) : phase.status === 'active' ? (
                                                <Zap className="w-5 h-5 animate-pulse" strokeWidth={2.5} />
                                            ) : (
                                                <PhaseIcon className="w-5 h-5" strokeWidth={2} />
                                            )}

                                            {/* Active glow */}
                                            {phase.status === 'active' && (
                                                <div className="absolute inset-0 rounded-full bg-cyber-violet/50 blur-lg animate-pulse-glow" />
                                            )}
                                        </motion.div>

                                        <div>
                                            <span className="text-xs text-accent-primary font-medium uppercase tracking-wider">
                                                {phase.phase}
                                            </span>
                                            <h3 className="text-lg font-heading font-semibold text-white">
                                                {phase.title}
                                            </h3>
                                            <span className="text-xs text-text-muted font-medium">
                                                {phase.timeline}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Phase content */}
                                    <div className={`p-5 rounded-xl border transition-all duration-300 ${phase.status === 'active'
                                        ? 'bg-pulse-navy/80 border-accent-primary/30 shadow-glow-teal'
                                        : 'bg-pulse-charcoal/60 border-glass-border hover:border-accent-primary/20'
                                        }`}>
                                        <ul className="space-y-3">
                                            {phase.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.15 + i * 0.05 }}
                                                    className="flex items-center gap-3 text-sm group"
                                                >
                                                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${phase.status === 'completed'
                                                        ? 'text-accent-primary'
                                                        : phase.status === 'active'
                                                            ? 'text-cyber-violet'
                                                            : 'text-text-muted'
                                                        }`} strokeWidth={2.5} />
                                                    <span className="text-white/90 group-hover:text-white transition-colors">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyber-violet/10 blur-[150px] pointer-events-none" />
        </section>
    );
};

export default Roadmap;
