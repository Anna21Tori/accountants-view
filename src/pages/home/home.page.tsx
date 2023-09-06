import { Container } from "@mui/material";
import Cards from "../../components/cards/cards.component";
import { Content } from "./home.style";
import Logo from "../../components/logo/logo.component";
import CustomButton from "../../components/button/custom-button.component";

const Home = () => {
    return (
        <Container maxWidth="xl">
            <Content direction="column">
                <Logo />
                <Cards />
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                    <CustomButton >Contained</CustomButton>
                </div>
            </Content>
        </Container>
        
    )
}
export default Home;