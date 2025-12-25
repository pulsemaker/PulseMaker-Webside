import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ShieldCheck, Gem, Lock, Settings, TrendingUp, AlertTriangle, Target } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

// Icon wrapper component for consistent styling with glow effects
const PillarIcon = ({ icon: Icon, colorClass, size = 'default' }) => {
    const sizeClasses = {
        small: 'w-5 h-5',
        default: 'w-6 h-6',
        large: 'w-8 h-8',
        xlarge: 'w-10 h-10'
    };

    const gradientColors = {
        'accent-primary': 'from-accent-primary to-cyan-400',
        'cyber-violet': 'from-cyber-violet to-indigo-400',
        'cyber-purple': 'from-cyber-purple to-pink-400'
    };

    return (
        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${gradientColors[colorClass] || gradientColors['accent-primary']} shadow-lg`}>
            <Icon className={`${sizeClasses[size]} text-white drop-shadow-lg`} strokeWidth={2.5} />
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientColors[colorClass] || gradientColors['accent-primary']} blur-lg opacity-50 -z-10`} />
        </div>
    );
};

const ThreePillars = () => {
    const [activeTab, setActiveTab] = useState(0);

    const pillars = [
        {
            id: 'signals',
            name: 'AI Trading Signals',
            icon: Bot,
            color: 'accent-primary',
            features: [
                { title: 'Pine Script Charts', desc: 'Professional TradingView charts with custom indicators', icon: TrendingUp },
                { title: 'Python Notification Engine', desc: 'Real-time alerts via Telegram & Discord channels', icon: AlertTriangle },
                { title: 'Smart Signal Detection', desc: 'AI-powered market momentum and pattern recognition', icon: Target },
                { title: 'Multi-Channel Delivery', desc: 'Telegram, Discord, in-app, and API access', icon: Bot },
            ],
            visual: (
                <div className="space-y-4">
                    {/* Mock signal cards */}
                    {['Pine Script Alert', 'Momentum Detected', 'Channel Notification'].map((signal, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary/30 transition-all duration-300"
                        >
                            <div className={`w-3 h-3 rounded-full shadow-lg ${i === 0 ? 'bg-green-400 shadow-green-400/50' : i === 1 ? 'bg-accent-primary shadow-accent-primary/50' : 'bg-yellow-400 shadow-yellow-400/50'}`} />
                            <div className="flex-1">
                                <div className="text-sm font-medium text-white">{signal}</div>
                                <div className="text-xs text-text-muted">SOL/USDC • {['92%', '87%', '95%'][i]} confidence</div>
                            </div>
                            <div className={`text-xs px-3 py-1.5 rounded-full font-semibold ${i === 0 ? 'bg-green-400/20 text-green-400 border border-green-400/30' : 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30'}`}>
                                {['LONG', 'HOLD', 'SENT'][i]}
                            </div>
                        </motion.div>
                    ))}
                </div>
            ),
        },
        {
            id: 'wallet',
            name: 'ZK Mobile Wallet',
            icon: ShieldCheck,
            color: 'cyber-violet',
            features: [
                { title: 'Android Expo App', desc: 'Native Android wallet built with Expo React Native', icon: ShieldCheck },
                { title: 'iOS Expo App', desc: 'Premium iOS experience with Face ID & Touch ID', icon: Lock },
                { title: 'Encrypted Login', desc: 'Zero-knowledge encrypted authentication system', icon: Lock },
                { title: 'Centralized Wallet', desc: 'Seamless wallet management across all devices', icon: Settings },
            ],
            visual: (
                <div className="relative">
                    {/* Mock wallet UI */}
                    <div className="p-6 rounded-2xl bg-glass-white border border-glass-border hover:border-cyber-violet/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-violet to-cyber-purple flex items-center justify-center shadow-lg shadow-cyber-violet/30">
                                    <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">ZK Wallet</div>
                                    <div className="text-xs text-accent-primary flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                                        Encrypted
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-lg bg-glass-white border border-glass-border flex items-center justify-center text-text-muted hover:text-white hover:border-glass-hover transition-all" title="Android">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.463 11.463 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" /></svg>
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-glass-white border border-glass-border flex items-center justify-center text-text-muted hover:text-white hover:border-glass-hover transition-all" title="iOS">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-3xl font-heading font-bold text-white mb-2"
                        >
                            12,450.00 SOL
                        </motion.div>
                        <div className="text-sm text-text-muted mb-6">Available Balance</div>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-2.5 rounded-xl bg-cyber-violet/20 text-cyber-violet text-sm font-semibold border border-cyber-violet/20 hover:border-cyber-violet/40 hover:bg-cyber-violet/30 transition-all duration-300">Send</button>
                            <button className="py-2.5 rounded-xl bg-accent-primary/20 text-accent-primary text-sm font-semibold border border-accent-primary/20 hover:border-accent-primary/40 hover:bg-accent-primary/30 transition-all duration-300">Receive</button>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'revenue',
            name: 'Trading Fee Revenue Share',
            icon: Gem,
            color: 'cyber-purple',
            features: [
                { title: 'Fee Revenue Share', desc: 'Token holders earn from platform trading fees', icon: Gem },
                { title: 'Custom Rust Program', desc: 'On-chain fee collection and distribution via Solana', icon: TrendingUp },
                { title: 'Automatic Payouts', desc: 'Revenue automatically distributed to all holders', icon: Target },
                { title: 'Holder Dashboard', desc: 'Real-time earnings tracking and payout history', icon: Bot },
            ],
            visual: (
                <div className="space-y-4">
                    {/* Mock rewards dashboard */}
                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-purple/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-text-muted">Trading Fee Revenue</span>
                            <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyber-purple/20 to-accent-primary/20 text-cyber-purple font-semibold border border-cyber-purple/30 flex items-center gap-1.5">
                                <Gem className="w-3 h-3" />
                                Live
                            </span>
                        </div>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-2xl font-heading font-bold text-white"
                        >
                            +2,456.78 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-cyber-violet">PULSE</span>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-violet/30 text-center transition-all duration-300">
                            <div className="text-lg font-bold text-cyber-violet">847</div>
                            <div className="text-xs text-text-muted">Holders Earning</div>
                        </div>
                        <div className="p-4 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary/30 text-center transition-all duration-300">
                            <div className="text-lg font-bold text-accent-primary">0.5%</div>
                            <div className="text-xs text-text-muted">Fee Share Rate</div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="ecosystem" className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-container">
                <SectionHeading
                    subtitle="The Ecosystem"
                    title="Three Pillars of Power"
                    gradient
                />

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {pillars.map((pillar, index) => (
                        <motion.button
                            key={pillar.id}
                            onClick={() => setActiveTab(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative px-6 py-3.5 rounded-xl font-heading font-medium transition-all duration-300 flex items-center gap-3 ${activeTab === index
                                ? 'bg-glass-white border border-accent-primary text-white shadow-glow-teal'
                                : 'bg-transparent border border-glass-border text-text-secondary hover:text-white hover:border-glass-hover'
                                }`}
                        >
                            <pillar.icon className={`w-5 h-5 ${activeTab === index ? 'text-accent-primary' : 'text-text-muted'}`} strokeWidth={2} />
                            {pillar.name}
                        </motion.button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <GlassCard className="p-8 md:p-12" hover={false}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Features List */}
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <PillarIcon icon={pillars[activeTab].icon} colorClass={pillars[activeTab].color} size="large" />
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                                            {pillars[activeTab].name}
                                        </h3>
                                    </div>
                                    <div className="space-y-5">
                                        {pillars[activeTab].features.map((feature, i) => {
                                            const FeatureIcon = feature.icon || Bot;
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex gap-4 p-3 rounded-xl hover:bg-glass-white/50 transition-all duration-300"
                                                >
                                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${pillars[activeTab].color === 'accent-primary' ? 'bg-accent-primary/20 text-accent-primary' : pillars[activeTab].color === 'cyber-violet' ? 'bg-cyber-violet/20 text-cyber-violet' : 'bg-cyber-purple/20 text-cyber-purple'}`}>
                                                        <FeatureIcon className="w-5 h-5" strokeWidth={2} />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white">{feature.title}</div>
                                                        <div className="text-sm text-text-secondary mt-0.5">{feature.desc}</div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Visual Preview */}
                                <div className="flex items-center justify-center">
                                    {pillars[activeTab].visual}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyber-violet/10 blur-[120px] -translate-y-1/2 pointer-events-none" />
        </section>
    );
};

export default ThreePillars;
