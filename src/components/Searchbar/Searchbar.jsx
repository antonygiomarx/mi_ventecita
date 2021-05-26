import React from "react";
import Search from "antd/es/input/Search";
// import { List } from "antd";
import "./Searchbar.css";

const SearchbarComponent = ({ searchableProduct }) => {
  // TODO connect search to algolia

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
