import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import LandingScreen from './components/LandingScreen';
import Header from './components/Header';
import TreeCanvas from './components/TreeCanvas';
import { AnimatePresence, motion } from 'framer-motion';

function ThemeTransitionOverlay() {
  const { transition, theme } = useTheme();

  if (!transition) return null;

  // The overlay shows the NEW theme color, expanding from the button
  const isGoingLight = transition.targetTheme === 'light';
  const overlayColor = isGoingLight ? '#e8ecf4' : '#050B18';

  // Calculate max radius to cover entire viewport
  const maxDim = Math.max(window.innerWidth, window.innerHeight);
  const maxRadius = Math.sqrt(maxDim * maxDim + maxDim * maxDim);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: transition.x,
          top: transition.y,
          width: maxRadius * 2,
          height: maxRadius * 2,
          marginLeft: -maxRadius,
          marginTop: -maxRadius,
          borderRadius: '50%',
          background: overlayColor,
          animation: 'themeReveal 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}
      />
    </div>
  );
}

function AppInner() {
  const [showLanding, setShowLanding] = useState(true);
  const { theme } = useTheme();

  // Sync light-theme class on html element for CSS variable switching
  React.useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        transition: 'background 0.4s ease',
      }}
    >
      <ThemeTransitionOverlay />
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <LandingScreen onStart={() => setShowLanding(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="canvas"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Header />
            <TreeCanvas />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
