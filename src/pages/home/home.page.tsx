import { Container } from "@mui/material";
import { Content } from "./home.style";
import Logo from "../../components/logo/logo.component";
import { Outlet } from "react-router-dom";

const Home = () => {

    return (
        <Container maxWidth="xl">
            <Content direction="column">
                <Logo />
                <Outlet />
            </Content>
        </Container>
        
    )
}
export default Home;