import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return {
    theme: themeContext.theme,
    setTheme: themeContext.setTheme,
  };
};
