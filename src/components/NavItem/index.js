import React from "react";
import { View, Text } from "react-native";
import { Icon } from '@rneui/themed';
import { useTheme, useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(
  ({ title, icon, highlighted = false, iconSize, fontSize }) => {
    const { theme } = useTheme();
    const themedStyles = useThemeAwareObject(styles);
    const textStyle = [
      { fontSize },
      highlighted ? themedStyles.activeColor : themedStyles.fadedColor
    ];

    return (
      <View style={themedStyles.navItem}>
        <Icon
          name={icon}
          size={iconSize}
          color={highlighted ? theme.color.activeText : theme.color.fadedText}
        />
        <Text style={textStyle}>{title}</Text>
      </View>
    );
  }
);
