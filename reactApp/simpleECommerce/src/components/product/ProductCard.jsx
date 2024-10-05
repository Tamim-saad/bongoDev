import { useContext } from "react";
import logo from "../../logo.svg";
import { CartContext } from "../../contexts";

export const ProductCard = ({ product }) => {
  const { addNewProduct } = useContext(CartContext);

  return (
    <div className="productCard grid grid-col-4 border border-black px-4 text-center flex flex-col">
      <img src={logo} alt="ProductImage" width="200px" />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <button
        onClick={() => addNewProduct(product)}
        className="border border-red-500 px-4"
      >
        Add to Cart
      </button>
    </div>
  );
};
