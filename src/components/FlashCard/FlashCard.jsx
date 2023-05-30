import React, { useEffect, useState } from "react";

function FlashCard({
  title = "Titulo do Card",
  description = "Descrição do Card, que pode conter mais palavras que o titulo",
  showTitleFlashCard = true,
}) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(showTitleFlashCard);
  }, [showTitleFlashCard]);

  function handleCardClick() {
    //setShowTitle(!showTitle);
    setShowTitle((currentShowTitle) => !currentShowTitle);
  }

  const fontSizeClassName = showTitle ? "text-xl" : "text-md";

  return (
    <div
      className={`shadow-lg cursor-pointer p-4 m-2 w-64 flex flex-row items-center justify-center font-semibold ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}

export default FlashCard;
