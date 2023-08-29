"use client"

import React, { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {

  const [manuFacturer,setManuFacturer] = useState('')

  const handleSubmit = () => {

  };

  return <div className="searchbar" onSubmit={handleSubmit}>
    <div className="searchbar__item">
      <SearchManufacturer ManuFacturer={manuFacturer} setManuFacturer={setManuFacturer}/>
    </div>
  </div>;
};

export default SearchBar;
