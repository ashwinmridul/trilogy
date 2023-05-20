import React from "react";
import { View, Text } from "react-native";
import { useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(({ name, description }) => {
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View style={themedStyles.userInfo}>
      <Text style={themedStyles.userName}>{name}</Text>
      <Text style={themedStyles.description}>{description}</Text>
    </View>
  );
});
