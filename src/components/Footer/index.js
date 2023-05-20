import React from "react";
import { View } from "react-native";
import { useThemeAwareObject } from "../../theme/ThemeAwareObject.hook";
import styles from "./styles";
import { footerItems } from "./footerItems";
import NavItem from "../NavItem";
import { useTheme } from "../../theme";

export default React.memo(() => {
  const { theme } = useTheme();
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View style={themedStyles.footer}>
      {footerItems.map((item, index) => (
        <NavItem
          key={item.title}
          highlighted={index === 0}
          title={item.title}
          icon={item.icon}
          iconSize={theme.iconSize.BOTTOM_NAV}
          fontSize={theme.fontSize.xSmall}
        />
      ))}
    </View>
  );
});
