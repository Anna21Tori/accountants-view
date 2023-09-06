import { useSelector } from "react-redux";
import { selectAccountants } from "../../store/accountants/accountants.selector";
import CardItem from "../card-item/card-item.component"
import { CardsContainer } from "./cards.style";

const Cards = () => {
    const accountants = useSelector(selectAccountants);

    return (
        <CardsContainer direction="row" flexWrap="wrap" justifyContent="center">
            {accountants.map((accountant, id) => <CardItem key={id} item={accountant} />)}
        </CardsContainer>
    )
}

export default Cards;