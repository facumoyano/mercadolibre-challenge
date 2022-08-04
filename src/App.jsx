import { Box, Container } from "@chakra-ui/react";
import ContenedorProduct from "./components/contenedor/ContenedorProduct";
import Navbar from "./components/Navbar";
import PreCard from "./components/PreCard";

function App() {
    return (
        <Box bgColor="#EDEDED">
            <Navbar />
            <Container maxW="1200px" pb={10}>
                <PreCard />
                <ContenedorProduct />
            </Container>
            <Box as="footer" bgColor="primary.500" p={10} textAlign="center">
                Desarrollado por Facundo Moyano como prueba
            </Box>
        </Box>
    );
}

export default App;
