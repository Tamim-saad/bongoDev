import React, { useContext } from "react";
import { CartContext } from "../../contexts";

export const CartItem = ({ product }) => {
  const { removeProductFromCart } = useContext(CartContext);

  // Check if product exists before rendering its properties
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {product.name} x {product.price} x {product.quantity}
      <button
        onClick={() => removeProductFromCart(product)}
        className="bg-gray-200 hover-bg-gray-300 px-2"
      >
        Remove
      </button>
    </>
  );
};
