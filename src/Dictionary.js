import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  // receives the data from api and stores it to the state
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexels(response) {
    setPhotos(response.data.photos);
  }
  // handles search thru api
  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsKey =
      "563492ad6f917000010000010f9d15e28955441bb35ded49dff6cfdb";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexels);
  }
  // handles what user typed
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to learn about?</h1>
          <form className="form-group " onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} />
          </form>
          <div className="hint"> e.g., forest, book, wine, coffee</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
