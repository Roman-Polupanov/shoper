import Header from '../components/header/Header';
import { Cart_container } from './Cart.styles';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

  return (
    <Cart_container>
      <Header />


    </Cart_container>
  );
};

export default Cart;
