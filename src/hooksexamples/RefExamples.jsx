import React, { useEffect, useRef, useState } from "react";
import VIDEO from "./Video.mp4";

export const RefExamples = () => {
  const [play, setPlay] = useState(true);
  const eleRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    eleRef.current.style.color = "teal";
    eleRef.current.innerText = "React Ref";
  }, []);

  let playORpause = () => {
    if (play) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };

  return (
    <div>
      <h1 ref={eleRef}>RefExamples</h1>
      <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
    </div>
  );
};
