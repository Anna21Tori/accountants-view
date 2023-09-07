import { useSelector } from "react-redux";
import { selectAccountants, selectInfoResults, selectIsLoading } from "../../store/accountants/accountants.selector";
import CardItem from "../card-item/card-item.component"
import { CardsContainer } from "./cards.style";
import CardSkeleton from "../card-item/card-skeleton/card-skeleton.components";
import { useCallback } from "react";

const Cards = () => {
    const accountants = useSelector(selectAccountants);
    const isLoading = useSelector(selectIsLoading);
    const infoResults = useSelector(selectInfoResults);
    
    const skeletonItems = useCallback(() => {
        const items: JSX.Element[] = [];
        for(let i = 0; i < infoResults; i ++){
            items.push(<CardSkeleton key={i}/>)
        }
        return items;
    }, [infoResults]);

    return (
        <CardsContainer direction="row" flexWrap="wrap" justifyContent="center">
            {accountants.map((accountant, id) => <CardItem key={id} item={accountant} />)}
            {isLoading && skeletonItems()}
        </CardsContainer>
    )
}

export default Cards;