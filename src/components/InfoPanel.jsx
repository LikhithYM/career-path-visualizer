import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getNodePath } from '../data/academicData';

const TYPE_COLORS = {
    root: '#6366f1',
    stream: '#3b82f6',
    subject: '#10b981',
    field: '#f59e0b',
    degree: '#ec4899',
    branch: '#8b5cf6',
    subbranch: '#06b6d4',
    job: '#84cc16',
};

export default function InfoPanel({ selectedNode, onClose }) {
    if (!selectedNode) return null;

    const { data } = selectedNode;
    const accentColor = TYPE_COLORS[data.type] || '#6366f1';
    const path = getNodePath(data.id);

    return (
        <AnimatePresence>
            <motion.div
                key={data.id}
                initial={{ x: 340, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 340, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="glass-strong"
                style={{
                    position: 'fixed',
                    top: 70,
                    right: 16,
                    width: 300,
                    maxHeight: 'calc(100vh - 86px)',
                    overflowY: 'auto',
                    borderRadius: 20,
                    padding: 20,
                    zIndex: 90,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
            >
                {/* Close button */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: 14,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                    }}
                >
                    ×
                </motion.button>

                {/* Emoji */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    style={{
                        fontSize: 36,
                        marginBottom: 10,
                        display: 'block',
                        lineHeight: 1,
                    }}
                >
                    {data.emoji}
                </motion.div>

                {/* Type badge */}
                <div
                    style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: 100,
                        background: `${accentColor}22`,
                        border: `1px solid ${accentColor}44`,
                        fontSize: 10,
                        fontWeight: 700,
                        color: accentColor,
                        letterSpacing: '0.12em',
                        marginBottom: 8,
                        textTransform: 'uppercase',
                    }}
                >
                    {data.type}
                </div>

                {/* Label */}
                <h2
                    style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: '#f1f5f9',
                        marginBottom: 4,
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {data.label}
                </h2>

                {data.subtitle && (
                    <p style={{ fontSize: 12, color: accentColor, marginBottom: 12, fontWeight: 500 }}>
                        {data.subtitle}
                    </p>
                )}

                {/* Divider */}
                <div
                    style={{
                        height: 1,
                        background: `linear-gradient(90deg, ${accentColor}44, transparent)`,
                        margin: '12px 0',
                    }}
                />

                {/* Description */}
                <p
                    style={{
                        fontSize: 12.5,
                        color: '#94a3b8',
                        lineHeight: 1.7,
                        marginBottom: 16,
                    }}
                >
                    {data.description}
                </p>

                {/* Exam Section */}
                {data.exams && Object.keys(data.exams).length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        {/* Exam Section Header */}
                        <div
                            style={{
                                height: 1,
                                background: `linear-gradient(90deg, ${accentColor}44, transparent)`,
                                margin: '4px 0 12px',
                            }}
                        />
                        <p
                            style={{
                                fontSize: 11,
                                color: '#cbd5e1',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                marginBottom: 12,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                            }}
                        >
                            <span style={{ fontSize: 14 }}>📘</span> Available Exams
                        </p>

                        {/* Exam Categories */}
                        {[
                            { key: 'ug', label: 'Undergraduate Exams', icon: '🎓' },
                            { key: 'pg', label: 'Postgraduate Exams', icon: '📚' },
                            { key: 'government', label: 'Government / Competitive', icon: '🏛️' },
                            { key: 'abroad', label: 'Study Abroad Exams', icon: '✈️' },
                            { key: 'scholarships', label: 'Scholarships', icon: '🏆' },
                        ]
                            .filter(cat => data.exams[cat.key] && data.exams[cat.key].length > 0)
                            .map((cat, ci) => (
                                <motion.div
                                    key={cat.key}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + ci * 0.08, duration: 0.3 }}
                                    style={{ marginBottom: 12 }}
                                >
                                    <p
                                        style={{
                                            fontSize: 9.5,
                                            color: '#64748b',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            marginBottom: 6,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4,
                                        }}
                                    >
                                        <span style={{ fontSize: 11 }}>{cat.icon}</span> {cat.label}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                        {data.exams[cat.key].map((exam, ei) => (
                                            <motion.span
                                                key={ei}
                                                whileHover={{
                                                    scale: 1.08,
                                                    backgroundColor: `${accentColor}33`,
                                                    borderColor: `${accentColor}88`,
                                                }}
                                                transition={{ duration: 0.15 }}
                                                style={{
                                                    fontSize: 10,
                                                    padding: '4px 10px',
                                                    borderRadius: 100,
                                                    background: `${accentColor}15`,
                                                    border: `1px solid ${accentColor}33`,
                                                    color: accentColor,
                                                    fontWeight: 500,
                                                    cursor: 'default',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {exam}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                        <div
                            style={{
                                height: 1,
                                background: `linear-gradient(90deg, ${accentColor}44, transparent)`,
                                margin: '4px 0 12px',
                            }}
                        />
                    </motion.div>
                )}

                {/* Path breadcrumb */}
                {path.length > 1 && (
                    <div>
                        <p
                            style={{
                                fontSize: 10,
                                color: '#475569',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: 8,
                                fontWeight: 600,
                            }}
                        >
                            Your Path
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                            {path.map((step, i) => (
                                <React.Fragment key={i}>
                                    <span
                                        style={{
                                            fontSize: 10.5,
                                            padding: '3px 8px',
                                            borderRadius: 100,
                                            background: i === path.length - 1
                                                ? `${accentColor}33`
                                                : 'rgba(255,255,255,0.05)',
                                            border: `1px solid ${i === path.length - 1 ? accentColor + '55' : 'rgba(255,255,255,0.08)'}`,
                                            color: i === path.length - 1 ? accentColor : '#64748b',
                                            fontWeight: i === path.length - 1 ? 600 : 400,
                                        }}
                                    >
                                        {step}
                                    </span>
                                    {i < path.length - 1 && (
                                        <span style={{ color: '#334155', fontSize: 10, alignSelf: 'center' }}>›</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}

                {/* Hint */}
                {data.type !== 'job' && (
                    <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{
                            marginTop: 16,
                            padding: '8px 12px',
                            borderRadius: 10,
                            background: `${accentColor}11`,
                            border: `1px solid ${accentColor}22`,
                            fontSize: 11,
                            color: accentColor,
                            textAlign: 'center',
                        }}
                    >
                        👆 Click node on canvas to expand
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
