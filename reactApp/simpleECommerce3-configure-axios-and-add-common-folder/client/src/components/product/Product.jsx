import { ProductCard } from "./ProductCard";
import { useProduct } from "../../api/queries";

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
