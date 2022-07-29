import { Box, Grid } from "@chakra-ui/react";
import Carousel from "../Carousel";
import ProductDetail from "../ProductDetail";
import Publicaciones from "../Publicaciones";

const ContenedorProduct = () => {
    return (
        <Box shadow="md" bgColor="white" p={4}>
            <Grid templateColumns="3fr 1.4fr" gap={4}>
                <Box>
                    <Carousel />
                    <Publicaciones />
                </Box>
                <Box>
                    <ProductDetail />
                </Box>
            </Grid>
        </Box>
    );
};

export default ContenedorProduct;
