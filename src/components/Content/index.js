import React from "react";
import { View } from "react-native";
import { useThemeAwareObject } from "../../theme";
import styles from "./styles";
import Swiper from "react-native-swiper";
import { CARD_TYPES } from "../../globalConstants";
import FlashCard from "./FlashCard";
import MCQCard from "./MCQCard";

export default React.memo(({ cards, onIndexChanged }) => {
  const themedStyles = useThemeAwareObject(styles);

  return (
    <View style={themedStyles.content}>
      <Swiper
        loop={false}
        horizontal={false}
        dotColor="transparent"
        activeDotColor="transparent"
        onIndexChanged={onIndexChanged}
      >
        {cards.map((cardData) =>
          cardData.type === CARD_TYPES.FLASHCARD ? (
            <FlashCard key={cardData.id} {...cardData} />
          ) : (
            <MCQCard key={cardData.id} {...cardData} />
          )
        )}
      </Swiper>
    </View>
  );
});
