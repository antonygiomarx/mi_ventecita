import { Card } from "antd";
import { CSSProperties } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { nanoid as uuid } from "nanoid";

import { Product } from "@models/product.model";

const imageStyles = {
  width: "270px",
  height: "300px",
};

const cardStyles = {
  margin: "10px",
  padding: "10px",
  borderRadius: "30px",
  width: "270px",
  height: "400px",
  overflow: "hidden",
  objectFit: "cover",
} as CSSProperties;

const metaCardStyles = {
  width: "100%",
} as CSSProperties;

export const CardComponent = ({
  name,
  imageUrl,
  price,
  id,
}: Product): JSX.Element => {
  const { push } = useRouter();

  const { Meta } = Card;

  const handleClick = () => {
    push(`store/products/${id}`);
  };

  return (
    <>
      <Card
        onClick={handleClick}
        cover={
          <Image
            width={imageStyles.width}
            height={imageStyles.height}
            key={uuid()}
            src={imageUrl}
            alt={name}
            loading="lazy"
          />
        }
        style={cardStyles}
      >
        <Meta
          key={uuid()}
          title={name}
          description={`C$${price}`}
          style={metaCardStyles}
        />
      </Card>
    </>
  );
};
