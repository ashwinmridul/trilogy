import React from "react";
import { View } from "react-native";
import { useThemeAwareObject } from "../../theme";
import Search from "./Search";
import styles from "./styles";
import Tabs from "./Tabs";
import Timer from "./Timer";

export default React.memo(({ selectedTab, onChangeTab }) => {
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View style={themedStyles.header}>
      <Timer />
      <Tabs selected={selectedTab} onChange={onChangeTab} />
      <Search />
    </View>
  );
});
