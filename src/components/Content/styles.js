import { StyleSheet } from "react-native";

export default (theme) => {
  return StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: theme.color.containerBackground
    },
    card: {
      flex: 1,
      flexDirection: "column"
    },
    qna: {
      flex: 20,
      justifyContent: "center",
      padding: 10,
      paddingRight: 68
    },
    userInfo: {
      padding: 10,
      flex: 1.5
    },
    userName: {
      color: theme.color.activeText,
      fontSize: theme.fontSize.large,
      paddingBottom: 7
    },
    description: {
      color: theme.color.activeText,
      fontSize: theme.fontSize.xSmall
    },
    playlist: {
      flex: 0.7,
      padding: 10,
      backgroundColor: theme.color.playListBackground,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    playlistGroup: {
      flexDirection: "row"
    },
    playlistText: {
      color: theme.color.activeText,
      fontSize: theme.fontSize.large,
      paddingLeft: 7
    },
    flashCardQuestion: {
      color: theme.color.questionColor,
      fontSize: theme.fontSize.xxxLarge
    },
    flashCardAnswerHeader: {
      marginTop: 20,
      borderTopWidth: 1,
      borderTopColor: theme.color.answerColor,
      paddingVertical: 20,
      color: theme.color.answerHeaderColor
    },
    flashCardAnswer: {
      color: theme.color.answerColor,
      fontSize: theme.fontSize.large
    },
    ratingHeader: {
      paddingTop: 40,
      paddingBottom: 10,
      color: theme.color.answerColor,
      fontSize: theme.fontSize.xSmall
    },
    ratingBoxes: {
      flexDirection: "row"
    },
    ratingBox: {
      height: 30,
      width: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginRight: 10
    },
    ratingText: {
      color: theme.color.activeText,
      fontSize: theme.fontSize.xxxLarge
    },
    option: {
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: theme.color.optionBackground,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    optionText: {
      color: theme.color.activeText,
      fontSize: theme.fontSize.large,
      minHeight: 20,
      flex: 5
    },
    resultIcon: {
      flex: 1
    }
  });
};
