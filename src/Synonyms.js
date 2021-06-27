import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <span className="oneline">
          Synonyms:{""}
          {props.synonyms.map(function (synonym, index) {
            return <p key={index}> {synonym} </p>;
          })}
        </span>
      </span>
    );
  } else {
    return null;
  }
}
