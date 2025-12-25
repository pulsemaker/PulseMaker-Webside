import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'default',
    href,
    onClick,
    className = '',
    icon,
    ...props
}) => {
    const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-heading font-semibold
    rounded-xl overflow-hidden
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pulse-dark
  `;

    const variants = {
        primary: `
      bg-accent-primary text-pulse-dark
      hover:shadow-glow-teal hover:-translate-y-0.5
      focus:ring-accent-primary
    `,
        secondary: `
      bg-transparent text-white
      border border-glass-border
      hover:bg-glass-hover hover:border-accent-primary hover:text-accent-primary
      focus:ring-accent-primary
    `,
        ghost: `
      bg-transparent text-text-secondary
      hover:text-white hover:bg-glass-white
      focus:ring-glass-border
    `,
        gradient: `
      bg-gradient-cyber text-white
      hover:shadow-glow-violet hover:-translate-y-0.5
      focus:ring-cyber-violet
    `,
    };

    const sizes = {
        small: 'px-4 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:translate-x-full transition-transform duration-700" />

            {icon && <span className="relative z-10">{icon}</span>}
            <span className="relative z-10">{children}</span>
        </Component>
    );
};

export default Button;
