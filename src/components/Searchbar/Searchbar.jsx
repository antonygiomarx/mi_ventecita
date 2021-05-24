import React, { useState } from "react";
import { useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import { List } from "antd";
import "./Searchbar.css";

// import store from "../../store/main/store";

const SearchbarComponent = () => {
  // TODO connect search to algolia
  // eslint-disable-next-line no-unused-vars
  const [searchProducts, setSearchProducts] = useState([]);
  /* const { getState } = store;
  const { STORE_REDUCER } = getState();
  const { products } = STORE_REDUCER;
  console.log(products); */
  const { products } = useSelector((state) => state.STORE_REDUCER);
  // console.log(productos);
  // console.log(products);
  // const { Item } = Menu;

  const onSearch = (word) => {
    const obj = products.map(({ title }) => {
      return title;
    });
    const what = obj.filter((a) => {
      return a.toLowerCase().includes(word.toLowerCase());
    });
    // console.log(word);
    // console.log(what);
    setSearchProducts(what);
    console.log(searchProducts);
  };
  const data = searchProducts;
  return (
    <div>
      <Search
        placeholder="Buscar Producto"
        className="searchbar"
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default SearchbarComponent;
