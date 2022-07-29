import React from "react";
import { Box, Text, Stack, Link } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

const PreCard = () => {
    return (
        <Box
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            py={4}
            alignItems="flex-end"
        >
            <Stack gap={3}>
                <Stack direction="row">
                    <Text fontWeight={700} fontSize="sm">
                        También puede interesarte:{" "}
                    </Text>
                    <Text fontSize="sm">squishmallows</Text>
                </Stack>
                <Stack direction="row" fontSize="sm" alignItems="center">
                    <Text
                        float="left"
                        margin="0 25px 0 0"
                        position="relative"
                        _after={{
                            backgroundColor: "rgba(0, 0, 0, .2)",
                            content: '""',
                            height: "12px",
                            position: "absolute",
                            right: "-14px",
                            top: "8px",
                            width: "1px",
                        }}
                    >
                        Volver al listado
                    </Text>
                    <Link>Juegos y juguetes</Link>
                    <Text>
                        <MdChevronRight
                            style={{
                                color: "RGBA(0, 0, 0, 0.36)",
                                fontSize: "16px",
                            }}
                        />
                    </Text>
                    <Link>Peluches</Link>
                </Stack>
            </Stack>
            <Stack direction="row" fontSize="sm">
                <Link
                    float="left"
                    margin="0 25px 0 0"
                    position="relative"
                    _after={{
                        backgroundColor: "rgba(0, 0, 0, .2)",
                        content: '""',
                        height: "12px",
                        position: "absolute",
                        right: "-14px",
                        top: "8px",
                        width: "1px",
                    }}
                >
                    Compartir
                </Link>
                <Link>Vender uno igual</Link>
            </Stack>
        </Box>
    );
};

export default PreCard;
