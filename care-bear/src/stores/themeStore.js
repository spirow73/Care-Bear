import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
    // State to hold the current theme
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    };

    // Optionally, you can persist theme preference in localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
