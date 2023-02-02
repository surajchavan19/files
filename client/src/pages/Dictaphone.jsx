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
    if (transcript.includes("home") || transcript.includes("Home")) {
      navigate("/home");
    } else if (transcript.includes("Jobs") || transcript.includes("jobs")) {
      navigate("/images");
    } else if (transcript.includes("blog") || transcript.includes("Blog")) {
      navigate("blog");
    } else if (
      transcript.includes("upskill") ||
      transcript.includes("train") ||
      transcript.includes("learn") ||
      transcript.includes("motivation")
    ) {
      navigate("/training");
    }
  }, [transcript]);

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={SpeechRecognition.startListening}
        className="btn btn-primary"
      >
        Start
      </button>
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* <button onClick={resetTranscript}>Reset</button> */}

      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
