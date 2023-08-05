import React from "react";
import { styled } from "styled-components";
import CartElement from "./CartElement";

const Cart = ({ CartItem, setCartModal }) => {
  const ModalHandler = () => {
    setCartModal(false);
  };
  return (
    <ModalWrap onClick={ModalHandler}>
      <ModalCart
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {CartItem.map((item) => (
          <CartElement key={item.name} item={item} />
        ))}
      </ModalCart>
    </ModalWrap>
  );
};

export default Cart;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCart = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  background-color: #fff;
`;
