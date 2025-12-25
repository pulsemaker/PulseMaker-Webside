import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Docs', href: '/docs' },
        { name: 'Roadmap', href: '/#roadmap' },
        { name: 'Features', href: '/#features' },
        { name: 'Partners', href: '/#partners' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-3 bg-pulse-dark/80 backdrop-blur-xl border-b border-glass-border'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <Logo size={isScrolled ? 'small' : 'default'} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                                <Link
                                    to={link.href}
                                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    href={link.href}
                                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 font-medium"
                                >
                                    {link.name}
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Wallet Button */}
                <div className="hidden md:block">
                    <WalletMultiButton className="!bg-accent-primary !text-pulse-dark hover:!bg-accent-light !transition-all !rounded-lg !font-bold !h-10 !px-6" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-white"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {isMobileMenuOpen ? (
                            <path d="M18 6L6 18M6 6L18 18" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-pulse-dark/95 backdrop-blur-xl border-t border-glass-border"
                    >
                        <div className="section-container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-text-secondary hover:text-white py-2 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-text-secondary hover:text-white py-2 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <div className="flex justify-center mt-4">
                                <WalletMultiButton className="!bg-accent-primary !text-pulse-dark hover:!bg-accent-light !transition-all !rounded-lg !font-bold !w-full !justify-center" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
