import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { motion } from 'framer-motion';

const NODE_COLORS = {
    root: { from: '#6366f1', to: '#8b5cf6', glow: '#6366f1' },
    stream: { from: '#3b82f6', to: '#06b6d4', glow: '#3b82f6' },
    subject: { from: '#10b981', to: '#34d399', glow: '#10b981' },
    field: { from: '#f59e0b', to: '#f97316', glow: '#f59e0b' },
    degree: { from: '#ec4899', to: '#f43f5e', glow: '#ec4899' },
    branch: { from: '#8b5cf6', to: '#a78bfa', glow: '#8b5cf6' },
    subbranch: { from: '#06b6d4', to: '#67e8f9', glow: '#06b6d4' },
    job: { from: '#84cc16', to: '#22d3ee', glow: '#84cc16' },
};

const NODE_LABELS = {
    root: 'START',
    stream: 'STREAM',
    subject: 'SUBJECT',
    field: 'FIELD',
    degree: 'DEGREE',
    branch: 'BRANCH',
    subbranch: 'SPECIALTY',
    job: 'CAREER',
};

function TreeNode({ data, selected }) {
    const colors = NODE_COLORS[data.type] || NODE_COLORS.stream;
    const isJob = data.type === 'job';
    const isRoot = data.type === 'root';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="career-node-wrapper"
            style={{ position: 'relative' }}
        >
            {/* Left handle (source from parent) */}
            {!isRoot && (
                <Handle
                    type="target"
                    position={Position.Left}
                    style={{
                        background: colors.from,
                        border: `2px solid ${colors.from}`,
                        width: 10,
                        height: 10,
                    }}
                />
            )}

            {/* Node body */}
            <motion.div
                whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 30px ${colors.glow}55, 0 20px 40px rgba(0,0,0,0.4)`,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                    background: `linear-gradient(135deg, ${colors.from}22, ${colors.to}11)`,
                    border: selected
                        ? `2px solid ${colors.from}`
                        : `1px solid ${colors.from}44`,
                    boxShadow: selected
                        ? `0 0 25px ${colors.glow}66, 0 8px 32px rgba(0,0,0,0.3)`
                        : `0 4px 20px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.15)`,
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: isRoot ? '20px' : '14px',
                    padding: isRoot ? '18px 28px' : '12px 18px',
                    minWidth: isRoot ? 200 : 190,
                    maxWidth: isJob ? 200 : 220,
                    cursor: isJob ? 'default' : 'pointer',
                    userSelect: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Shimmer overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: `linear-gradient(180deg, ${colors.from}18 0%, transparent 100%)`,
                        borderRadius: 'inherit',
                        pointerEvents: 'none',
                    }}
                />

                {/* Type badge */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '2px 8px',
                        borderRadius: 100,
                        background: `${colors.from}33`,
                        border: `1px solid ${colors.from}55`,
                        marginBottom: 6,
                    }}
                >
                    <span style={{ fontSize: 9, color: colors.from, fontWeight: 700, letterSpacing: '0.1em' }}>
                        {NODE_LABELS[data.type] || 'NODE'}
                    </span>
                </div>

                {/* Emoji + Label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: isRoot ? 22 : 18 }}>{data.emoji}</span>
                    <span
                        style={{
                            fontSize: isRoot ? 15 : 13,
                            fontWeight: 700,
                            color: '#f1f5f9',
                            lineHeight: 1.3,
                            letterSpacing: '-0.01em',
                        }}
                    >
                        {data.label}
                    </span>
                </div>

                {/* Subtitle */}
                {data.subtitle && (
                    <p
                        style={{
                            fontSize: 10,
                            color: `${colors.from}cc`,
                            margin: 0,
                            marginLeft: 26,
                            lineHeight: 1.3,
                        }}
                    >
                        {data.subtitle}
                    </p>
                )}

                {/* Expand indicator for non-job nodes */}
                {!isJob && (
                    <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: colors.from,
                            fontSize: 14,
                            opacity: 0.7,
                        }}
                    >
                        ›
                    </motion.div>
                )}
            </motion.div>

            {/* Right handle (children connect here) */}
            {!isJob && (
                <Handle
                    type="source"
                    position={Position.Right}
                    style={{
                        background: colors.from,
                        border: `2px solid ${colors.from}`,
                        width: 10,
                        height: 10,
                    }}
                />
            )}
        </motion.div>
    );
}

export default memo(TreeNode);
