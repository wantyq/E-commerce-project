import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  console.log(cartItems);

  const handleAddToCart = (cartItem) => {
    //{...item, quantity:1}
    const hasEqualId = (cItem) => cItem.id === cartItem.id;

    const alreadyInCartItem = cartItems.find(hasEqualId);

    if (alreadyInCartItem) {
      handleUpdateQuantity(cartItem.id, "increase");
    } else {
      const item = { ...cartItem, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const handleUpdateQuantity = (id, type) => {
    const increaseValue = type === "increase" ? 1 : -1;
    const updatedItem = (i) => (i.id === id ? { ...i, quantity: i.quantity + increaseValue } : i);
    setCartItems((prevItems) => prevItems.map(updatedItem).filter((i) => i.quantity));
  };

  return (
    <CartContext.Provider value={{ resetCart, cartItems, handleAddToCart, handleUpdateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
