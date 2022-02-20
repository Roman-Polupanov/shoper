import {
  Card_uno,
  Good_name,
  Button_price,
  Price,
  Good_image,
  Good_price,
} from "./Card.styles";
import React, { useState } from "react";

const Card = ({ id, name, image, price, like }) => {
  const [isLiked, setIsLiked] = useState(like);

  const likeButtonHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card_uno>
      <Good_name>{name}</Good_name>
      <Good_image src={image} />
      <Button_price>
        <Good_price>{price}$</Good_price>
        <Price>buy</Price>
        <Price onClick={() => likeButtonHandler(id)}>
          {isLiked ? "liked" : "like me"}
        </Price>
      </Button_price>
    </Card_uno>
  );
};

export default Card;
