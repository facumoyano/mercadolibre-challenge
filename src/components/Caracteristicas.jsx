import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Table from "./Table";

const Caracteristicas = () => {
    return (
        <>
            <Box m={8}>
                <Heading fontWeight={400} fontSize="24px">
                    Características principales
                </Heading>
                <Table />
                <Heading fontWeight={400} fontSize="24px">
                    Otras características
                </Heading>
                <Grid templateColumns="1fr 1fr" my={6} fontSize="sm">
                    <Stack>
                        <Text fontWeight={600}>
                            Material:{" "}
                            <Text as="span" fontWeight={400}>
                                Plush
                            </Text>
                        </Text>
                        <Text fontWeight={700}>
                            Es material hipoalergénico:{" "}
                            <Text as="span" fontWeight={400}>
                                Sí
                            </Text>
                        </Text>
                    </Stack>
                    <Stack>
                        <Text fontWeight={600}>
                            Altura x Ancho:{" "}
                            <Text as="span" fontWeight={400}>
                                20 cm x 15 cm
                            </Text>
                        </Text>
                        <Text fontWeight={700}>
                            Edad mínima recomendada:{" "}
                            <Text as="span" fontWeight={400}>
                                3 años
                            </Text>
                        </Text>
                    </Stack>
                </Grid>
            </Box>
            <Box border="1px solid RGBA(0, 0, 0, 0.08)" mx={8} my={10}></Box>
        </>
    );
};

export default Caracteristicas;
