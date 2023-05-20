import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { useTheme, useThemeAwareObject } from "../../theme";
import styles from "./styles";
import revealAnswer from "../../services/revealAnswer";
import { Icon } from '@rneui/themed';

export default React.memo(({ questionId, options }) => {
  const themedStyles = useThemeAwareObject(styles);
  const { theme } = useTheme();

  const [correctAnswerId, setCorrectAnswer] = useState();
  const [wrongAnswerId, setWrongAnswer] = useState();

  const submitAnswer = (answerId) => {
    revealAnswer(questionId).then(res => {
      const correctId = res.correct_options[0].id;
        setCorrectAnswer(correctId);
        if (answerId !== correctId) setWrongAnswer(answerId);
    });
  };

  return (
    <>
      {options.map(({ id, answer }) => (
        <Pressable
          key={id}
          disabled={correctAnswerId || wrongAnswerId}
          onPress={() => submitAnswer(id)}
          style={[
            themedStyles.option,
            correctAnswerId === id ? { backgroundColor: "green" } : null,
            wrongAnswerId === id ? { backgroundColor: "#FF7777" } : null
          ]}
        >
          <Text style={themedStyles.optionText}>{answer}</Text>
          {correctAnswerId === id ? <Icon
            style={themedStyles.resultIcon}
            name="check-circle"
            size={theme.iconSize.TIMER}
            color="#a8e0d2"
          /> : null}
          {wrongAnswerId === id ? <Icon
            style={themedStyles.resultIcon}
            name="cancel"
            size={theme.iconSize.TIMER}
            color="#f1bfbf"
          /> : null}
        </Pressable>
      ))}
    </>
  );
});
