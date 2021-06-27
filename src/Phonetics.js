import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <p>
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          🎵
        </a>
        {props.phonetics.text}
      </p>
    </span>
  );
}
