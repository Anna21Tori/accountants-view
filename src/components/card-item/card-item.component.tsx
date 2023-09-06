import { Avatar, CardContent } from "@mui/material";
import { CardItemContainer, CardItemHeader } from "./card-item.styles";
import CardItemDetails, { DetailsType } from "../card-item-details/card-item-details.component";
import { Currency } from "../currency/currency.style";
import CustomButton, { ButtonVariants } from "../button/custom-button.component";

const currency = "PLN";

const CardItem = () => {
    return (
        <CardItemContainer sx={{ width: 300 }}>
        <CardItemHeader
          avatar={
            <Avatar aria-label="recipe" variant="rounded" sx={{ width: 64, height: 64 }}>
              R
            </Avatar>
          }
          title="Dominika Zuber"
          subheader="Twoja ksiegowa"
        />
        <CardContent>
          <CardItemDetails title="E-mail" value="xxx.aaa@gmail.com" type={DetailsType.EMAIL}/>
          <CardItemDetails title="Telefon" value="+48 510 210 698" type={DetailsType.DEFAULT}/>
          <CardItemDetails title="Srednia cena netto uslugi / m-c" value="350,00" type={DetailsType.DEFAULT}>
            <Currency>
                {currency}
            </Currency>
          </CardItemDetails>
          <div style={{display:"flex", justifyContent:"start"}} >
                <CustomButton type={ButtonVariants.SECONDARY}>Dowiedz sie wiecej</CustomButton>
         </div>
        </CardContent>
      
      </CardItemContainer>
    );
}
export default CardItem;