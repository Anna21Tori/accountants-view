import { Container } from "@mui/material";
import Cards from "../../components/cards/cards.component";
import { Content } from "./home.style";
import Logo from "../../components/logo/logo.component";
import FetchData from "../../components/fetch-data/fetch-data.component";

const Home = () => {

    return (
        <Container maxWidth="xl">
            <Content direction="column">
                <Logo />
                <Cards />
                <FetchData />
            </Content>
        </Container>
        
    )
}
export default Home;