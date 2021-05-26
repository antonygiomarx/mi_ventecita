import React from "react";
import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import CardComponent from "../card/Card";
import LoadingCard from "../card/Loading";

const ShopComponent = () => {
  const { products } = useSelector((state) => state.STORE_REDUCER);
  return (
    <>
      <Content className="main-content">
        <div className="site-layout-background">
          <Row className="content-products">
            {!products.length ? (
              <Col xs key={uuid()}>
                <LoadingCard />
              </Col>
            ) : (
              products.map(
                ({ id, title, price, category, image, description }) => {
                  return (
                    <Col xs key={uuid()}>
                      <CardComponent
                        title={title}
                        img={image}
                        price={price}
                        category={category}
                        key={uuid()}
                        description={description}
                        id={id}
                      />
                    </Col>
                  );
                }
              )
            )}
          </Row>
        </div>
      </Content>
    </>
  );
};
export default ShopComponent;
