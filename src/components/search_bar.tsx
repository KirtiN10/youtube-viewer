import React, { useState } from "react";
interface Props{
  onSearchTermChange:(param:string)=>{}
}

function SearchBar(props:Props) {
  const [term, setTerm] = useState("");
   /**
   * Function that is being called every time the input has been changed
   * @param {*} term
   */
  const onInputChange = (term: string) => {
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
