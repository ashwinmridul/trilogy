import { useMemo } from "react";
import { useTheme } from "./Theme.context";

export const useThemeAwareObject = (fn) => {
  const { theme } = useTheme();

  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
