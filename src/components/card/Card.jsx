import { Card_uno, Good_name, Button_price, Price, Good_image, Good_price } from './Card.styles';

const Card = ({ id, name, image, price }) => {
    return (<Card_uno key={id}>
        <Good_name>{name}</Good_name>
        <Good_image src={image} />
        <Button_price>
            <Good_price>{price}$</Good_price>
            <Price>buy</Price>
            <Price>like it</Price>
        </Button_price>
    </Card_uno>
    )
}

export default Card;