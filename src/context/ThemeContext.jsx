import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('acadTreeTheme') || 'dark';
    });
    const [transition, setTransition] = useState(null); // { x, y, targetTheme }

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('acadTreeTheme', theme);
    }, [theme]);

    const toggleTheme = useCallback((event) => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';

        // Get button center coordinates for circular reveal origin
        if (event && event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            // Start the transition animation
            setTransition({ x, y, targetTheme: nextTheme });

            // Apply the theme after a short delay so the overlay renders first
            setTimeout(() => {
                setTheme(nextTheme);
            }, 50);

            // Clear transition state after animation completes
            setTimeout(() => {
                setTransition(null);
            }, 800);
        } else {
            setTheme(nextTheme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, transition }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
