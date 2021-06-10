import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./Store.css";
// import store from "../../store/main/store";
import CardComponent from "../../components/Card/Card";
import LoadingCard from "../../components/Card/Loading";
import FloatingActionButtonComponent from "../../components/FloatingButton/FloatingActionButton";
// import STORE_ACTIONS from "../../redux/actions/store.action";
import SearchbarComponent from "../../components/Searchbar/Searchbar";
import { Product } from "../../models/product.model";
// import { ProductService } from "../../services/product.service";

const StoreComponent = ({
  isSelectable,
}: {
  isSelectable: boolean | undefined;
}): JSX.Element => {
  // const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  // const [searchTitle, setSearchTitle] = useState<string>("");
  // const { getState } = store;

  const [products, setProducts] = useState<Product[]>([]);
  console.log(setProducts);

  // const renderProducts = (productsToRender: Product[]) => {
  //   STORE_ACTIONS.SET_PRODUCTS(productsToRender);
  //   const { STORE_REDUCER } = getState();
  //   const { products: stateProducts }: any = STORE_REDUCER;
  //   console.log(stateProducts);

  //   // setProducts(stateProducts);
  // };
  // const { updatedProducts: a } = useSelector((state) => state.STORE_REDUCER);
  // const renderUpdatedProducts = () => {
  //   const { STORE_REDUCER } = getState();
  //   const { products: stateProducts }: any = STORE_REDUCER;
  //   console.log(stateProducts);

  //   // setProducts(stateProducts);
  // };
  // useEffect(() => {
  //   const ac = new AbortController();
  //   try {
  //     (async () => {
  //       const { products: productsDb } = await ProductService.getAll();
  //       console.log(productsDb);

  //       // renderProducts(productsDb);
  //     })();
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.log(error.message);
  //   }

  //   return () => {
  //     ac.abort();
  //   };
  // });

  // const filterProducts = () => {};

  // subscribe(renderUpdatedProducts);

  // const onSearch = (word: string) => {
  //   // eslint-disable-next-line no-unused-vars
  //   const titles = products.filter(({ name: product }) => {
  //     return product.toLowerCase().includes(word.toLowerCase());
  //   });
  //   // setSearchTitle(word);
  //   setSearchProducts(titles);
  // };
  const searchTitle = "";
  return (
    <>
      <SearchbarComponent
      // searchableProduct={(e: { target: { value: string } }) => {
      //   console.log(e.target.value);

      //   // onSearch(e.target.value);
      // }}
      />
      <Content className="main-content">
        <div className="site-layout-background">
          <Row className="content-products">
            {!products.length && (
              <Col key={uuid()}>
                <LoadingCard />
              </Col>
            )}
            {
              searchTitle.length < 1 ??
                products.map(
                  ({
                    id,
                    name,
                    price,
                    category,
                    imageUrl,
                    description,
                    companyId,
                    provider,
                    quantity,
                  }: Product) => (
                    <CardComponent
                      name={name}
                      imageUrl={imageUrl}
                      price={price}
                      category={category}
                      key={uuid()}
                      description={description}
                      id={id}
                      isSelectable={isSelectable}
                      companyId={companyId}
                      provider={provider}
                      quantity={quantity}
                    />
                  ),
                )
              // : searchProducts.map(
              //     ({
              //       id,
              //       name,
              //       price,
              //       category,
              //       imageUrl,
              //       description,
              //       companyId,
              //       provider,
              //       quantity,
              //     }: Product) => (
              //       <CardComponent
              //         name={name}
              //         imageUrl={imageUrl}
              //         price={price}
              //         category={category}
              //         key={uuid()}
              //         description={description}
              //         id={id}
              //         isSelectable={isSelectable}
              //         companyId={companyId}
              //         provider={provider}
              //         quantity={quantity}
              //       />
              //     ),
              //   )}
            }
            {!isSelectable && <FloatingActionButtonComponent />}
          </Row>
        </div>
      </Content>
    </>
  );
};

export default StoreComponent;
