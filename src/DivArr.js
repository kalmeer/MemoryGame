import React, { useEffect, useState } from "react";
import ClickableCard from "./Ttest";

export function DivArrayComponent({ mode }) {
  const DivModeBy2 = mode.length / 2;
  const [trackWords, settrackWords] = useState(Array(DivModeBy2).fill(0)); // unique word tracker
  // Shuffling
  // eslint-disable-next-line
  const [ShuffledArray, setArrofData] = useState(mode);

  //useState calls to check if letter is used twice
  const checkHold = (word) => {
    const index = word.charCodeAt(0) - "A".charCodeAt(0);
    if (trackWords[index] === 2) return false;
    else return true;
  };

  //useState calls to see what cards are being displayed
  const check = () => {
    if (trackWords.filter((element) => element === 1).length <= 1) return false;
    //if 2 unmatching cards are revealed
    else if (trackWords.filter((element) => element === 1).length > 1) {
      //resets trackWords indecies == 1 to 0
      const newArray = trackWords.map((element) =>
        element === 1 ? 0 : element
      );
      settrackWords(newArray);
      return true;
    } else return false;
  };

  // update trackWords array
  const mapAndIncrement = (char) => {
    const index = char.charCodeAt(0) - "A".charCodeAt(0);
    settrackWords((prevArray) => {
      const newArray = [...prevArray];
      newArray[index]++;
      return newArray;
    });
  };
  console.log(DivModeBy2);
  useEffect(() => {
    console.log(trackWords);
    if (trackWords.filter((element) => element === 2).length === DivModeBy2) {
      alert("You win!");
    }
  }, [trackWords, DivModeBy2]);
  if (DivModeBy2 === 8)
    return (
      <div className="Card-boxE">
        {ShuffledArray.map((item) => (
          <ClickableCard
            key={item.number}
            item={item}
            check={() => check()}
            checkHold={(word) => checkHold(word)}
            mapAndIncrement={(char) => mapAndIncrement(char)}
            Arrlength={DivModeBy2}
          />
        ))}
      </div>
    );
  else if (DivModeBy2 === 16)
    return (
      <div className="Card-boxM">
        {ShuffledArray.map((item) => (
          <ClickableCard
            key={item.number}
            item={item}
            check={() => check()}
            checkHold={(word) => checkHold(word)}
            mapAndIncrement={(char) => mapAndIncrement(char)}
            Arrlength={DivModeBy2}
          />
        ))}
      </div>
    );
  else if (DivModeBy2 === 32)
    return (
      <div className="Card-boxH">
        {ShuffledArray.map((item) => (
          <ClickableCard
            key={item.number}
            item={item}
            check={() => check()}
            checkHold={(word) => checkHold(word)}
            mapAndIncrement={(char) => mapAndIncrement(char)}
            Arrlength={DivModeBy2}
          />
        ))}
      </div>
    );
}

export default DivArrayComponent;
