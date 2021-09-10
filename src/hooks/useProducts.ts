import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { GetProductsResponse } from "../services/product.service";
import { Config } from "../config/config";
import { Product } from "../models/product.model";

export const useProducts = (): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const ac = new AbortController();
    try {
      (async () => {
        const { data } = (await axios.get(
          "https://us-central1-miventecita-6be84.cloudfunctions.net/api/getProducts?id=Bq7agxz8zsxvF8YDcq2k",
          {
            headers: {
              Authorization: `Bearer ${Config.token}`,
            },
          },
        )) as AxiosResponse<GetProductsResponse>;
        setProducts(data.products);
      })();
    } catch (error) {
      console.error("Error obteniendo productos", error);
    }
    return () => {
      ac.abort();
    };
  }, []);
  return products;
};
