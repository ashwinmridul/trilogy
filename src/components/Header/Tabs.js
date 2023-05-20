import React from "react";
import { View, Text, Pressable } from "react-native";
import { useThemeAwareObject } from "../../theme";
import styles from "./styles";
import { tabs } from "./tabValues";

export default React.memo(({ selected, onChange }) => {
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View style={themedStyles.tabs}>
      {tabs.map(({ title, key }) => {
        const isSelected = key === selected;
        const tabStyle = [
          themedStyles.tab,
          isSelected ? themedStyles.selectedTab : null
        ];
        const tabTextStyle = [
          themedStyles.tabText,
          isSelected ? themedStyles.selectedText : null
        ];
        return (
          <Pressable
            onPress={() => {
              if (!isSelected) onChange(key);
            }}
            key={key}
            style={tabStyle}
          >
            <Text style={tabTextStyle}>{title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
});
