import React, { useState } from "react";
import Navigation from "../components/Navigation";
import ItemList from "../components/ItemList";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { CartList, addToCart } from "../features/counter/cartSlice";

const CartPage = () => {
  const [cartModal, setCartModal] = useState(false);
  const CartItem = useSelector(CartList);

  return (
    <>
      <GlobalReset />
      <Wrap>
        <Navigation CartItem={CartItem} setCartModal={setCartModal} />
        <ItemList addToCart={addToCart} />
        {cartModal && <Cart setCartModal={setCartModal} CartItem={CartItem} />}
      </Wrap>
    </>
  );
};

export default CartPage;

const GlobalReset = createGlobalStyle`
  ${reset}
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;
