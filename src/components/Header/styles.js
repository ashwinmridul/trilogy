import { StyleSheet } from "react-native";

export default (theme) => {
  return StyleSheet.create({
    header: {
      padding: 10,
      paddingTop: 50,
      flexDirection: "row",
      backgroundColor: theme.color.footerBackground
    },
    timer: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1
    },
    timerText: {
      paddingLeft: 5,
      color: theme.color.fadedText
    },
    tabs: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      flex: 8
    },
    tab: {
      borderBottomWidth: 4,
      borderBottomStartRadius: 2,
      borderBottomEndRadius: 2,
      borderBottomColor: "transparent"
    },
    selectedTab: {
      borderBottomColor: theme.color.activeText
    },
    tabText: {
      color: theme.color.activeText,
      paddingBottom: 7
    },
    selectedText: {
      fontWeight: "bold"
    },
    search: {
      alignSelf: "flex-end",
      flex: 1
    }
  });
};
