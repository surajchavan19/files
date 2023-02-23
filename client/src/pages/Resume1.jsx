import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Resume1 = () => {
  let navigate = useNavigate();
  const [navigation, setNavigation] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [data, setData] = useState({});
  const [count, setCount] = useState(1);

  const onStoreData = (data) => {
    console.log(data);
  };
  console.log(transcript, data);
  console.log(count);

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <form action="">
        <input
          type="text"
          name="name"
          value={(data.name = count === 1 ? transcript : null)}
          onPress={() => {
            setCount(2);
          }}
          onChange={(e) => {
            if (count === 1) {
              setCount(2);
              onStoreData({ name: e.target.value });
              setData({ ...data, name: e.target.value });
            }
          }}
        />
        {/* <button onClick={SpeechRecognition.startListening}></button> */}
        <input
          type="text"
          name="name"
          value={(data.email = count === 2 ? transcript : null)}
          onPress={() => {
            setCount(3);
          }}
          onChange={(e) => {
            if (count === 2) {
              setData({ ...data, email: e.target.value });
            }
          }}
        />
      </form>
      <button onClick={SpeechRecognition.startListening}>Start</button>

      <h1>{transcript}</h1>
    </div>
  );
};
