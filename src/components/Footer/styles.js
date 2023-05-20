import { StyleSheet } from "react-native";

export default (theme) => {
  return StyleSheet.create({
    footer: {
      backgroundColor: theme.color.footerBackground,
      position: "static",
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingBottom: 30
    }
  });
};
