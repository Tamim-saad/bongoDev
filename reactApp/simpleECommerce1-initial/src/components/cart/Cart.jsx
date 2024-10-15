import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { CartContext } from "../../contexts";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => (
        <li key={item.id}>
          <CartItem product={item} />
        </li>
      ))}
    </div>
  );
};
