import { FONT_SIZES, ICON_SIZES } from "./Sizes";

const DEFAULT_LIGHT_COLOR_THEME = {
  containerBackground: "#bbbbbb",
  footerBackground: "#dddddd",
  activeText: "#000000",
  fadedText: "#66787f",
  playListBackground: "#777777",
  questionColor: "#222222",
  answerHeaderColor: "#006400",
  answerColor: "#444444",
  optionBackground: "#999999"
};

export const DEFAULT_LIGHT_THEME_ID = "default-light";

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  fontSize: FONT_SIZES,
  iconSize: ICON_SIZES
};
