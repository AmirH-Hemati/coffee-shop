import { createContext, useContext, useState } from "react";
const shopingCartContext = createContext();
function ShopingCartProvider({ children }) {
  const [addCart, setAddCart] = useState([]);
  function handelIncreaseAddCart(id) {
    setAddCart((addCart) => {
      const product = addCart?.find((item) => item.id == id);
      if (!product) {
        return [...addCart, { id, qty: 1 }];
      } else {
        return addCart.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  }
  function handelDecreaseAddCart(id) {
    setAddCart((addCart) => {
      if (addCart.find((item) => item.id == id).qty > 1) {
        return addCart.map((item) =>
          item.id == id ? { ...item, qty: item.qty - 1 } : item
        );
      } else {
        return addCart.filter((item) => item.id !== id);
      }
    });
  }
  function getQty(id) {
    return addCart.find((item) => item.id === id)?.qty || 0;
  }
  function getTotalQty() {
    return addCart.reduce((sum, item) => sum + item.qty, 0);
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
