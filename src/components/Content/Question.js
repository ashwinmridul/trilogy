import React from "react";
import { Pressable, Text } from "react-native";
import { useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(
  ({ answerRetrieved = true, showAnswer = () => {}, question }) => {
    const themedStyles = useThemeAwareObject(styles);

    return (
      <Pressable onPress={showAnswer} disabled={answerRetrieved}>
        <Text style={themedStyles.flashCardQuestion}>{question}</Text>
      </Pressable>
    );
  }
);
