import { useProduct } from "../../hooks";
import { ProductCard } from "./ProductCard";

export function Product() {
  const { products } = useProduct();
  return (
    <div className="grid grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
