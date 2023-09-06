import { memo } from "react";
import { DetailsContainer } from "./card-item-details.style";

export enum DetailsType {
    "DEFAULT" = "DEFAULT",
    "EMAIL" = "EMAIL"
}
export interface ICardItemDetailsProps extends React.HTMLAttributes<HTMLDivElement>{
    title: string;
    value: string | number;
    type?: DetailsType,
    children?: React.ReactNode
}
const CardItemDetails = memo((props: ICardItemDetailsProps) => {
    const {title, value, type, children} = props;
    return (
        <DetailsContainer $type={type ? type : DetailsType.DEFAULT}>
            <p className="title">{title}</p>
            <p className="value">{value} {children}</p>
        </DetailsContainer>
    )
})
export default CardItemDetails;