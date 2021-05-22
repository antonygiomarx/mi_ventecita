import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { List, Menu } from "antd";
import "./Searchbar.css";

import store from "../../store/main/store";

const SearchbarComponent = () => {
  // TODO connect search to algolia
  // eslint-disable-next-line no-unused-vars
  const [searchable, setSearcheable] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    const { getState } = store;
    const { STORE_REDUCER } = getState();
    console.log("STORE", STORE_REDUCER);
    const { products } = STORE_REDUCER;
    console.log(products);

    setSearchProducts(products);

    return () => {
      ac.abort();
    };
  }, []);
  const { Item } = Menu;

  const onSearch = (word) => {
    setSearcheable(true);
    if (word) {
      const obj = searchProducts.map(({ title }) => {
        return title;
      });
      const what = obj.filter((a) => {
        return a.includes(word);
      });
      console.log(what);
    }
    console.log(word);
  };
  /* let data;
  if (products.length > 0) {
    data = products.map(({ title }) => {
      return title;
    });
  } */

  return (
    <div>
      <Search
        placeholder="Buscar Producto"
        className="searchbar"
        onSearch={onSearch}
        onChange={(event) => onSearch(event.target.value)}
      />
      <List
        size="small"
        dataSource={searchProducts}
        renderItem={(item) => (
          <List.Item>
            <Item title={item.title} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchbarComponent;
