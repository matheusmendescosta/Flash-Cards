import React, { useState } from "react";
import FlashCard from "../components/FlashCard/FlashCard";
import { allFlashCards } from "../data/allFlashCards";
import FlashCards from "../components/FlashCards/FlashCards";
import Button from "../components/Button/Button";
import { helperShufflerArray } from "../helpers/ArrayHelpers";
import RadioButton from "../components/RadioButton/RadioButton";

function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const shufftedCards = helperShufflerArray(allCards);
    setAllCards(shufftedCards);
  }

  function handleRadioShowTitle() {
    setShowTitle(true);
  }

  function handleRadioShowDescription() {
    setShowTitle(false);
  }

  return (
    <>
      <div className="text-center mb-4">
        <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 m-4">
        <RadioButton
          id="radioButtonTitle"
          name="showInfo"
          buttonChecked={showTitle}
          onButtonClick={handleRadioShowTitle}
        />
        <RadioButton
          id="radioButtonDescription"
          name="showInfo"
          buttonChecked={!showTitle}
          onButtonClick={handleRadioShowDescription}
        />
      </div>
      <FlashCards>
        {allCards.map(({ id, title, description }) => {
          return <FlashCard key={id} title={title} description={description} showTitleFlashCard={showTitle} />;
        })}
      </FlashCards>
    </>
  );
}

export default FlashCardsPage;
