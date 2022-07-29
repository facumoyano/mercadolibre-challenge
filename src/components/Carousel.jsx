import React, { useState } from "react";
import { Box, Image, Stack } from "@chakra-ui/react";
import data from "../data";

const Carousel = () => {
    const { pictures } = data;
    const [index, setIndex] = useState(0);

    return (
        <>
            <Box display="flex" gap={4}>
                <Stack gap={2}>
                    {pictures.map((item, i) => (
                        <Box
                            key={item.id}
                            border={
                                i === index
                                    ? "2px solid #3483FA"
                                    : "1px solid RGBA(0, 0, 0, 0.16)"
                            }
                            p={1}
                            borderRadius="5px"
                        >
                            <Image
                                src={item.url}
                                width="44px"
                                height="44px"
                                objectFit="cover"
                                onMouseEnter={() => setIndex(i)}
                            />
                        </Box>
                    ))}
                </Stack>
                <Image
                    src={pictures[index].url}
                    width="90%"
                    height="600px"
                    objectFit="contain"
                />
            </Box>
            <Box border="1px solid RGBA(0, 0, 0, 0.08)" mx={14} my={4}></Box>
        </>
    );
};

export default Carousel;
