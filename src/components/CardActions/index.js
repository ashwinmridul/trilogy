import React from "react";
import { View, Image } from "react-native";
import { useTheme, useThemeAwareObject } from "../../theme";
import NavItem from "../NavItem";
import { actionItems } from "./actions";
import styles from "./styles";

export default React.memo(({ avatar }) => {
  const { theme } = useTheme();
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View style={themedStyles.container}>
      <Image style={themedStyles.image} source={{ uri: avatar }} />
      {actionItems.map(({ icon, title }) => (
        <NavItem
          key={title}
          highlighted
          title={title}
          icon={icon}
          iconSize={theme.iconSize.CARD_ACTIONS}
        />
      ))}
    </View>
  );
});
