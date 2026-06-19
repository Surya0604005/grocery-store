import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Milk",
      category: "dairy",
      price: 60,
      quantity: 20,
    },

    {
      id: 2,
      name: "Bread",
      category: "bakery",
      price: 40,
      quantity: 15,
    },
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        products,

        setProducts,

        wishlist,

        setWishlist,

        cart,

        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
