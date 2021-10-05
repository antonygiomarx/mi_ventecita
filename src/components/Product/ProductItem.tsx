import { List } from "antd";
import { nanoid as uuid } from "nanoid";
import Image from "next/image";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

import { Product } from "@models/product.model";

const productItemStyles = {
  display: "flex",
  width: "100%",
  flexDirection: "column-reverse",
  margin: "5px",
  justifyContent: "center",
  cursor: "pointer",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
} as CSSProperties;

export const ProductItem = ({
  imageUrl,
  name,
  description,
  id,
}: Product): JSX.Element => {
  const { push } = useRouter();

  const { Item } = List;
  const { Meta } = Item;

  const handleClick = () => {
    push(`store/products/${id}`);
  };

  return (
    <Item
      style={productItemStyles}
      onClick={handleClick}
      key={uuid()}
      extra={<Image width="272px" height="200px" alt={name} src={imageUrl} />}
    >
      <Meta title={name} description={description} />
    </Item>
  );
};
