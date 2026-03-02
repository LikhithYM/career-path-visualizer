import React from 'react';
import { motion } from 'framer-motion';

export default function LandingScreen({ onStart }) {
    return (
        <div
            className="gradient-bg"
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Floating blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />

            {/* Grids */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                style={{ textAlign: 'center', zIndex: 10, maxWidth: 680, padding: '0 24px' }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 16px',
                        borderRadius: 100,
                        marginBottom: 24,
                        fontSize: 12,
                        color: '#a78bfa',
                        letterSpacing: '0.08em',
                    }}
                >
                    <span
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#8b5cf6',
                            display: 'inline-block',
                            animation: 'nodeGlow 2s ease-in-out infinite',
                        }}
                    />
                    INTERACTIVE ACADEMIC CAREER NAVIGATOR
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(36px, 6vw, 64px)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        marginBottom: 20,
                        color: '#f1f5f9',
                    }}
                >
                    Chart Your{' '}
                    <span className="text-gradient">Academic</span>
                    <br />
                    Career Journey 🎓
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42 }}
                    style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        color: '#64748b',
                        lineHeight: 1.7,
                        marginBottom: 36,
                        maxWidth: 520,
                        margin: '0 auto 36px',
                    }}
                >
                    From 10th grade to your dream career — explore every stream, degree, relevant exams and
                    specialization in a beautiful interactive tree.
                </motion.p>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 40 }}
                >
                    {['🔬 Science', '💼 Commerce', '🎨 Arts', '⚙️ Engineering', '🏥 Medical', '💻 Tech Careers'].map((tag) => (
                        <span
                            key={tag}
                            className="glass"
                            style={{
                                padding: '5px 14px',
                                borderRadius: 100,
                                fontSize: 12,
                                color: '#94a3b8',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    id="start-exploring-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65, type: 'spring', stiffness: 200 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 40px rgba(99,102,241,0.5), 0 20px 50px rgba(0,0,0,0.3)',
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onStart}
                    style={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        border: 'none',
                        borderRadius: 16,
                        padding: '16px 40px',
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#fff',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        boxShadow: '0 8px 30px rgba(99,102,241,0.35), 0 0 0 1px rgba(99,102,241,0.3)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Start Exploring Your Path →
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ fontSize: 11, color: '#334155', marginTop: 14 }}
                >
                    No signup needed · 100% free · Interactive tree visualization
                </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="glass"
                style={{
                    position: 'absolute',
                    bottom: 32,
                    display: 'flex',
                    gap: 32,
                    padding: '12px 32px',
                    borderRadius: 100,
                }}
            >
                {[
                    { value: '3', label: 'Streams' },
                    { value: '50+', label: 'Career Paths' },
                    { value: '100+', label: 'Job Roles' },
                    { value: '8', label: 'Depth Levels' },
                ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 18, fontWeight: 800, color: '#6366f1' }}>{stat.value}</div>
                        <div style={{ fontSize: 10, color: '#475569', letterSpacing: '0.06em' }}>{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
