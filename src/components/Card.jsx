import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";

const Card = () => {
    return (
        <Box>
            <Box shadow="base" _hover={{ shadow: "xl" }} width="224px">
                <Image
                    src="http://http2.mlstatic.com/D_754004-MLA32299823528_092019-O.jpg"
                    width="224px"
                    height="224px"
                    objectFit="cover"
                />
                <Box p={4}>
                    <Text fontSize="22px">$ 4.904</Text>
                    <Text color="#00A650" fontSize="14px" fontWeight="600">
                        Envío gratis
                    </Text>
                    <Text
                        fontSize="14px"
                        color="blackAlpha.600"
                        textTransform="capitalize"
                        mt={1}
                    >
                        Peluche Stich 30cm importado lilo y stich hermosos
                        suaves
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Card;
