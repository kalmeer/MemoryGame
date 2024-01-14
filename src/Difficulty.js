import React, { useState } from "react";
import DivArrayComponent from "./DivArr";

const shuffleArray = (mode, x) => {
  for (let i = mode.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mode[i], mode[j]] = [mode[j], mode[i]];
  }
  const data = [];
  for (let i = 0; i < x; i++) {
    data.push({ number: i + 1, word: mode[i] });
  }

  return data;
};

const Difficulty = ({ GameMode }) => {
  const [hold, sethold] = useState(false);
  const uniqueWordsEasy = ["A", "B", "C", "D", "E", "F", "G", "H"]; // card content after click
  const uniqueWordsMed = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
  ]; // card content after click

  const uniqueWordsHard = [
    "A",
    "C",
    "B",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "AA",
    "BB",
    "CC",
    "DD",
    "EE",
    "FF",
  ];

  // duplicate arrays
  const setE = [...uniqueWordsEasy, ...uniqueWordsEasy];
  const setM = [...uniqueWordsMed, ...uniqueWordsMed];
  const setH = [...uniqueWordsHard, ...uniqueWordsHard];
  let Maaw = [];

  if (!hold) {
    if (GameMode === "Easy") Maaw = setE;
    if (GameMode === "Med") Maaw = setM;
    if (GameMode === "Hard") Maaw = setH;

    sethold(true);
  }
  // eslint-disable-next-line
  const [uniquewords, setuniquewords] = useState(() => Maaw);

  // Shuffling
  // eslint-disable-next-line
  const [ShuffledArr, setArrayofData] = useState(() =>
    shuffleArray(uniquewords, uniquewords.length)
  );

  return (
    <div>
      <DivArrayComponent mode={ShuffledArr} />
    </div>
  );
};

export default Difficulty;
