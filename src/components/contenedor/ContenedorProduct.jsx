import { Box, Grid } from "@chakra-ui/react";
import AskAndQuestions from "../AskAndQuestions";
import Caracteristicas from "../Caracteristicas";
import Carousel from "../Carousel";
import Description from "../Description";
import InfoPay from "../InfoPay";
import InforSeller from "../InforSeller";
import Opinions from "../Opinions";
import OtherProducts from "../OtherProducts";
import ProdProm from "../ProdProm";
import ProductDetail from "../ProductDetail";
import Publicaciones from "../Publicaciones";

const ContenedorProduct = () => {
    return (
        <Box shadow="md" bgColor="white" p={4}>
            <Grid templateColumns="3fr 1.4fr" gap={4}>
                <Box>
                    <Carousel />
                    <Publicaciones />
                    <Caracteristicas />
                    <Description />
                    <AskAndQuestions />
                    <Opinions />
                </Box>
                <Box>
                    <ProductDetail />
                    <InforSeller />
                    <InfoPay />
                    <ProdProm />
                    <OtherProducts />
                </Box>
            </Grid>
        </Box>
    );
};

export default ContenedorProduct;
