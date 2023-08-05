import React from "react";
import { styled } from "styled-components";

const Navigation = ({ CartItem, setCartModal }) => {
  const Cartlength = CartItem.length;

  const ModalHandler = () => {
    setCartModal(true);
  };

  return (
    <NaviWrap>
      <NaviTitle>리덕스장바구니</NaviTitle>
      <NaviCartWrap onClick={ModalHandler}>
        <p>장바구니</p>
        <span>{Cartlength}</span>
      </NaviCartWrap>
    </NaviWrap>
  );
};

export default Navigation;

const NaviWrap = styled.header`
  width: 100%;
  height: 100px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const NaviTitle = styled.h2`
  font-size: 30px;
  color: #fff;
`;
const NaviCartWrap = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border: 1px solid #fff;
  padding: 15px 20px;
  cursor: pointer;
  p {
    color: white;
  }
  span {
    color: yellow;
  }
`;
