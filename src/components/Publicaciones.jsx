import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import Card from "./Card";

const Publicaciones = () => {
    return (
        <Box m={8}>
            <Heading fontWeight={400} fontSize="24px">
                Publicaciones del vendedor
            </Heading>

            <Card />
            <Card />
            <Card />
            <Card />
        </Box>
    );
};

export default Publicaciones;
