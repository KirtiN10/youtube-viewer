import React, { useState } from "react";
import TextField from '@mui/material/TextField';

interface Props {
  onSearchTermChange:(param:string)=>void
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
    <div data-testid="search-form" className="search-bar">
      <TextField
        data-testid="term"
        name="term"
        label="Search Video" variant="standard"
        fullWidth
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
