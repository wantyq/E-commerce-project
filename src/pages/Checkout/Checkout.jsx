import { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../Cart/CartItem";
import { useNavigate } from "react-router";
import { CART_PATH } from "../../routes/const";
import { toast } from "react-hot-toast";


const Checkout = () => {
  const { cartItems, handleUpdateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!cartItems.length) {
      navigate(CART_PATH);
    }
  }, [cartItems.length, navigate]);
  
  return (
    <div>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} 
          handleIncreaseQuantity={() => handleUpdateQuantity(product.id, "increase")}
          handleDecreaseQuantity={() => handleUpdateQuantity(product.id)}
          />
        ))}
      </CartContainer>
    </div>
    );
  };
  
  export default Checkout;
  
  const CartContainer = styled.div`
    background-color: #ffffff;
    margin-bottom: 24px;
  `;
