import { StyleSheet } from "react-native";

export default (theme) => {
  return StyleSheet.create({
    container: {
      position: "absolute",
      right: 0,
      bottom: 40
    },
    image: {
      height: 45,
      width: 45,
      marginBottom: 10,
      borderColor: theme.color.activeText,
      borderWidth: 1,
      borderRadius: 23
    }
  });
};
