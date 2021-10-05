import { Card, Layout, Typography } from "antd";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { CSSProperties } from "react";

import { ProductService } from "@services/product.service";
import { Product } from "@models/product.model";
import { Main } from "@layout/Main/Main";

const imageSize = {
  width: "300px",
  height: "300px",
};

const sideImageStyles = {
  margin: "10px 0 0 0",
  width: imageSize.width,
  height: imageSize.height,
} as CSSProperties;

export default function ProductPage({
  imageUrl,
  name,
  description,
}: Product): JSX.Element {
  const { Title, Text } = Typography;

  const { Meta } = Card;

  return (
    <>
      <Head>
        <title>{name} - Mi Ventecita</title>
      </Head>
      <Main>
        <Layout style={sideImageStyles}>
          <Card
            cover={
              <Image
                alt={name}
                width={imageSize.width}
                height={imageSize.height}
                src={imageUrl}
              />
            }
          >
            <Meta
              title={<Title>{name}</Title>}
              description={<Text>{description}</Text>}
            />
          </Card>
        </Layout>
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context as unknown as { params: { id: string } };

  const { id } = params;

  const { product } = await ProductService.get(id);

  return {
    props: product,
  };
};
