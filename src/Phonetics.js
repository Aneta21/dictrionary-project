import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <p>
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          🔊
        </a>{" "}
        {""} <span className="pronunciation">{props.phonetics.text}</span>
      </p>
    </span>
  );
}
