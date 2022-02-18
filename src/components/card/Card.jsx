import { Card_uno, Good_name, Button_price, Price, Good_image, Good_price } from './Card.styles';
import data from '../../mock/data';
import React, { useState } from 'react';

const Card = ({ id, name, image, price, like }) => {
    const [list, setLike] = useState(data);

    const handleClick = () => {
        const draftList = [...list];
        setLike(draftList)
    }

    return (<Card_uno key={id}>
        <Good_name>{name}</Good_name>
        <Good_image src={image} />
        <Button_price>
            <Good_price>{price}$</Good_price>
            <Price>buy</Price>

            <Price onClick={() => handleClick(id)}>
                {like ? "like me" : "unlike me"}
            </Price>

        </Button_price>
    </Card_uno>
    )
}

export default Card;