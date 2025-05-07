
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'puffy' | 'zeffo';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('puffy');

  useEffect(() => {
    // Apply theme class to body
    document.body.classList.remove('puffy', 'zeffo');
    document.body.classList.add(theme);
    
    // Set dark mode for zeffo
    if (theme === 'zeffo') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
