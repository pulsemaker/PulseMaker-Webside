import { motion } from 'framer-motion';
import { BookOpen, Activity, Wallet, Coins, Users, Code, ChevronRight, Shield, Zap, TrendingUp, Lock, Brain, Bell, Github, Send } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

// Reusable icon component with glow
const DocIcon = ({ icon: Icon, colorClass = 'accent-primary' }) => {
    const colors = {
        'accent-primary': 'from-accent-primary to-cyan-400',
        'cyber-violet': 'from-cyber-violet to-indigo-400',
        'cyber-purple': 'from-cyber-purple to-pink-400'
    };

    return (
        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${colors[colorClass]} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors[colorClass]} blur-lg opacity-40 -z-10`} />
        </div>
    );
};

const Docs = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeading
                            subtitle="Documentation"
                            title="PulseMaker Ecosystem"
                            align="left"
                        />

                        <div className="space-y-12 mt-12 text-gray-300">
                            {/* Introduction */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-pulse-charcoal/40 p-8 rounded-2xl border border-glass-border hover:border-accent-primary/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <DocIcon icon={BookOpen} colorClass="accent-primary" />
                                    <h2 className="text-2xl font-bold text-white">What is PulseMaker?</h2>
                                </div>
                                <p className="leading-relaxed mb-4">
                                    PulseMaker is a live, AI-driven trading ecosystem built on Solana, designed to deliver real signals, real privacy (ZK), and real earnings — without empty promises.
                                </p>
                                <p className="leading-relaxed font-semibold text-accent-primary">
                                    No hype narratives. Only systems that work.
                                </p>
                                <div className="mt-6 p-4 bg-glass-white/30 rounded-lg border border-glass-border">
                                    <p className="text-sm">
                                        PulseMaker combines <strong className="text-accent-primary">AI Agents</strong>, <strong className="text-cyber-violet">on-chain execution</strong>, and <strong className="text-cyber-purple">privacy-first infrastructure</strong> to give traders an unfair advantage — while sharing real revenue back to the community in <strong className="text-yellow-400">$SOL</strong>.
                                    </p>
                                </div>
                            </motion.section>

                            {/* AI Buy & Sell Signals */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-pulse-charcoal/40 p-8 rounded-2xl border border-glass-border hover:border-accent-primary/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <DocIcon icon={Activity} colorClass="accent-primary" />
                                    <h2 className="text-2xl font-bold text-white">AI Buy & Sell Signals</h2>
                                </div>
                                <p className="mb-6">
                                    Real-time trading signals powered by advanced AI trading agents, delivering precision and clarity without emotional bias.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass-white/50 transition-all duration-300">
                                        <Brain className="w-5 h-5 text-accent-primary flex-shrink-0" />
                                        <span><strong>AI Trading Agents:</strong> Signals generated by sophisticated AI models</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass-white/50 transition-all duration-300">
                                        <TrendingUp className="w-5 h-5 text-accent-primary flex-shrink-0" />
                                        <span><strong>Real-time Market Interpretation:</strong> Instant analysis and signal generation</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass-white/50 transition-all duration-300">
                                        <Code className="w-5 h-5 text-accent-primary flex-shrink-0" />
                                        <span><strong>Python Agent with Backtesting:</strong> Validated strategies with proven win rates</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass-white/50 transition-all duration-300">
                                        <Send className="w-5 h-5 text-accent-primary flex-shrink-0" />
                                        <span><strong>Telegram Channel Delivery:</strong> Direct signal delivery to subscribers</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass-white/50 transition-all duration-300">
                                        <Zap className="w-5 h-5 text-accent-primary flex-shrink-0" />
                                        <span><strong>No Manual Noise:</strong> Automated, bias-free decision making</span>
                                    </li>
                                </ul>
                                <div className="p-6 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-xl border border-accent-primary/30">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Bell className="w-5 h-5 text-white" />
                                        <h3 className="text-lg font-semibold text-white">How It Works</h3>
                                    </div>
                                    <p className="text-sm">
                                        Our Python-based AI agent continuously monitors market movements, analyzes volume, sentiment, and on-chain data. When high-probability opportunities are identified, signals are instantly delivered to our Telegram channel with complete transparency.
                                    </p>
                                </div>
                            </motion.section>

                            {/* ZK Wallet */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-pulse-charcoal/40 p-8 rounded-2xl border border-glass-border hover:border-cyber-violet/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <DocIcon icon={Wallet} colorClass="cyber-violet" />
                                    <h2 className="text-2xl font-bold text-white">ZK Wallet (Android & iOS)</h2>
                                </div>
                                <p className="mb-6">
                                    Privacy-first zero-knowledge wallet with seamless mobile experience across Android and iOS platforms.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-violet/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Shield className="w-5 h-5 text-cyber-violet" />
                                            <h3 className="text-xl font-semibold text-cyber-violet">Privacy Features</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet" />
                                                <span>Zero-Knowledge cryptography</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet" />
                                                <span>Encrypted login & identity</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet" />
                                                <span>Privacy by default</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-violet/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Lock className="w-5 h-5 text-cyber-violet" />
                                            <h3 className="text-xl font-semibold text-cyber-violet">Security</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet" />
                                                <span>Non-custodial design</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet" />
                                                <span>User-controlled assets</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet" />
                                                <span>Multi-platform support</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-pulse-dark/50 rounded-xl border border-glass-border/50">
                                    <p className="text-sm">
                                        <strong className="text-cyber-violet">Built for serious traders:</strong> Mobile-first design combining cutting-edge ZK privacy technology with an intuitive user experience. Your keys, your crypto, your privacy.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Revenue Share */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-pulse-charcoal/40 p-8 rounded-2xl border border-glass-border hover:border-cyber-purple/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <DocIcon icon={Coins} colorClass="cyber-purple" />
                                    <h2 className="text-2xl font-bold text-white">Instant Revenue Share in $SOL</h2>
                                </div>
                                <p className="mb-6">
                                    Passive income from real trading activity, distributed transparently on-chain via our custom Rust program.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                            <ChevronRight className="w-5 h-5 text-cyber-purple" />
                                            Key Features
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 p-3 rounded-lg bg-glass-white/30 border border-glass-border">
                                                <Zap className="w-5 h-5 text-cyber-purple flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Instant Distribution</strong>
                                                    <p className="text-sm text-gray-400">Real-time $SOL rewards</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 p-3 rounded-lg bg-glass-white/30 border border-glass-border">
                                                <Activity className="w-5 h-5 text-cyber-purple flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Activity-Based</strong>
                                                    <p className="text-sm text-gray-400">Revenue from actual usage</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 p-3 rounded-lg bg-glass-white/30 border border-glass-border">
                                                <Lock className="w-5 h-5 text-cyber-purple flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">No Lockups</strong>
                                                    <p className="text-sm text-gray-400">Access rewards immediately</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                            <Code className="w-5 h-5 text-cyber-purple" />
                                            Technical Implementation
                                        </h3>
                                        <div className="p-5 bg-pulse-dark/50 rounded-xl border border-glass-border/50">
                                            <code className="text-sm text-cyan-400 block space-y-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <ChevronRight className="w-3 h-3" />
                                                    <span className="text-white">Custom Rust Program</span>
                                                </div>
                                                <div className="pl-5 space-y-1 text-gray-400">
                                                    <div>• Claims Management</div>
                                                    <div>• Reward Distribution</div>
                                                    <div>• On-Chain Verification</div>
                                                    <div>• Transparent Accounting</div>
                                                </div>
                                            </code>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Built with Solana's high-performance infrastructure for ultra-fast, low-cost transactions.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-cyber-purple/20 to-transparent rounded-xl border border-cyber-purple/30">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Activity className="w-5 h-5 text-white" />
                                        <h3 className="text-lg font-semibold text-white">On-Chain Transparency</h3>
                                    </div>
                                    <p className="text-sm">
                                        Every transaction is verifiable on the Solana blockchain. Revenue distribution is fully auditable and transparent, ensuring trust and accountability for all token holders.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Team */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-pulse-charcoal/40 p-8 rounded-2xl border border-glass-border hover:border-accent-primary/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <DocIcon icon={Users} colorClass="accent-primary" />
                                    <h2 className="text-2xl font-bold text-white">Team</h2>
                                </div>
                                <p className="mb-8 leading-relaxed">
                                    PulseMaker is built by a <strong className="text-accent-primary">cross-disciplinary team</strong> combining deep blockchain engineering, trading expertise, privacy technology, and growth leadership.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Core Engineering */}
                                    <div className="p-6 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Code className="w-6 h-6 text-accent-primary" />
                                            <h3 className="text-xl font-semibold text-white">Core Engineering</h3>
                                        </div>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">3 Solana Rust Developers</strong>
                                                    <p className="text-gray-400">2+ years Solana, 7+ years blockchain</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Crypto Wallet Developers</strong>
                                                    <p className="text-gray-400">4+ years wallet architecture & security</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Zero-Knowledge (ZK) Developer</strong>
                                                    <p className="text-gray-400">3+ years privacy & ZK systems</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Trading & Signals */}
                                    <div className="p-6 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-violet/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <TrendingUp className="w-6 h-6 text-cyber-violet" />
                                            <h3 className="text-xl font-semibold text-white">Trading & Signal Expertise</h3>
                                        </div>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">2 Trading Indicator Creators</strong>
                                                    <p className="text-gray-400">11+ years professional trading</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-cyber-violet flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Expertise</strong>
                                                    <p className="text-gray-400">Market structure, momentum & signal logic</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Growth & Community */}
                                    <div className="p-6 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-purple/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Users className="w-6 h-6 text-cyber-purple" />
                                            <h3 className="text-xl font-semibold text-white">Growth & Community</h3>
                                        </div>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-cyber-purple flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">2 KOL Leaders</strong>
                                                    <p className="text-gray-400">Network of 110+ active KOLs</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-cyber-purple flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Focus</strong>
                                                    <p className="text-gray-400">Community growth & market reach</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Design & UX */}
                                    <div className="p-6 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Activity className="w-6 h-6 text-accent-primary" />
                                            <h3 className="text-xl font-semibold text-white">Design & UX</h3>
                                        </div>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">2 Design Experts</strong>
                                                    <p className="text-gray-400">5+ years experience</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="text-white">Specialization</strong>
                                                    <p className="text-gray-400">Product, UI/UX & brand design</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-xl border border-accent-primary/30 text-center">
                                    <p className="text-lg font-semibold text-white">
                                        Built by specialists. Designed for serious users. ✅
                                    </p>
                                </div>
                            </motion.section>

                            {/* Ecosystem Principles */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-pulse-charcoal/40 p-8 rounded-2xl border border-glass-border hover:border-cyber-violet/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <DocIcon icon={Brain} colorClass="cyber-violet" />
                                    <h2 className="text-2xl font-bold text-white">Ecosystem Principles</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Brain className="w-5 h-5 text-accent-primary" />
                                            <h3 className="font-semibold text-white">AI over emotion</h3>
                                        </div>
                                        <p className="text-sm text-gray-400">Data-driven decisions, not FOMO</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-violet/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Shield className="w-5 h-5 text-cyber-violet" />
                                            <h3 className="font-semibold text-white">Privacy by default</h3>
                                        </div>
                                        <p className="text-sm text-gray-400">Zero-knowledge infrastructure</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-cyber-purple/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Activity className="w-5 h-5 text-cyber-purple" />
                                            <h3 className="font-semibold text-white">On-chain transparency</h3>
                                        </div>
                                        <p className="text-sm text-gray-400">Fully auditable operations</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary/30 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Coins className="w-5 h-5 text-accent-primary" />
                                            <h3 className="font-semibold text-white">Community-aligned incentives</h3>
                                        </div>
                                        <p className="text-sm text-gray-400">Revenue sharing with holders</p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Social Links */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-center"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Join the Community</h2>
                                <div className="flex items-center justify-center gap-4">
                                    {[
                                        { name: 'Twitter', url: 'https://x.com/pulsemakersol', icon: Activity },
                                        { name: 'Telegram', url: 'https://t.me/PulseMaker', icon: Send },
                                        { name: 'GitHub', url: 'https://github.com/pulsemaker', icon: Github },
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-glass-white border border-glass-border hover:border-accent-primary hover:bg-glass-white/50 transition-all duration-300 group"
                                        >
                                            <social.icon className="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors" />
                                            <span className="font-medium text-white">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Docs;
