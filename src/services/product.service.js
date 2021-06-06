import * as axios from "axios";

const createProduct = async ({
  name,
  category,
  imageUrl,
  price,
  provider,
  quantity,
  companyId,
  description,
}) => {
  const { data } = await axios.post(
    "https://us-central1-miventecita-6be84.cloudfunctions.net/api/addProduct",
    {
      name,
      category,
      imageUrl,
      price,
      provider,
      companyId,
      quantity,
      description,
    },
    { headers: { Authorization: "Bearer B7569BD14D1C9632DC3711151F6C8" } }
  );
  return data;
};

const getProducts = async () => {
  const { data } = await axios.get(
    "https://us-central1-miventecita-6be84.cloudfunctions.net/api/getProducts?id=Bq7agxz8zsxvF8YDcq2k",
    {
      headers: {
        Authorization: "Bearer B7569BD14D1C9632DC3711151F6C8",
      },
    }
  );
  return data;
};

const updateProduct = async (product) => {
  console.log(product);
  const {
    data,
  } = await axios.post(
  const { data } = await axios.post(
    "https://us-central1-miventecita-6be84.cloudfunctions.net/api/updateProduct",
    product,
    { headers: { Authorization: "Bearer B7569BD14D1C9632DC3711151F6C8" } }
  );
  return data;
};

export {
  createProduct,
  getProducts as default,
  updateProduct as updateProductService,
};
