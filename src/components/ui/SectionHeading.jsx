import { motion } from 'framer-motion';

const SectionHeading = ({
    title,
    subtitle,
    align = 'center',
    gradient = false,
    className = ''
}) => {
    const alignments = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-16 ${alignments[align]} ${className}`}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-accent-primary"
                >
                    {subtitle}
                </motion.span>
            )}
            <h2
                className={`
          text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight
          ${gradient ? 'gradient-text' : 'text-white'}
        `}
            >
                {title}
            </h2>
        </motion.div>
    );
};

export default SectionHeading;
