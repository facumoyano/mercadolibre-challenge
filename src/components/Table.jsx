import React from "react";
import { Box, Grid } from "@chakra-ui/react";

const Table = () => {
    return (
        <Box my={8}>
            <Grid templateColumns="1fr 3fr" fontSize="16px">
                <Box bgColor="#EBEBEB" p={4} fontWeight={600}>
                    Marca
                </Box>
                <Box bgColor="#F5F5F5" p={4}>
                    Stich
                </Box>
                <Box bgColor="#F5F5F5" p={5} fontWeight={600}>
                    Modelo
                </Box>
                <Box bgColor="#FFFFFF" p={4}>
                    Stich
                </Box>
                <Box bgColor="#EBEBEB" p={4} fontWeight={600}>
                    Color
                </Box>
                <Box bgColor="#F5F5F5" p={4}>
                    Azul
                </Box>
                <Box bgColor="#F5F5F5" p={4} fontWeight={600}>
                    Animal
                </Box>
                <Box bgColor="#FFFFFF" p={4}>
                    Stich
                </Box>
                <Box bgColor="#EBEBEB" p={4} fontWeight={600}>
                    Personaje
                </Box>
                <Box bgColor="#F5F5F5" p={4}>
                    Stich
                </Box>
            </Grid>
        </Box>
    );
};

export default Table;
