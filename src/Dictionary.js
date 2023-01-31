import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);

    //API documentation https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="SearchForm">
      <h1>Dictionary</h1>
      <p>Let's check the definition of:</p>
      <form onSubmit={search}>
        <input type="search" autoFocus="true" onChange={handleKeyword} />
      </form>
    </div>
  );
}
