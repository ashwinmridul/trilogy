import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext
} from "react";

import { DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID } from "./DefaultDark.theme";
import {
  DEFAULT_LIGHT_THEME,
  DEFAULT_LIGHT_THEME_ID
} from "./DefaultLight.theme";

const Context = createContext({
  theme: DEFAULT_DARK_THEME,
  setTheme: () => {
    console.log("ThemeProvider is not rendered!");
  },
  toggleTheme: () => {
    console.log("ThemeProvider is not rendered!");
  }
});

export const ThemeProvider = React.memo((props) => {
  const [theme, setTheme] = useState(props.initial);

  const SetThemeCallback = useCallback((newTheme) => {
    setTheme((currentTheme) => {
      if (currentTheme.id === newTheme.id) {
        return currentTheme;
      }

      return newTheme;
    });
  }, []);

  const ToggleThemeCallback = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME;
      }
      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedValue = useMemo(() => {
    const value = {
      theme,
      setTheme: SetThemeCallback,
      toggleTheme: ToggleThemeCallback
    };
    return value;
  }, [theme, SetThemeCallback, ToggleThemeCallback]);

  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => useContext(Context);
