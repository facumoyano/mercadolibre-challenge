import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";

const Card = ({ item }) => {
    return (
        <Box mx={2}>
            <Box
                border="1px solid #E5E5E5"
                borderRadius="10px"
                _hover={{ shadow: "xl" }}
                shadow="md"
                height="360px"
            >
                <Image
                    src={item.img}
                    width="224px"
                    height="224px"
                    objectFit="contain"
                />
                <Box borderTop="1px solid #E5E5E5">
                    <Box p={2}>
                        <Text fontSize="22px">
                            ${" "}
                            {item.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                        <Text color="#00A650" fontSize="14px" fontWeight="600">
                            Envío gratis
                        </Text>
                        <Text
                            fontSize="14px"
                            color="blackAlpha.600"
                            textTransform="capitalize"
                            mt={1}
                        >
                            {item.desc}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Card;
