import { StyleSheet } from "react-native";

export default (theme) => {
  return StyleSheet.create({
    activeColor: {
      color: theme.color.activeText
    },
    fadedColor: {
      color: theme.color.fadedText
    },
    navItem: {
      alignItems: "center",
      margin: 10
    }
  });
};
