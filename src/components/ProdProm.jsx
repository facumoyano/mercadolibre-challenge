import React from "react";
import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";
import data from "../data";

const ProdProm = () => {
    return (
        <Box
            border="1px solid RGBA(0, 0, 0, 0.08)"
            borderRadius="8px"
            p={4}
            my={4}
        >
            <Stack direction="row" alignItems="center" my={6}>
                <Text fontSize="18px">Productos promocionados</Text>
                <Link fontSize="14px">Anuncia aquí</Link>
            </Stack>
            <Stack gap={4}>
                {data.promocionados.map((item) => (
                    <Stack key={item.id} direction="row" alignItems="center">
                        <Box
                            border="1px solid RGBA(0, 0, 0, 0.08)"
                            p={1}
                            height="82px"
                            width="102px"
                        >
                            <Image src={item.img} objectFit="cover" />
                        </Box>
                        <Box>
                            <Text fontSize="20px">
                                ${" "}
                                {item.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                            <Text
                                fontSize="14px"
                                color="#00A650"
                                fontWeight="700"
                            >
                                Envío gratis
                            </Text>
                            <Text fontSize="14px">{item.desc}</Text>
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};

export default ProdProm;
