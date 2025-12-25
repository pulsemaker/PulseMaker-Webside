import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Product: [
            { name: 'Signals', href: '#' },
            { name: 'Wallet', href: '#' },
            { name: 'Staking', href: '#' },
            { name: 'API', href: '#' },
        ],
        Resources: [
            { name: 'Documentation', href: '#' },
            { name: 'Whitepaper', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'FAQ', href: '#' },
        ],
        Community: [
            { name: 'Twitter', href: 'https://x.com/pulsemakersol' },
            { name: 'Telegram', href: 'https://t.me/PulseMaker' },
            { name: 'GitHub', href: 'https://github.com/pulsemaker' },
        ],
        Legal: [
            { name: 'Terms', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Disclaimer', href: '#' },
        ],
    };

    return (
        <footer className="relative border-t border-glass-border">
            <div className="section-container py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                    {/* Logo & Description */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-4">
                            <Logo size="small" />
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Intelligence, privacy, and rewards — unified for Solana traders.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-heading font-semibold text-white mb-4 uppercase tracking-wider">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-text-muted hover:text-accent-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-text-muted">
                        © {currentYear} PulseMaker. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {[
                            { name: 'twitter', url: 'https://x.com/pulsemakersol' },
                            { name: 'telegram', url: 'https://t.me/PulseMaker' },
                            { name: 'github', url: 'https://github.com/pulsemaker' },
                        ].map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 rounded-xl bg-glass-white border border-glass-border flex items-center justify-center text-text-muted hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                                style={{
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                                }}
                            >
                                {social.name === 'twitter' && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                )}
                                {social.name === 'telegram' && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                )}
                                {social.name === 'github' && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                )}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 pt-6 border-t border-glass-border">
                    <p className="text-xs text-text-dim text-center leading-relaxed max-w-4xl mx-auto">
                        <strong>Risk Disclaimer:</strong> Trading cryptocurrency involves substantial risk and may result in the loss of your invested capital.
                        PulseMaker provides analytical tools and signals for informational purposes only. Nothing on this site constitutes financial advice.
                        Past performance is not indicative of future results. Trade responsibly and only with funds you can afford to lose.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
