// import React, { useState } from "react";

// const TextToSpeech = () => {
//   const [ourText, setOurText] = useState("");
//   const msg = new SpeechSynthesisUtterance();
//   const speechHandler = (msg) => {
//     msg.text = ourText;
//     console.log(msg.text);
//     window.speechSynthesis.speak(msg);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={ourText}
//         placeholder="enter text"
//         onChange={(e) => setOurText(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           speechHandler(msg);
//         }}
//       >
//         hear
//       </button>
//     </div>
//   );
// };
export const TextToSpeech = (ourText) => {
  const msg = new SpeechSynthesisUtterance();
  console.log(ourText);

  const speechHandler = (msg) => {
    msg.text = ourText;
    console.log(msg.text);
    window.speechSynthesis.speak(msg);
  };
  speechHandler(msg);
};
