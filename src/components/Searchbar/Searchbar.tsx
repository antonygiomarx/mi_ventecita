import { Input } from "antd";

export const SearchbarComponent = (): JSX.Element => {
  // TODO connect search to algolia

  const { Search } = Input;

  return (
    <Search
      style={{ width: "70%" }}
      placeholder="Buscar Producto"
      className="searchbar"
    />
  );
};
