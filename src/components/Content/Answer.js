import React from "react";
import { View, Text } from "react-native";
import { RATINGS } from "../../globalConstants";
import { useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(({ answerRetrieved, answer }) => {
  const themedStyles = useThemeAwareObject(styles);
  if (!answerRetrieved) return null;

  return (
    <>
      <Text style={themedStyles.flashCardAnswerHeader}>Answer</Text>
      <Text style={themedStyles.flashCardAnswer}>{answer}</Text>
      <Text style={themedStyles.ratingHeader}>How well did you know this?</Text>
      <View style={themedStyles.ratingBoxes}>
        {RATINGS.map(({ value, color }) => (
          <View
            style={[themedStyles.ratingBox, { backgroundColor: color }]}
            key={value}
          >
            <Text style={themedStyles.ratingText}>{value}</Text>
          </View>
        ))}
      </View>
    </>
  );
});
