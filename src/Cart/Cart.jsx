import Header from '../components/header/Header';
import { Cart_container } from './Cart.styles';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  // const goods = useSelector(state => state.goods)
  return (
    <Cart_container>
      <Header />
      {/* <div>{goods}</div> */}

    </Cart_container>
  );
};

export default Cart;
