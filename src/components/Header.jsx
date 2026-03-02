import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="glass"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 24px',
                borderBottom: '1px solid rgba(99,102,241,0.15)',
            }}
        >
            {/* Logo + Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        fontWeight: 700,
                        boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                    }}
                >
                    🎓
                </div>
                <div>
                    <h1
                        style={{
                            fontSize: 16,
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Academic Career Tree
                    </h1>
                    <p style={{ fontSize: 10, color: '#64748b', marginTop: 1, letterSpacing: '0.05em' }}>
                        10th to Job Role Navigator
                    </p>
                </div>
            </div>

            {/* Right controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                    style={{
                        fontSize: 11,
                        color: '#64748b',
                        padding: '4px 10px',
                        borderRadius: 100,
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.2)',
                    }}
                >
                    Click any node to explore →
                </span>

                {/* Theme toggle */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleTheme(e)}
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                        border: '1px solid rgba(99,102,241,0.25)',
                        cursor: 'pointer',
                        fontSize: 18,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                    }}
                    title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={theme}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {isDark ? '☀️' : '🌙'}
                        </motion.span>
                    </AnimatePresence>
                </motion.button>
            </div>
        </motion.header>
    );
}
