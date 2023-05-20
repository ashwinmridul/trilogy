import React from "react";
import { View } from "react-native";
import { useThemeAwareObject } from "../../theme";
import CardActions from "../CardActions";
import Options from "./Options";
import Playlist from "./Playlist";
import Question from "./Question";
import styles from "./styles";
import UserInfo from "./UserInfo";

export default React.memo(
  ({
    id,
    question,
    options,
    description,
    playlist,
    user: { name, avatar }
  }) => {
    const themedStyles = useThemeAwareObject(styles);

    return (
      <View style={themedStyles.card}>
        <View style={themedStyles.qna}>
          <Question question={question} />
          <Options questionId={id} options={options} />
        </View>
        <UserInfo name={name} description={description} />
        <Playlist playlist={playlist} />
        <CardActions avatar={avatar} />
      </View>
    );
  }
);
