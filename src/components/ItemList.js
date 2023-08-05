import React from "react";
import Item from "./Item";
import { styled } from "styled-components";

const ItemList = ({ addToCart }) => {
  const items = [
    { name: "테스트1번", price: 1000 },
    { name: "테스트2번", price: 3000 },
    { name: "테스트3번", price: 5000 },
  ];

  return (
    <ItemListWrap>
      {items.map((item) => (
        <Item key={item.name} item={item} addToCart={addToCart} />
      ))}
    </ItemListWrap>
  );
};

export default ItemList;

const ItemListWrap = styled.section`
  width: 700px;
  height: auto;
  padding: 20px;
  margin: 100px auto;
`;
