import React, { useEffect, useState } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import { tabs } from "../Header/tabValues";
import getCardData from "../../services/getCardData";

export default React.memo(() => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].key);
  const [cards, setCards] = useState([]);

  const fetchMore = (key) => {
      getCardData(key).then(res => {
        setCards([...cards, res]);
      }).catch(console.error);
  };

  useEffect(() => {
    fetchMore(selectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cards.length < 10) fetchMore(selectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, cards.length]);

  const onChangeTab = (key) => {
    setCards([]);
    setSelectedTab(key);
  };

  const onIndexChanged = (index) => {
    if (index === cards.length - 1) fetchMore(selectedTab);
  };

  return (
    <>
      <Header selectedTab={selectedTab} onChangeTab={onChangeTab} />
      <Content cards={cards} onIndexChanged={onIndexChanged} />
      <Footer />
    </>
  );
});
