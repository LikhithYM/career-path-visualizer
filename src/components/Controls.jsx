import React from 'react';
import { motion } from 'framer-motion';
import { useReactFlow } from 'reactflow';

export default function Controls({ onReset, onCollapseAll }) {
    const { fitView } = useReactFlow();

    const btns = [
        {
            id: 'reset',
            label: '⟳ Reset Tree',
            color: '#6366f1',
            onClick: onReset,
            title: 'Collapse all and return to root',
        },
        {
            id: 'collapse',
            label: '⊟ Collapse All',
            color: '#3b82f6',
            onClick: onCollapseAll,
            title: 'Collapse all expanded branches',
        },
        {
            id: 'fit',
            label: '⊕ Fit View',
            color: '#10b981',
            onClick: () => fitView({ padding: 0.2, duration: 600 }),
            title: 'Fit all nodes into viewport',
        },
    ];

    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{
                position: 'fixed',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 10,
                zIndex: 90,
            }}
        >
            {btns.map((btn, i) => (
                <motion.button
                    key={btn.id}
                    id={`ctrl-${btn.id}`}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ y: 1, scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    onClick={btn.onClick}
                    title={btn.title}
                    className="neo-btn"
                    style={{
                        background: `${btn.color}22`,
                        color: btn.color,
                        padding: '9px 16px',
                        borderRadius: 10,
                        fontSize: 12,
                        fontFamily: 'inherit',
                        borderColor: `${btn.color}66`,
                        boxShadow: `3px 3px 0 ${btn.color}55`,
                    }}
                >
                    {btn.label}
                </motion.button>
            ))}
        </motion.div>
    );
}
