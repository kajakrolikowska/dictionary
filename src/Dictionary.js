import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
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
