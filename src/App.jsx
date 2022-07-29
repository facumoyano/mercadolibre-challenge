import { Box, Container } from "@chakra-ui/react";
import ContenedorProduct from "./components/contenedor/ContenedorProduct";
import Navbar from "./components/Navbar";
import PreCard from "./components/PreCard";

function App() {
    return (
        <Box bgColor="#EDEDED">
            <Navbar />
            <Container maxW="1200px">
                <PreCard />
                <ContenedorProduct />
            </Container>
        </Box>
    );
}

export default App;
