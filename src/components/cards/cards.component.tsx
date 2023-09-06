import CardItem from "../card-item/card-item.component"
import { CardsContainer } from "./cards.style";

const Cards = () => {
    return (
        <CardsContainer direction="row" flexWrap="wrap" justifyContent="center">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </CardsContainer>
    )
}

export default Cards;