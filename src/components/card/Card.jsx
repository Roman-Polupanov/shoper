import { Card_uno, Good_name, Button_price, Like_it, Good_image, Good_price, Buy_it } from './Card.styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoodToCart } from '../../store/action';
import { store } from '../../store/reducer'
import { useSelector } from 'react-redux';

const Card = ({ id, name, image, price, like }) => {
  const dispatch = useDispatch()

  const [isLiked, setIsLiked] = useState(like);

  const likeButtonHandler = () => {

    setIsLiked(!isLiked);
    // const onLiked = () => {
    //   dispatch(addGoodToCart({ like }))
    //   console.log(store.getState())
    // }
    // return onLiked()
  };

  const onBuy = () => {
    dispatch(addGoodToCart({ id, name, image, price }))
    console.log(store.getState())
  }

  return (
    <Card_uno>
      <Good_name>{name}</Good_name>
      <Good_image src={image} />
      <Button_price>
        <Good_price>{price}$</Good_price>
        <Buy_it onClick={onBuy}>buy</Buy_it>
        <Like_it onClick={() => likeButtonHandler(id)}>{isLiked ? 'liked' : 'like me'}</Like_it>
      </Button_price>
    </Card_uno>
  );
};

export default Card;
