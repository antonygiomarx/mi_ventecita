import { Input } from "antd";
import { CSSProperties } from "react";

const searchbarStyles = {
  position: "sticky",
  width: "70%",
  marginBottom: "10px",
} as CSSProperties;

export const SearchbarComponent = (): JSX.Element => {
  // TODO connect search to algolia

  const { Search } = Input;

  return (
    <Search
      style={searchbarStyles}
      placeholder="Buscar Producto"
      className="searchbar"
    />
  );
};
