import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";

const Item = ({ item, addToCart }) => {
  const dispatch = useDispatch();

  const addtoCartHandler = () => {
    dispatch(addToCart(item));
  };

  return (
    <Itembox>
      <ItemName>{item.name}</ItemName>
      <ItemPricebox>
        <p>{item.price}원</p>
        <button onClick={addtoCartHandler}>카트 추가</button>
      </ItemPricebox>
    </Itembox>
  );
};

export default Item;

const Itembox = styled.div`
  width: 500px;
  height: 100px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.div`
  margin-left: 30px;
`;

const ItemPricebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 30px;
  margin-right: 30px;
`;
