import React, { useState } from "react";

function SearchBar(props: any) {
  const [term, setTerm] = useState("");
   /**
   * Function that is being called every time the input has been changed
   * @param {*} term
   */
  const onInputChange = (term: any) => {
    setTerm(term);
    props.onSearchTermChange(term);
  }

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
