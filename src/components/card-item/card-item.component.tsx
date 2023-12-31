import { Avatar, CardContent } from "@mui/material";
import { CardItemContainer, CardItemHeader } from "./card-item.styles";
import CardItemDetails, { DetailsType } from "../card-item-details/card-item-details.component";
import { Currency } from "../currency/currency.style";
import CustomButton, { ButtonVariants } from "../button/custom-button.component";
import { AccountantType } from "../../types/types";
import { memo } from "react";

const currency = "PLN";
const price = "350,00";

export interface ICardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: AccountantType
}

const CardItem = memo((props: ICardItemProps) => {
    const {item} = props;
    return (
        <CardItemContainer sx={{ width: 300 }}>
        <CardItemHeader
          avatar={
            <Avatar src={item.picture.medium} aria-label="recipe" variant="rounded" sx={{ width: 64, height: 64 }}>
              {item.name.first.charAt(0)}{item.name.last.charAt(0)}
            </Avatar>
          }
          title={`${item.name.first} ${item.name.last}`}
          subheader="Twoja księgowa"
        />
        <CardContent>
          <CardItemDetails title="E-mail" value={item.email} type={DetailsType.EMAIL}/>
          <CardItemDetails title="Telefon" value={item.cell} type={DetailsType.DEFAULT}/>
          <CardItemDetails title="Średnia cena netto usługi / m-c" value={price} type={DetailsType.DEFAULT}>
            <Currency>
                {currency}
            </Currency>
          </CardItemDetails>
          <div style={{display:"flex", justifyContent:"start"}} >
                <CustomButton type={ButtonVariants.SECONDARY}>Dowiedz się więcej</CustomButton>
         </div>
        </CardContent>
      
      </CardItemContainer>
    );
})
export default CardItem;