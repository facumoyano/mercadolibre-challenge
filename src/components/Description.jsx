import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Description = () => {
    return (
        <Box m={8}>
            <Heading fontWeight={400} fontSize="24px">
                Descripción
            </Heading>
            <Stack fontSize="20px" color="blackAlpha.700" gap={2} my={8}>
                <Text>
                    STITCH DE PELUCHE - TAMAÑO MEDIANO - SOLO COLOR AZUL
                </Text>
                <Text>* Peluche super suave.</Text>
                <Text>
                    * Mide 20 cm. de alto total sentado contando orejitas.
                </Text>
                <Text>* Realizado en plush.</Text>
                <Text>* Su consulta no molesta.</Text>
            </Stack>
        </Box>
    );
};

export default Description;
