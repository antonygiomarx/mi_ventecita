import axios from "axios";
import { Config } from "../../src/config/config";
import { Product } from "../../src/models/product.model";

export class ProductService {
  constructor(private _product: Product) {}

  async create(): Promise<any> {
    const { data } = await axios.post(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/addProduct",
      this._product,
      { headers: { Authorization: `Bearer ${Config.token}` } },
    );
    return data;
  }

  static async getAll() {
    const { data } = await axios.get(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/getProducts?id=Bq7agxz8zsxvF8YDcq2k",
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      },
    );
    return data;
  }

  async update() {
    const { data } = await axios.post(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/updateProduct",
      this._product,
      { headers: { Authorization: `Bearer ${Config.token}` } },
    );
    return data;
  }
}
