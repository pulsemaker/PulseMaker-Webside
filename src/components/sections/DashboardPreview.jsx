import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const DashboardPreview = () => {
    // Live price state
    const [currentPrice, setCurrentPrice] = useState(187.42);
    const [priceChange, setPriceChange] = useState(5.23);
    const [lastUpdate, setLastUpdate] = useState(0);
    const [volume, setVolume] = useState(1247.83);
    const [prevPrice, setPrevPrice] = useState(187.42);

    // TradingView style candlestick data - more candles, thinner
    const [candleData, setCandleData] = useState([
        { o: 180.20, c: 181.50, h: 182.00, l: 179.80 },
        { o: 181.50, c: 180.80, h: 182.20, l: 180.20 },
        { o: 180.80, c: 182.40, h: 183.00, l: 180.50 },
        { o: 182.40, c: 181.90, h: 183.20, l: 181.40 },
        { o: 181.90, c: 183.60, h: 184.00, l: 181.60 },
        { o: 183.60, c: 182.80, h: 184.20, l: 182.20 },
        { o: 182.80, c: 184.50, h: 185.00, l: 182.60 },
        { o: 184.50, c: 183.70, h: 185.20, l: 183.20 },
        { o: 183.70, c: 185.20, h: 185.80, l: 183.40 },
        { o: 185.20, c: 184.60, h: 186.00, l: 184.00 },
        { o: 184.60, c: 186.30, h: 186.80, l: 184.40 },
        { o: 186.30, c: 185.50, h: 187.00, l: 185.00 },
        { o: 185.50, c: 187.20, h: 187.80, l: 185.20 },
        { o: 187.20, c: 186.40, h: 188.00, l: 186.00 },
        { o: 186.40, c: 188.10, h: 188.60, l: 186.20 },
        { o: 188.10, c: 187.30, h: 188.80, l: 186.80 },
        { o: 187.30, c: 189.00, h: 189.50, l: 187.00 },
        { o: 189.00, c: 188.20, h: 189.80, l: 187.80 },
        { o: 188.20, c: 189.80, h: 190.40, l: 188.00 },
        { o: 189.80, c: 187.42, h: 190.80, l: 186.80 }, // Live candle
    ]);

    // Signal data
    const [signals, setSignals] = useState([
        { pair: 'SOL/USDC', action: 'LONG', confidence: 94, risk: 'Low', price: 187.42, change: 5.23 },
        { pair: 'RAY/SOL', action: 'WATCH', confidence: 67, risk: 'Medium', price: 4.23, change: 3.20 },
        { pair: 'JTO/USDC', action: 'LONG', confidence: 88, risk: 'Low', price: 2.87, change: 8.70 },
    ]);

    // Update prices every second
    useEffect(() => {
        const interval = setInterval(() => {
            setPrevPrice(currentPrice);

            const newPrice = +(currentPrice + (Math.random() - 0.48) * 0.4).toFixed(2);
            setCurrentPrice(newPrice);
            setPriceChange(prev => +(prev + (Math.random() - 0.5) * 0.02).toFixed(2));
            setVolume(prev => +(prev + (Math.random() - 0.3) * 15).toFixed(2));

            // Update last candle
            setCandleData(prev => {
                const newData = [...prev];
                const last = { ...newData[newData.length - 1] };
                last.c = newPrice;
                if (newPrice > last.h) last.h = newPrice;
                if (newPrice < last.l) last.l = newPrice;
                newData[newData.length - 1] = last;
                return newData;
            });

            // Update signals
            setSignals(prev => prev.map(s => ({
                ...s,
                price: +(s.price + (Math.random() - 0.48) * (s.pair === 'SOL/USDC' ? 0.4 : 0.015)).toFixed(2),
                change: +(s.change + (Math.random() - 0.5) * 0.01).toFixed(2),
            })));

            setLastUpdate(0);
        }, 1000);

        return () => clearInterval(interval);
    }, [currentPrice]);

    useEffect(() => {
        const counter = setInterval(() => setLastUpdate(p => p + 1), 1000);
        return () => clearInterval(counter);
    }, []);

    const isPriceUp = currentPrice > prevPrice;

    // Chart calculations
    const allPrices = candleData.flatMap(d => [d.h, d.l]);
    const minPrice = Math.min(...allPrices) - 0.5;
    const maxPrice = Math.max(...allPrices) + 0.5;
    const priceRange = maxPrice - minPrice;

    const scaleY = (price, height = 200) => {
        return height - ((price - minPrice) / priceRange) * (height - 20) + 10;
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="section-container">
                <SectionHeading
                    subtitle="Product Preview"
                    title="Your Trading Command Center"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <GlassCard className="p-4 md:p-6" hover={false} glow>
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-glass-border">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                                </div>
                                <span className="text-sm font-mono text-text-muted">PulseMaker Terminal</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2 px-2 py-1 rounded bg-[#27ca40]/10 border border-[#27ca40]/30">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27ca40] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27ca40]"></span>
                                    </span>
                                    <span className="text-xs font-mono text-[#27ca40]">LIVE</span>
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            {/* TradingView Style Chart */}
                            <div className="lg:col-span-3">
                                <div className="rounded-lg bg-[#131722] border border-[#2a2e39] overflow-hidden">
                                    {/* Chart Header - TradingView style */}
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-[#2a2e39]">
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-white text-sm">SOL/USDC</span>
                                            <span className="text-xs text-[#787b86]">•</span>
                                            <span className="text-xs text-[#787b86]">5</span>
                                            <div className="flex items-center gap-1 ml-2">
                                                {['1', '5', '15', '1H', '4H', 'D'].map((tf, i) => (
                                                    <button
                                                        key={tf}
                                                        className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${i === 1 ? 'bg-[#2962ff] text-white' : 'text-[#787b86] hover:text-white'
                                                            }`}
                                                    >
                                                        {tf}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-[11px] font-mono">
                                            <span className="text-[#787b86]">O <span className="text-white">{candleData[candleData.length - 1].o.toFixed(2)}</span></span>
                                            <span className="text-[#787b86]">H <span className="text-[#26a69a]">{candleData[candleData.length - 1].h.toFixed(2)}</span></span>
                                            <span className="text-[#787b86]">L <span className="text-[#ef5350]">{candleData[candleData.length - 1].l.toFixed(2)}</span></span>
                                            <span className="text-[#787b86]">C <motion.span
                                                key={currentPrice}
                                                initial={{ color: isPriceUp ? '#26a69a' : '#ef5350' }}
                                                animate={{ color: '#ffffff' }}
                                                transition={{ duration: 0.5 }}
                                            >{currentPrice.toFixed(2)}</motion.span></span>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="relative h-56 md:h-64">
                                        {/* Price Scale (right side) */}
                                        <div className="absolute right-0 top-0 bottom-0 w-14 flex flex-col justify-between py-2 pr-1 text-right bg-[#131722] border-l border-[#2a2e39] z-10">
                                            {[...Array(6)].map((_, i) => (
                                                <span key={i} className="text-[10px] font-mono text-[#787b86]">
                                                    {(maxPrice - (i * priceRange / 5)).toFixed(2)}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Current Price Line */}
                                        <motion.div
                                            className="absolute left-0 right-14 flex items-center z-20"
                                            initial={false}
                                            animate={{ top: `${((maxPrice - currentPrice) / priceRange) * 85 + 5}%` }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <div className="flex-1 h-px bg-[#2962ff] opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #2962ff 0, #2962ff 4px, transparent 4px, transparent 8px)' }} />
                                            <motion.div
                                                className="absolute right-0 px-1.5 py-0.5 text-[10px] font-mono font-bold text-white rounded-sm"
                                                animate={{ backgroundColor: isPriceUp ? '#26a69a' : '#ef5350' }}
                                            >
                                                {currentPrice.toFixed(2)}
                                            </motion.div>
                                        </motion.div>

                                        {/* SVG Chart */}
                                        <svg className="absolute inset-0 right-14" viewBox="0 0 400 200" preserveAspectRatio="none">
                                            {/* Grid */}
                                            {[...Array(5)].map((_, i) => (
                                                <line key={`h${i}`} x1="0" y1={i * 40 + 20} x2="400" y2={i * 40 + 20} stroke="#2a2e39" strokeWidth="1" />
                                            ))}

                                            {/* TradingView Style Candlesticks */}
                                            {candleData.map((candle, i) => {
                                                const candleWidth = 12;
                                                const gap = 8;
                                                const x = i * (candleWidth + gap) + 5;
                                                const isGreen = candle.c >= candle.o;
                                                const isLive = i === candleData.length - 1;

                                                const bodyTop = scaleY(Math.max(candle.o, candle.c));
                                                const bodyBottom = scaleY(Math.min(candle.o, candle.c));
                                                const bodyHeight = Math.max(bodyBottom - bodyTop, 1);

                                                return (
                                                    <g key={i}>
                                                        {/* Wick */}
                                                        <motion.line
                                                            x1={x + candleWidth / 2}
                                                            x2={x + candleWidth / 2}
                                                            stroke={isGreen ? '#26a69a' : '#ef5350'}
                                                            strokeWidth="1"
                                                            initial={false}
                                                            animate={{
                                                                y1: scaleY(candle.h),
                                                                y2: scaleY(candle.l),
                                                            }}
                                                            transition={{ duration: isLive ? 0.15 : 0, ease: "linear" }}
                                                        />
                                                        {/* Body */}
                                                        <motion.rect
                                                            x={x}
                                                            width={candleWidth}
                                                            rx="0.5"
                                                            initial={false}
                                                            animate={{
                                                                y: bodyTop,
                                                                height: bodyHeight,
                                                                fill: isGreen ? '#26a69a' : '#ef5350',
                                                            }}
                                                            transition={{ duration: isLive ? 0.15 : 0, ease: "linear" }}
                                                        />
                                                    </g>
                                                );
                                            })}
                                        </svg>

                                        {/* Price Display Overlay */}
                                        <div className="absolute left-3 top-3 z-10">
                                            <div className="flex items-baseline gap-2">
                                                <AnimatePresence mode="wait">
                                                    <motion.span
                                                        key={currentPrice}
                                                        initial={{ opacity: 0.7, color: isPriceUp ? '#26a69a' : '#ef5350' }}
                                                        animate={{ opacity: 1, color: '#ffffff' }}
                                                        transition={{ duration: 0.3 }}
                                                        className="text-2xl md:text-3xl font-bold font-mono"
                                                    >
                                                        ${currentPrice.toFixed(2)}
                                                    </motion.span>
                                                </AnimatePresence>
                                                <motion.span
                                                    className={`text-xs font-bold font-mono px-1.5 py-0.5 rounded ${priceChange >= 0 ? 'bg-[#26a69a]/20 text-[#26a69a]' : 'bg-[#ef5350]/20 text-[#ef5350]'
                                                        }`}
                                                >
                                                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                                                </motion.span>
                                            </div>
                                            <div className="text-[10px] text-[#787b86] font-mono mt-0.5">
                                                Vol: ${volume.toFixed(2)}M
                                            </div>
                                        </div>
                                    </div>

                                    {/* Time Scale */}
                                    <div className="flex justify-between px-2 py-1.5 text-[9px] font-mono text-[#787b86] border-t border-[#2a2e39]">
                                        {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(t => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Signal Panel */}
                            <div className="space-y-2">
                                <div className="px-3 py-2 rounded bg-[#131722] border border-[#2a2e39]">
                                    <div className="text-[10px] font-mono text-[#787b86] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#2962ff] animate-pulse" />
                                        SIGNALS
                                    </div>
                                </div>

                                {signals.map((signal) => (
                                    <div
                                        key={signal.pair}
                                        className="p-2.5 rounded bg-[#131722] border border-[#2a2e39] hover:border-[#3a3f4b] transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-xs font-bold text-white">{signal.pair}</span>
                                            <span className={`text-[9px] px-1 py-0.5 rounded font-mono font-bold ${signal.action === 'LONG' ? 'bg-[#26a69a]/20 text-[#26a69a]' : 'bg-[#ffbd2e]/20 text-[#ffbd2e]'
                                                }`}>
                                                {signal.action}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between mb-1.5">
                                            <motion.span
                                                key={signal.price}
                                                initial={{ opacity: 0.7 }}
                                                animate={{ opacity: 1 }}
                                                className="text-base font-bold font-mono text-white"
                                            >
                                                ${signal.price.toFixed(2)}
                                            </motion.span>
                                            <span className={`text-[10px] font-bold font-mono ${signal.change >= 0 ? 'text-[#26a69a]' : 'text-[#ef5350]'
                                                }`}>
                                                {signal.change >= 0 ? '+' : ''}{signal.change.toFixed(2)}%
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between text-[9px] font-mono text-[#787b86]">
                                            <span>CONF: <span className="text-[#2962ff]">{signal.confidence}%</span></span>
                                            <span className={signal.risk === 'Low' ? 'text-[#26a69a]' : 'text-[#ffbd2e]'}>
                                                {signal.risk.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className="mt-4 pt-4 border-t border-[#2a2e39]">
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                                {[
                                    { label: 'WIN', value: '73.2%', color: 'text-[#2962ff]' },
                                    { label: 'RETURN', value: '+18.4%', color: 'text-[#26a69a]' },
                                    { label: 'SIGNALS', value: '12', color: 'text-white' },
                                    { label: 'ALERTS', value: '3', color: 'text-[#ffbd2e]' },
                                    { label: 'P&L', value: '+$2.4K', color: 'text-[#26a69a]' },
                                    { label: 'ACC', value: '89%', color: 'text-[#2962ff]' },
                                    { label: 'TIME', value: '4.2h', color: 'text-[#787b86]' },
                                    { label: 'STATUS', value: 'ON', color: 'text-[#26a69a]' },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center px-1 py-1 rounded bg-[#131722] border border-[#2a2e39]">
                                        <div className={`text-xs md:text-sm font-bold font-mono ${stat.color}`}>{stat.value}</div>
                                        <div className="text-[8px] font-mono text-[#787b86]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <div className="absolute -inset-4 bg-gradient-to-r from-cyber-violet/10 via-accent-primary/10 to-cyber-violet/10 rounded-3xl blur-2xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardPreview;
