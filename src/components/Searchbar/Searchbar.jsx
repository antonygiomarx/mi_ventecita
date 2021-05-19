import React from "react";
import Search from "antd/es/input/Search";

import "./Searchbar.css";
import store from "../../store/main/store";

const SearchbarComponent = () => {
  // TODO connect search to algolia
  // eslint-disable-next-line no-unused-vars

  const onSearch = (word) => {
    if (word) {
      store.dispatch({
        type: "SEARCH_PRODUCT",
        word,
      });
    }
  };

  return (
    <Search
      placeholder="Buscar Producto"
      onSearch={onSearch}
      className="searchbar"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
};

export default SearchbarComponent;
