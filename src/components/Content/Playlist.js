import React from "react";
import { View, Text } from "react-native";
import { Icon } from '@rneui/themed';
import { useTheme, useThemeAwareObject } from "../../theme";
import styles from "./styles";

export default React.memo(({ playlist }) => {
  const themedStyles = useThemeAwareObject(styles);
  const { theme } = useTheme();

  return (
    <View style={themedStyles.playlist}>
      <View style={themedStyles.playlistGroup}>
        <Icon
          name="play-circle-filled"
          size={theme.iconSize.PLAYLIST}
          color={theme.color.activeText}
        />
        <Text style={themedStyles.playlistText}>Playlist: {playlist}</Text>
      </View>
      <Icon
          name="chevron-right"
          size={theme.iconSize.PLAYLIST}
          color={theme.color.activeText}
        />
    </View>
  );
});
