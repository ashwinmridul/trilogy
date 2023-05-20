import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from '@rneui/themed';
import { useTheme, useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(() => {
  const { theme } = useTheme();
  const themedStyles = useThemeAwareObject(styles);

  const [timeSpent, setTimeSpent] = useState(0);

  const incrementTimer = useCallback(() => {
    setTimeout(() => {
      setTimeSpent(timeSpent + 1);
      incrementTimer();
    }, 60000);
  }, [timeSpent]);

  useEffect(() => {
    incrementTimer();
  }, [incrementTimer]);

  return (
    <View style={themedStyles.timer}>
      <Icon
        name="timer"
        size={theme.iconSize.TIMER}
        color={theme.color.fadedText}
      />
      <Text style={themedStyles.timerText}>{`${timeSpent}m`}</Text>
    </View>
  );
});
