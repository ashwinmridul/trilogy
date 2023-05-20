import React, { useState } from "react";
import { Image, View } from "react-native";
import { useThemeAwareObject } from "../../theme";
import CardActions from "../CardActions";
import Answer from "./Answer";
import Playlist from "./Playlist";
import Question from "./Question";
import styles from "./styles";
import UserInfo from "./UserInfo";

export default React.memo(
  ({
    flashcard_front,
    flashcard_back,
    description,
    playlist,
    user: { name, avatar }
  }) => {
    const [answerRetrieved, setAnswerRetrieved] = useState(false);
    const themedStyles = useThemeAwareObject(styles);

    const showAnswer = () => {
      setAnswerRetrieved(true);
    };

    return (
      <View style={themedStyles.card}>
        <View style={themedStyles.qna}>
          <Question
            question={flashcard_front}
            answerRetrieved={answerRetrieved}
            showAnswer={showAnswer}
          />
          <Answer answer={flashcard_back} answerRetrieved={answerRetrieved} />
        </View>
        <UserInfo name={name} description={description} />
        <Playlist playlist={playlist} />
        <CardActions avatar={avatar} />
      </View>
    );
  }
);
