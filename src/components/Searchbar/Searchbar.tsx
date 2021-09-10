import Search from "antd/es/input/Search";

import "./Searchbar.css";

export const SearchbarComponent = (): JSX.Element => {
  // TODO connect search to algolia

  return (
    <Search
      style={{ width: "70%" }}
      placeholder="Buscar Producto"
      className="searchbar"
    />
  );
};
