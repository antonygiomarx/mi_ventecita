/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Image, Input, InputNumber, message, Select, Upload } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";

import getBase64 from "../../../utils/utils";
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../models/product.model";
import { Config } from "../../../config/config";

export const AddProductModalComponent = (): JSX.Element => {
  const [visible] = useState(false);

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState<Product>({
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: "",
    provider: "",
    id: "",
    companyId: Config.companyId,
    quantity: "",
  });

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }: any) => {
    setComponentSize(size);
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url: string) => {
        return setProduct({
          ...product,
          imageUrl: url,
        });
      });
      setLoading(false);
    }
  };

  // const upload = async ({ file, filename }: any) => {
  //   // const imageRef = FirebaseService.getStorage()().ref(`demo/${filename}`);

  //   const bucketImage = await imageRef.put(file);

  //   if (bucketImage.state !== "success") {
  //     console.log("Error subiendo imagen");
  //   } else {
  //     setProduct({
  //       ...product,
  //       imageUrl: await imageRef.getDownloadURL(),
  //     });
  //     setLoading(false);
  //   }
  // };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined id="prueba" />
      ) : (
        !product.imageUrl && <PlusOutlined />
      )}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const productInfo = async () => {
    const productService = new ProductService(product);
    const data = await productService.create();

    if (!data.success) {
      message.error("Hubo un error al crear el producto.");
    } else {
      message.success("Producto creado.");
    }
  };
  return (
    <Modal
      centered
      closable
      onOk={() => {
        productInfo();
      }}
      onCancel={() => {
        console.log("cancelado");
      }}
      visible={visible}
      title="Agregar producto"
      destroyOnClose
    >
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Imagen">
          <Upload
            multiple={false}
            id="upload"
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            showUploadList={false}
            customRequest={async () => {
              // TODO: complete upload
              console.log("subiendo");
            }}
            accept="image/*"
            maxCount={1}
          >
            {!product.imageUrl ? (
              uploadButton
            ) : (
              <Image src={product.imageUrl} />
            )}
          </Upload>
        </Form.Item>
        <Form.Item label="Nombre">
          <Input
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="Descripcion">
          <Input.TextArea
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="Categoría">
          <Select
            onSelect={(value: string) => {
              setProduct({
                ...product,
                category: value,
              });
            }}
          >
            <Select.Option value="Demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Precio">
          <InputNumber
            onChange={(number: string) => {
              setProduct({ ...product, price: number });
            }}
            placeholder="C$"
          />
        </Form.Item>
        <Form.Item label="Provider">
          <Input
            onChange={(e) => {
              setProduct({ ...product, provider: e.target.value });
            }}
            placeholder="proveedor"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
