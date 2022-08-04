import React from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Text,
    Stack,
    Link,
} from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import ReactStars from "react-stars";

const TabOpinions = () => {
    return (
        <Box width="100%">
            <Tabs width="100%" colorScheme="#3483fa" opacity="1">
                <TabList display="grid" gridTemplateColumns="1fr 1fr 1fr">
                    <Tab fontSize="16px" fontWeight="700">
                        Todas
                    </Tab>
                    <Tab fontSize="16px" fontWeight="700">
                        Positivas
                    </Tab>
                    <Tab fontSize="16px" fontWeight="700">
                        Negativas
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel
                        fontSize="16px"
                        display="flex"
                        flexDir="column"
                        gap={6}
                    >
                        <Box>
                            <ReactStars
                                count={5}
                                size={24}
                                color1="RGBA(0, 0, 0, 0.16)"
                                color2="#3483FA"
                                value={5}
                            />
                            <Text fontWeight={600}>Hermoso excelente</Text>
                            <Text>
                                Hermoso es para el cumple de mi hija excelente.{" "}
                                <Text
                                    as="span"
                                    color="blackAlpha.500"
                                    fontWeight={300}
                                >
                                    Hace 6 meses
                                </Text>
                            </Text>
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={5}
                                my={2}
                            >
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineLike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineDislike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <ReactStars
                                count={5}
                                size={24}
                                color1="RGBA(0, 0, 0, 0.16)"
                                color2="#3483FA"
                                value={5}
                            />
                            <Text fontWeight={600}>Hermoso excelente</Text>
                            <Text>
                                Hermoso es para el cumple de mi hija excelente.{" "}
                                <Text
                                    as="span"
                                    color="blackAlpha.500"
                                    fontWeight={300}
                                >
                                    Hace 6 meses
                                </Text>
                            </Text>

                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={5}
                                my={2}
                            >
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineLike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineDislike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <ReactStars
                                count={5}
                                size={24}
                                color1="RGBA(0, 0, 0, 0.16)"
                                color2="#3483FA"
                                value={5}
                            />
                            <Text fontWeight={600}>Hermoso excelente</Text>
                            <Text>
                                Hermoso es para el cumple de mi hija excelente.{" "}
                                <Text
                                    as="span"
                                    color="blackAlpha.500"
                                    fontWeight={300}
                                >
                                    Hace 6 meses
                                </Text>
                            </Text>
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={5}
                                my={2}
                            >
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineLike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineDislike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Link fontSize="sm">Ver todas las opiniones</Link>
                        </Box>
                    </TabPanel>
                    <TabPanel
                        fontSize="16px"
                        display="flex"
                        flexDir="column"
                        gap={6}
                    >
                        <Box>
                            <ReactStars
                                count={5}
                                size={24}
                                color1="RGBA(0, 0, 0, 0.16)"
                                color2="#3483FA"
                                value={5}
                            />
                            <Text fontWeight={600}>Hermoso excelente</Text>
                            <Text>
                                Hermoso es para el cumple de mi hija excelente.{" "}
                                <Text
                                    as="span"
                                    color="blackAlpha.500"
                                    fontWeight={300}
                                >
                                    Hace 6 meses
                                </Text>
                            </Text>
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={5}
                                my={2}
                            >
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineLike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineDislike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <ReactStars
                                count={5}
                                size={24}
                                color1="RGBA(0, 0, 0, 0.16)"
                                color2="#3483FA"
                                value={5}
                            />
                            <Text fontWeight={600}>Hermoso excelente</Text>
                            <Text>
                                Hermoso es para el cumple de mi hija excelente.{" "}
                                <Text
                                    as="span"
                                    color="blackAlpha.500"
                                    fontWeight={300}
                                >
                                    Hace 6 meses
                                </Text>
                            </Text>

                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={5}
                                my={2}
                            >
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineLike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineDislike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <ReactStars
                                count={5}
                                size={24}
                                color1="RGBA(0, 0, 0, 0.16)"
                                color2="#3483FA"
                                value={5}
                            />
                            <Text fontWeight={600}>Hermoso excelente</Text>
                            <Text>
                                Hermoso es para el cumple de mi hija excelente.{" "}
                                <Text
                                    as="span"
                                    color="blackAlpha.500"
                                    fontWeight={300}
                                >
                                    Hace 6 meses
                                </Text>
                            </Text>
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={5}
                                my={2}
                            >
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineLike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <AiOutlineDislike
                                        style={{ fontSize: "18px" }}
                                    />
                                    <Text>0</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Link fontSize="sm">Ver todas las opiniones</Link>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            mt={14}
                        >
                            <Text>¡Nada por acá!</Text>
                            <Text fontSize="15px" fontWeight={300}>
                                Este producto no tiene
                                <br />
                                opiniones negativas.
                            </Text>
                        </Stack>
                        <Box>
                            <Link fontSize="sm">Ver todas las opiniones</Link>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default TabOpinions;
