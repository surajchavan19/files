import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  let navigate = useNavigate();
  const [navigation, setNavigation] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }
  useEffect(() => {
    if (transcript.includes("upload")) {
      navigate("/upload");
    } else if (transcript.includes("images")) {
      navigate("/images");
    } else if (transcript.includes("Sachin")) {
      console.log("Kyu hila daala na");
    }
  }, [transcript]);

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>h1</p>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
