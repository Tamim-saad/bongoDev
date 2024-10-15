import { ProductServices } from "..";

export function useProduct() {
  const products = ProductServices.getProducts();
  return { products };
}
