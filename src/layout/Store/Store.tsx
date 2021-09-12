import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { v4 as uuid } from "uuid";

import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection, query } from "firebase/firestore";
import { CardComponent } from "../../components/Card/Card";
import { LoadingCard } from "../../components/Card/Loading";
import { SearchbarComponent } from "../../components/Searchbar/Searchbar";
import { FloatingActionButtonComponent } from "../../components/FloatingButton/FloatingActionButton";

import "./Store.css";

const loading = (
  <Col key={uuid()}>
    <LoadingCard />
  </Col>
);

export const StoreComponent = ({
  isSelectable,
}: {
  isSelectable: boolean | undefined;
}): JSX.Element => {
  const firestore = useFirestore();

  const productsCollection = collection(
    firestore,
    "Companies/Bq7agxz8zsxvF8YDcq2k/Products",
  );
  const productsQuery = query(productsCollection);

  const { data: products, status } = useFirestoreCollectionData(productsQuery, {
    idField: "id",
  });

  if (status === "loading") {
    return loading;
  }

  return (
    <>
      <SearchbarComponent />
      <Content className="main-content">
        <div className="site-layout-background">
          <Row className="content-products">
            {!isSelectable && <FloatingActionButtonComponent />}
            {products.map(
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
              }) => (
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
            )}
          </Row>
        </div>
      </Content>
    </>
  );
};
