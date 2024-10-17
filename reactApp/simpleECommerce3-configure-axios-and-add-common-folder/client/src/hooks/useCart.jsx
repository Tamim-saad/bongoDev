import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const addNewProduct = (product) => {
    const getProductIndex = cart.findIndex((item) => item.id === product.id);
    if (getProductIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      cart[getProductIndex].quantity++;
      setCart([...cart]);
    }
  };

  const removeProductFromCart = (product) => {
    const getProductIndex = cart.findIndex((item) => item.id === product.id);
    if (getProductIndex !== -1) {
      if (cart[getProductIndex].quantity === 1) {
        cart.splice(getProductIndex, 1);
        setCart([...cart]);
      } else if (cart[getProductIndex].quantity > 1) {
        cart[getProductIndex].quantity--;
        setCart([...cart]);
      }
    } else {
      alert("Product doesn't exist in cart");
    }
  };

  return {
    cart,
    addNewProduct,
    removeProductFromCart,
  };
}
