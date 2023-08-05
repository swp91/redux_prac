import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { decrement, increment } from "../features/counter/cartSlice";

const CartElement = ({ item }) => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment(item));
  };
  const decrementHandler = () => {
    dispatch(decrement(item));
  };

  return (
    <CartItembox>
      <ItemInfobox>
        <p>{item.name}</p>
        <p>
          {item.price * item.quantity}원(개당{item.price})
        </p>
      </ItemInfobox>
      <QuantityInfo>
        <p>{item.quantity}개</p>
        <div>
          <button onClick={decrementHandler}>뺴기</button>
          <button onClick={incrementHandler}>추가</button>
        </div>
      </QuantityInfo>
    </CartItembox>
  );
};

export default CartElement;

const CartItembox = styled.div`
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 30px;
  padding: 20px;
`;

const ItemInfobox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const QuantityInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
