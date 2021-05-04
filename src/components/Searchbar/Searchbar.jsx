import React from "react";
import Search from "antd/es/input/Search";

import "./Searchbar.css";

const SearchbarComponent = () => {
  // TODO connect search to algolia
  // eslint-disable-next-line no-unused-vars
  const onSearch = (value) => {};

  return (
    <Search
      placeholder="Search Product"
      onSearch={onSearch}
      className="searchbar"
      onChange={(event) => setTimeout(() => onSearch(event.target.value), 1500)}
    />
  );
};

export default SearchbarComponent;
