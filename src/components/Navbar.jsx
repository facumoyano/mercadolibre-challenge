import React from "react";
import {
    Box,
    Container,
    Stack,
    Image,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Grid,
    List,
    ListItem,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { GoLocation } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown, BiUserCircle } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    return (
        <Box bgColor="primary.500" shadow="base">
            <Container maxW="1200px" pb={2}>
                <Grid templateColumns="0.7fr 2.4fr 1fr">
                    <Box>
                        <Image
                            src={logo}
                            alt="logo"
                            width={120}
                            height={120}
                            objectFit="contain"
                            marginTop="-30px"
                        />
                        <Stack direction="row" alignItems="center" mt="-30px">
                            <GoLocation style={{ fontSize: "25px" }} />
                            <Box>
                                <Text
                                    fontSize="xs"
                                    color="blackAlpha.900"
                                    fontWeight="200"
                                >
                                    Enviar a Facundo
                                </Text>
                                <Text
                                    color="blackAlpha.800"
                                    fontWeight="400"
                                    fontSize="sm"
                                    mt="-3px"
                                >
                                    Marambio 398
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box
                        pt="10px"
                        display="flex"
                        flexDirection="column"
                        mr={4}
                        justifyContent="space-between"
                    >
                        <InputGroup width="100%">
                            <Input
                                placeholder="Buscar productos marcas y más..."
                                _placeholder={{ color: "gray.300" }}
                                bgColor="white"
                            />
                            <InputRightElement
                                children={
                                    <AiOutlineSearch
                                        style={{
                                            color: "#718096",
                                            fontSize: "22px",
                                        }}
                                    />
                                }
                            />
                        </InputGroup>
                        <List
                            display="flex"
                            gap={6}
                            mt={4}
                            color="blackAlpha.600"
                            fontSize="sm"
                        >
                            <ListItem display="flex" alignItems="center">
                                Categorías <BiChevronDown />
                            </ListItem>
                            <ListItem>Ofertas</ListItem>
                            <ListItem>Historial</ListItem>
                            <ListItem>Moda</ListItem>
                            <ListItem>Vender</ListItem>
                            <ListItem>Ayuda</ListItem>
                        </List>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        ml={4}
                        justifyContent="space-between"
                    >
                        <Box display="flex" flexDirection="row" pt="10px">
                            <Image
                                src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp"
                                alt="img"
                                maxW="340px"
                                maxH="39px"
                            />
                        </Box>
                        <List
                            display="flex"
                            gap={3}
                            alignItems="center"
                            color="blackAlpha.800"
                            fontWeight="300"
                            fontSize="sm"
                        >
                            <ListItem display="flex" alignItems="center">
                                <BiUserCircle style={{ fontSize: "24px" }} />{" "}
                                Facundo <BiChevronDown />
                            </ListItem>
                            <ListItem>Mis compras</ListItem>
                            <ListItem display="flex" alignItems="center">
                                Favoritos <BiChevronDown />
                            </ListItem>
                            <ListItem>
                                <IoIosNotificationsOutline
                                    style={{ fontSize: "22px" }}
                                />
                            </ListItem>
                            <ListItem>
                                <BsCart2 style={{ fontSize: "20px" }} />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

export default Navbar;
