import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { collection, query } from "firebase/firestore";
import { nanoid as uuid } from "nanoid";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import { CardComponent } from "@components/Card/Card";
import { LoadingCard } from "@components/Card/Loading";
import { FloatingActionButtonComponent } from "@components/FloatingButton/FloatingActionButton";
import { SearchbarComponent } from "@components/Searchbar/Searchbar";

const loading = (
  <Col key={uuid()}>
    <LoadingCard />
  </Col>
);

export const Store = ({
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
