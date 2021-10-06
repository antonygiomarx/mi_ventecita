import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Image, Input, message, Select, Upload, Modal } from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFirestore, useStorage } from "reactfire";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { RcFile } from "antd/es/upload/interface";
import { UploadChangeParam } from "antd/lib/upload";
import { collection, addDoc } from "firebase/firestore";

import { Product } from "@models/product.model";
import { RootState } from "@redux/models/root-state.model";
import { closeAddProductModal } from "@redux/actions/store.action";

export interface UploadFileProps {
  file: string | Blob | RcFile | File;
  fileName: string;
  route: string;
  contentType?: string;
}

// TODO: Split logic
export const AddProductModalComponent = (): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const open = useSelector<RootState>(
    ({ store }) => store.modalIsOpen,
  ) as boolean;

  const dispatch = useDispatch();
  const storage = useStorage();
  const [imageUrl, setImageUrl] = useState("");

  const { useForm } = Form;

  const [form] = useForm();

  const firestore = useFirestore();

  const productCollection = collection(
    firestore,
    "Companies/Bq7agxz8zsxvF8YDcq2k/Products",
  );

  const addProduct = async (product: Product) => {
    try {
      await addDoc(productCollection, { ...product });
      message.success("Producto agregado");
    } catch (error) {
      message.error("Error agregando producto");
      console.error(error.message);
    }
  };

  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const providerRef = useRef(null);

  const upload = async ({
    file,
    fileName,
    route,
  }: UploadFileProps): Promise<void> => {
    try {
      const storageRef = ref(storage, `${route}/${fileName}`);

      const uploadTask = await uploadBytesResumable(storageRef, file as Blob);

      if (uploadTask.state === "running") {
        setLoading(true);
      }
      if (uploadTask.state === "success") {
        const url = await getDownloadURL(storageRef);
        setLoading(false);
        setImageUrl(url);
      }
    } catch (error) {
      console.log(error);
      message.error("Error subiendo imagen");
    }
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

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.

      setLoading(false);
    }
  };

  const customRequest = async ({ file }) => {
    const { name } = file as RcFile;
    try {
      await upload({
        file: file as Blob,
        fileName: name.split(".")[0] || `${Date.now()}`,
        route: "demo",
      });
    } catch (error) {
      console.error(error);
      message.error("Error subiendo imagen");
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : !imageUrl && <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Subir</div>
    </div>
  );

  const onOk = () => {
    form
      .validateFields()
      .then(
        ({
          name,
          price,
          provider,
          category,
          description,
          quantity,
        }: Product) => {
          addProduct({
            name,
            price,
            category,
            provider,
            imageUrl,
            description,
            companyId: "Bq7agxz8zsxvF8YDcq2k",
            quantity,
            id: "",
          })
            .then(() => {
              form.resetFields();
              setImageUrl("");
              dispatch(closeAddProductModal());
            })
            .catch((error) => {
              console.error(error);
            });
        },
      )
      .catch((error) => console.error(error));
  };

  const onCancel = () => {
    dispatch(closeAddProductModal());
  };

  return (
    <Modal
      centered
      closable
      onCancel={onCancel}
      visible={open}
      title="Agregar producto"
      destroyOnClose
      okText="Agregar"
      cancelText="Cancelar"
      onOk={onOk}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        form={form}
        name="add_product_modal_form"
      >
        <Form.Item
          name="Image Form"
          rules={[
            {
              required: true,
              message: "Imagen es requerida",
            },
          ]}
          required
          label="Imagen"
        >
          <Upload
            multiple={false}
            id="upload"
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            showUploadList={false}
            customRequest={customRequest}
            accept="image/*"
            maxCount={1}
            type="select"
          >
            {!imageUrl ? (
              uploadButton
            ) : (
              <Image
                alt={nameRef.current?.value}
                preview={false}
                src={imageUrl}
              />
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Nombre de Producto es requerido",
            },
          ]}
          required
          label="Nombre"
          name="name"
        >
          <Input type="text" ref={nameRef} name="name" required />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Descripción del Producto es requerido",
            },
          ]}
          required
          label="Descripcion"
          name="description"
        >
          <Input.TextArea ref={descriptionRef} required name="description" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Categoría de Producto es requerido",
            },
          ]}
          label="Categoría"
          required
          name="category"
        >
          <Select ref={categoryRef}>
            <Select.Option value="Demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: "Precio de Producto es requerido",
            },
          ]}
          required
          label="Precio"
          wrapperCol={{
            sm: 7,
          }}
        >
          <Input type="number" ref={priceRef} required placeholder="$" />
        </Form.Item>
        <Form.Item
          name="quantity"
          rules={[
            {
              required: true,
              message: "Cantidad de Producto es requerido",
            },
          ]}
          required
          label="Cantidad"
          wrapperCol={{
            sm: 7,
          }}
        >
          <Input type="number" ref={priceRef} required placeholder="1234" />
        </Form.Item>
        <Form.Item
          name="provider"
          rules={[
            {
              required: true,
              message: "Proveedor de Producto es requerido",
            },
          ]}
          required
          label="Proveedor"
        >
          <Input placeholder="Proveedor" ref={providerRef} required />
        </Form.Item>
      </Form>
    </Modal>
  );
};
