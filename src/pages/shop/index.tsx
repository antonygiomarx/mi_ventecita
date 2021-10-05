import { Layout, List } from "antd";
import { collection, query } from "firebase/firestore";
import Head from "next/head";
import { CSSProperties } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import { ProductItem } from "@components/Product/ProductItem";
import { SearchbarComponent } from "@components/Searchbar/Searchbar";
import { Main } from "@layout/Main/Main";
import { Product } from "@models/product.model";

const mainContentStyles = {
  overflow: "hidden",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#fff",
} as CSSProperties;

const paginationStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  padding: "0 0 20px 0",
} as CSSProperties;

const Shop = (): JSX.Element => {
  const firestore = useFirestore();

  const productsCollection = collection(
    firestore,
    "Companies/Bq7agxz8zsxvF8YDcq2k/Products",
  );
  const productsQuery = query(productsCollection);

  const { data: products, status } = useFirestoreCollectionData(productsQuery, {
    idField: "id",
  });

  const { Content } = Layout;

  return (
    <>
      <Head>
        <title>Tienda - Mi Ventecita</title>
      </Head>
      <Main>
        <>
          <SearchbarComponent />
          <Content style={mainContentStyles}>
            <Layout>
              <List
                loading={status === "loading"}
                size="default"
                dataSource={products}
                bordered
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 10,
                  style: paginationStyles,
                }}
                itemLayout="vertical"
                renderItem={(product: Product) => <ProductItem {...product} />}
              />
            </Layout>
          </Content>
        </>
      </Main>
    </>
  );
};

export default Shop;
