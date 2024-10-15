import { createContext } from "react";
import { useCart } from "../hooks";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addNewProduct, removeProductFromCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewProduct,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
