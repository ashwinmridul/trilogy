import React from "react";
import { View } from "react-native";
import { Icon } from '@rneui/themed';
import { useTheme, useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(() => {
  const { theme } = useTheme();
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View styles={themedStyles.search}>
      <Icon
        name="search"
        size={theme.iconSize.SEARCH}
        color={theme.color.activeText}
      />
    </View>
  );
});
