import React from "react";
import { Box, Grid, Image, Link, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/mercadoshops.png";
import data from "../data";

const OtherProducts = () => {
    return (
        <Box borderRadius="8px" my={6}>
            <Box
                bgColor="#E82E8A"
                color="white"
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={4}
                pb={10}
                borderTopEndRadius="8px"
                borderTopStartRadius="8px"
                position="relative"
            >
                <Image
                    src={logo}
                    alt="mercado shops"
                    height="50px"
                    width="150px"
                    objectFit="contain"
                />
                <Text fontWeight={600} fontSize="16px">
                    Comprá en tiendas fuera de Mercado Libre
                </Text>
            </Box>
            <Box bgColor="#F5F5F5" pb={4}>
                <Grid
                    templateColumns="1fr 1fr"
                    mx={3}
                    gap={2}
                    zIndex={10}
                    position="relative"
                    mt="-22px"
                >
                    {data.otherProducts.map((item, i) => (
                        <Stack
                            key={i}
                            borderRadius="8px"
                            alignItems="center"
                            bgColor="white"
                            cursor="pointer"
                        >
                            <Box
                                bgColor="#EDEDED"
                                textAlign="center"
                                fontSize="10px"
                                fontWeight="700"
                                p={3}
                                textTransform="uppercase"
                                width="100%"
                                borderTopEndRadius="8px"
                                borderTopStartRadius="8px"
                            >
                                {item.name}
                            </Box>
                            <Image
                                src={item.img}
                                height="103px"
                                width="99px"
                                objectFit="cover"
                            />
                            <Box p={3}>
                                <Text fontSize="12px" fontWeight={200}>
                                    {item.desc}
                                </Text>
                                <Text fontSize="14px" fontWeight={600} my={1}>
                                    ${" "}
                                    {item.price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                </Text>
                                <Text
                                    fontSize="10px"
                                    color="#2DB66F"
                                    fontWeight={600}
                                    mb={4}
                                >
                                    Envío gratis
                                </Text>
                            </Box>
                        </Stack>
                    ))}
                </Grid>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    pt={4}
                    gap={3}
                >
                    <Link
                        fontSize="12px"
                        position="relative"
                        _after={{
                            backgroundColor: "rgba(0, 0, 0, .2)",
                            content: '""',
                            height: "12px",
                            position: "absolute",
                            right: "-10px",
                            top: "2px",
                            width: "1px",
                        }}
                    >
                        Anunciá aquí
                    </Link>
                    <Link fontSize="12px">Crea tu Mercado Shop</Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default OtherProducts;
