import Search from "antd/es/input/Search";
import "./Searchbar.css";

const SearchbarComponent = ({ searchableProduct }: any) => {
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
