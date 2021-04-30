import React from "react";
import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const CardComponent = ({ title, img, description, price, category }) => {
  return (
    <Card
      cover={
        <img
          src={img}
          alt={title}
          style={{ maxWidth: "100%", maxHeight: "158px", width: "100%" }}
        />
      }
      style={{
        margin: "10px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "30px",
        width: "270px",
        height: "360px",
        maxHeight: "100%",
        maxWidth: "100%",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "100%",
            maxHeight: "100%",
            alignSelf: "center",
          }}
        >
          <h1>{title}</h1>
          <span
            style={{
              display: "flex",
              alignItems: "flex-end",
              margin: "0 0 0 150px",
              fontWeight: "bold",
            }}
          >
            C${price}
          </span>
        </div>

        <Paragraph
          ellipsis={
            description
              ? {
                  rows: 2,
                  expandable: true,
                  symbol: "more",
                }
              : false
          }
        >
          {description}
        </Paragraph>

        <p>{category}</p>
      </div>
    </Card>
  );
};

export default CardComponent;
