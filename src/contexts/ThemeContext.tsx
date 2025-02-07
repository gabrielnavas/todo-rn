import React, { createContext, useState, useContext } from 'react';

// Define os temas
// Temas completos

const Default = {
  fontSizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    extraLarge: "1.5rem",
  },
  spacing: {
    xs: 3,
    sm: 5,
    md: 8,
    lg: 10,
  },
  borderRadius: {
    default: 8,
    round: "50%",
  },
  shadows: {
    card: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    button: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
}


const LightTheme = {
  ...Default,
  background: '#ffffff',
  text: '#000000',
  primary: '#6200ee',
  secondary: '#03dac5',
  cardBackground: '#f6f6f6',
  buttonText: '#ffffff',
};

const DarkTheme = {
  ...Default,
  background: '#121212',
  text: '#ffffff',
  primary: '#bb86fc',
  secondary: '#03dac6',
  cardBackground: '#1e1e1e',
  buttonText: '#000000',
};

type Theme = typeof DarkTheme & typeof LightTheme

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? DarkTheme : LightTheme;

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
