import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, index) {
          return <p key={index}> {synonym} </p>;
        })}
      </span>
    );
  } else {
    return null;
  }
}
