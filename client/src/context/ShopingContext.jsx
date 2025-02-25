import { createContext, useContext } from "react";
import { useLocalStorage } from "../utilis/useLocalStorage";
const shopingCartContext = createContext();
function ShopingCartProvider({ children }) {
  const [addCart, setAddCart] = useLocalStorage("shopCart", []);
  function handelIncreaseAddCart(id) {
    setAddCart((products) => {
      if (products.find((item) => item.id == id)) {
        return products.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        );
      } else {
        return [...products, { id, qty: 1 }];
      }
    });
  }

  function handelDecreaseAddCart(id) {
    setAddCart((addCart) => {
      if (addCart?.find((item) => item.id == id)?.qty == 1) {
        return addCart.filter((item) => item.id !== id);
      } else {
        return addCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  }
  function getQty(id) {
    return addCart.find((item) => item.id === id)?.qty || 0;
  }

  function getTotalQty() {
    return addCart.reduce((sum, item) => sum + item.qty, 0);
  }
  function removeProduct(id) {
    return setAddCart((addCart) => addCart.filter((item) => item.id !== id));
  }
  console.log(addCart);
  return (
    <shopingCartContext.Provider
      value={{
        addCart,
        handelIncreaseAddCart,
        handelDecreaseAddCart,
        getQty,
        getTotalQty,
        removeProduct,
      }}
    >
      {children}
    </shopingCartContext.Provider>
  );
}
function useAddCart() {
  const context = useContext(shopingCartContext);
  return context;
}
export { ShopingCartProvider, useAddCart };
