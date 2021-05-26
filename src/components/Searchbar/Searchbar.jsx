import React from "react";
import Search from "antd/es/input/Search";
// import { List } from "antd";
import "./Searchbar.css";

// eslint-disable-next-line no-unused-vars
const SearchbarComponent = ({ searchableProduct }) => {
  // TODO connect search to algolia

  // const { Item } = Menu;

  return (
    <div>
      <Search
        placeholder="Buscar Producto"
        className="searchbar"
        onChange={searchableProduct}
      />
    </div>
  );
};

export default SearchbarComponent;
