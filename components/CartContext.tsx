import React, { createContext, useState } from "react";

// Créer le contexte du panier
export const CartContext = createContext({
  cart: [],
  addToCart: (productId: string) => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId: string) => {
    const newCart = [...cart, { productId }];
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
