// // import { useState } from "react";
// // import "./App.css";
// // import DivArrayComponent from "./DivArr";

// // export function Aa() {
// //   const [content, setContent] = useState("");

// //   const handleClick = () => {
// //     setContent("123");
// //   };
// //   return (
// //     <div onClick={handleClick}>
// //       <p> {handleClick} </p>
// //     </div>
// //   );
// // }

// // export default Aa;

// // const [x, setX] = useState(prop);
// // const [y, setY] = useState("");

// // function srch(event) {
// //   setX(event.target.value);
// //   setY("x");
// //   console.log(x);

// //   return (
// //     <div>
// //       {" "}
// //       <h1>de</h1>
// //     </div>
// //   );
// // }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // const [uA, setuA] = useState(0);
// //   const [uB, setuB] = useState(0);
// //   const [uC, setuC] = useState(0);
// //   const [uD, setuD] = useState(0);
// //   const [uE, setuE] = useState(0);
// //   const [uF, setuF] = useState(0);
// //   const [uG, setuG] = useState(0);
// //   const [uH, setuH] = useState(0);

// // while (1) {
// //   if (uA < 1 && randomIndex === 0) {
// //     setuA(uA + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uB < 2 && randomIndex === 1) {
// //     setuB(uB + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uC < 2 && randomIndex === 2) {
// //     setuC(uC + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uD < 2 && randomIndex === 3) {
// //     setuD(uD + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uE < 2 && randomIndex === 4) {
// //     setuE(uE + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uF < 2 && randomIndex === 5) {
// //     setuF(uF + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uG < 2 && randomIndex === 6) {
// //     setuG(uG + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   } else if (uH < 2 && randomIndex === 7) {
// //     setuH(uH + 1);
// //     incrementElement(); // calling incrementElement to track words

// //     break;
// //   }
// //   randomIndex = Math.floor(Math.random() * uniqueWords.length);
// // }

// // console.log(uA);
// // console.log(uB);
// // console.log(uC);
// // console.log(uD);
// // console.log(uE);
// // console.log(uF);
// // console.log(uG);
// // console.log(uH);


// import React, { useEffect, useState } from "react";
// import "./App.css";

// const ClickableCard = ({ item, handleUClick, CardW, check }) => {
//   const [content, setContent] = useState(item); //displaying card before after clicking
//   const [isClicked, setIsClicked] = useState(false); //tracking if div is clicked
//   const [data, setData] = useState(0);
//   const Words = CardW; //displaying card content after clicking

//   useEffect(() => {
//     //console.log(data);
//     if (data == 1 && check == 2) {
//       console.log(data);
//     }
//   }, [content]);

//   const handleClick = (index) => {
//     //if card wasn't clicked before

//     if (!isClicked) {
//       let randomIndex = Math.floor(Math.random() * Words.length);
//       while (!handleUClick(randomIndex))
//         randomIndex = Math.floor(Math.random() * Words.length);

//       setContent(Words[randomIndex]); // uploading card content
//       setIsClicked(true); //prevents further changes
//       setData(data + 1); // store the index of the clicked card
//       // check(item - 1);
//     }
//   };
//   return (
//     <div className="Card" onClick={handleClick}>
//       {content}
//     </div>
//   );
// };

// export default ClickableCard;














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










import React, { useEffect, useState } from "react";
import "./App.css";

const ClickableCard = ({ item, handleUClick, CardW, check }) => {
  const [content, setContent] = useState(item); //displaying card content after clicking
  const [isClicked, setIsClicked] = useState(false); //tracking if div is clicked
  //const [isWClicked, setIsWClicked] = useState(false); //tracking if div is clicked
  const Words = CardW; //displaying card content after clicking
  //const CardC = Math.floor(Math.random() * Words.length);
  // let randomIndex = Math.floor(Math.random() * Words.length);

  useEffect(() => {
    if (check()) {
      setIsClicked(false);
      setContent(item);
    }
  }, [check, item]);

  const handleClick = () => {
    if (!isClicked) {
      let randomIndex = Math.floor(Math.random() * Words.length);
      while (!handleUClick(randomIndex))
        randomIndex = Math.floor(Math.random() * Words.length);

      setContent(Words[randomIndex]);
      setIsClicked(true);
    }
  };

  return (
    <div className="Card" onClick={handleClick}>
      {content}
    </div>
  );
};

export default ClickableCard;
