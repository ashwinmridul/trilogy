import { FONT_SIZES, ICON_SIZES } from "./Sizes";

const DEFAULT_DARK_COLOR_THEME = {
  containerBackground: "#013d53",
  footerBackground: "#000000",
  activeText: "#ffffff",
  fadedText: "#66787f",
  playListBackground: "#161616",
  questionColor: "#eeeeee",
  answerHeaderColor: "#2dc59f",
  answerColor: "#aaaaaa",
  optionBackground: "#345b6b"
};

export const DEFAULT_DARK_THEME_ID = "default-dark";

export const DEFAULT_DARK_THEME = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  fontSize: FONT_SIZES,
  iconSize: ICON_SIZES
};
