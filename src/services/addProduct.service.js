import * as axios from "axios";

const createProduct = async ({
  name,
  category,
  imageUrl,
  price,
  provider,
  companyId,
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
    },
    { headers: { Authorization: "Bearer B7569BD14D1C9632DC3711151F6C8" } }
  );
  return data;
};

export default createProduct;
