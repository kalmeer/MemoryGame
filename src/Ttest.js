import React, { useEffect, useState } from "react";
import "./App.css";

const ClickableCard = ({
  item,
  check,
  checkHold,
  mapAndIncrement,
  Arrlength,
}) => {
  const [content, setContent] = useState(item.number); // displaying card content after clicking
  const [isClicked, setIsClicked] = useState(false); // tracking if div is clicked
  const Word = item.word; // displaying card content after clicking
  console.log(Arrlength);
  useEffect(() => {
    // Function to be executed after a 1-second delay
    const delayedExecution = () => {
      if (checkHold(Word) && check()) {
        setContent(item.number);
        setIsClicked(false);
      }
    };
    // Use setTimeout to execute the delayed function
    setTimeout(delayedExecution, 500);
  }, [Word, check, item.number, setIsClicked, setContent, checkHold]);

  const handleClick = () => {
    if (!isClicked) {
      mapAndIncrement(Word);
      setContent(Word);
      setIsClicked(true);
    }
  };

  if (Arrlength === 8)
    return (
      <div className="CardE" onClick={handleClick}>
        {content}
      </div>
    );

  if (Arrlength === 16)
    return (
      <div className="CardM" onClick={handleClick}>
        {content}
      </div>
    );

  if (Arrlength === 32)
    return (
      <div className="CardH" onClick={handleClick}>
        {content}
      </div>
    );
};

export default ClickableCard;
