// // const faces = ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨"];

// // function shuffleArray(array) {
// //   const shuffledArray = array.slice();
// //   for (let i = shuffledArray.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// //   }
// //   return shuffledArray;
// // }

// // function App() {
// //   const [cards, setCards] = useState([]);
// //   const [flippedIndices, setFlippedIndices] = useState([]);
// //   const [matchedPairs, setMatchedPairs] = useState([]);

// //   function useEffect() {
// //     // Initialize the game with shuffled cards
// //     const shuffledFaces = shuffleArray([...faces, ...faces]);
// //     const initialCards = shuffledFaces.map((face, index) => ({
// //       id: index,
// //       face,
// //       isFlipped: false,
// //     }));
// //     setCards(initialCards);
// //   }

// //   useEffect(() => {
// //     // Check if two cards are flipped and match
// //     if (flippedIndices.length === 2) {
// //       const [index1, index2] = flippedIndices;
// //       if (cards[index1].face === cards[index2].face) {
// //         setMatchedPairs([...matchedPairs, cards[index1].face]);
// //       }
// //       // Reset flipped cards after a short delay
// //       setTimeout(() => setFlippedIndices([]), 1000);
// //     }
// //   }, [flippedIndices, cards, matchedPairs]);

// //   function handleCardClick(index) {
// //     // Ignore clicks on already matched cards
// //     if (matchedPairs.includes(cards[index].face)) {
// //       return;
// //     }

// //     // Ignore clicks on the same card or if two cards are already flipped
// //     if (flippedIndices.length === 1 || flippedIndices.includes(index)) {
// //       return;
// //     }

// //     // Flip the selected card
// //     const newCards = cards.map((card, i) =>
// //       i === index ? { ...card, isFlipped: true } : card
// //     );
// //     setCards(newCards);
// //     setFlippedIndices([...flippedIndices, index]);
// //   }

// //   return (
// //     <div className="App">
// //       <h1>Memory Game</h1>
// //       <div className="card-container">
// //         {cards.map((card, index) => (
// //           <div
// //             key={index}
// //             className={`card ${card.isFlipped ? "flipped" : ""}`}
// //             onClick={() => handleCardClick(index)}
// //           >
// //             {card.isFlipped ? card.face : "👁️"}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // //
// import "./App.css";
// import ClickableCard from "./Ttest";
// import React, { useState } from "react";

// export function DivArrayComponent() {
//   const arrayOfData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//   const [UWT, setUWT] = useState([0, 0, 0, 0, 0, 0, 0, 0]); //uniquewordtracker
//   //const [AAA, setAAA] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
//   const [Hold, setHold] = useState(false); //uniquewordtracker
//   //const [WHold, setWHold] = useState(false); //uniquewordtracker
//   const uniqueWords = ["A", "B", "C", "D", "E", "F", "G", "H"]; //cards content
//   const [UWS, setUWS] = useState([]); //unique

//   function shuffle(array) {
//     let currentIndex = array.length,
//       randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex],
//         array[currentIndex],
//       ];
//     }

//     return array;
//   }

//   if (Hold === false) {
//     setUWS(shuffle(uniqueWords));
//     console.log(UWS);
//     setHold(true);
//   }

//   const handleUClick = (index) => {
//     if (UWT[index] >= 2) return false; //if arr[i] >= 2 set randomindex again
//     else {
//       const newArray = [...UWT]; //create copy
//       newArray[index]++; //= newArray[index] + 1; //increment index
//       setUWT(newArray); // Update uniqueWordTracker
//       //console.log(UWT);
//       return true;
//     }
//   };
//   const check = () => {
//     // console.log(UWT.filter((value) => value === 1).length);
//     // console.log(UWT);
//     // //   console.log(UWT);
//     // return UWT;
//   };
//   // for (var i = 0; i < UWS.length; i++) {
//   //   if (UWT[i] === 1) {
//   //     item[i] = arr3[i];
//   //   }
//   // }
//   return (
//     <div className="Card-box">
//       {arrayOfData.map((item, index) => (
//         <ClickableCard
//           item={item}
//           key={index}
//           CardW={UWS}
//           handleUClick={() => handleUClick()}
//           check={(checkIndex) => check(checkIndex)}
//         />
//       ))}
//     </div>
//   );
// }
// export default DivArrayComponent;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //

import "./App.css";
import ClickableCard from "./Ttest";
import React, { useState } from "react";

export function DivArrayComponent() {
  const uniqueWords = ["A", "B", "C", "D", "E", "F", "G", "H"]; //cards content
  const arrayOfData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [UWT, setUWT] = useState([0, 0, 0, 0, 0, 0, 0, 0]); //uniquewordtracker
  const [Hold, setHold] = useState(false); //uniquewordtracker
  const [UWS, setUWS] = useState([]); //unique

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  if (Hold === false) {
    setUWS(shuffle(uniqueWords));
    setHold(true);
  }

  const handleUClick = (index) => {
    if (UWT[index] >= 2) return false; //if arr[i] >= 2 set randomindex again
    else {
      const newArray = [...UWT]; //create copy
      newArray[index]++; //= newArray[index] + 1; //increment index
      setUWT(newArray); // Update uniqueWordTracker
      //console.log(index);
      return true;
    }
  };
  // const check = () => {
  //   if (UWT.filter((value) => value === 1).length === 2) {
  //     //const newArray = [...UWT]; //create copy
  //     const newArray = UWT.map((element) => (element === 1 ? 0 : element));
  //     //console.log(newArray);
  //     setUWT(newArray); // Update uniqueWordTracker
  //     return true;
  //   } else return false;
  // };
  const check = () => {
    if (UWT.filter((value) => value === 1).length === 2) {
      const newArray = UWT.map((element) => (element === 1 ? 0 : element));
      setUWT(newArray);
      return true;
    } else return false;
  };

  return (
    <div className="Card-box">
      {arrayOfData.map((item) => (
        <ClickableCard
          item={item}
          key={item}
          CardW={UWS}
          handleUClick={(randomIndex) => handleUClick(randomIndex)}
          check={() => check()}
        />
      ))}
    </div>
  );
}
export default DivArrayComponent;

// useEffect(() => {
//   const hhh = [2, 2, 2, 2, 2, 2, 2, 2];
//   console.log(UWS);
//   console.log(hhh);
//   if (hhh === UWS) console.log("sbdfkjvsl");
// }, [UWS]); // Log UWS whenever it changes
