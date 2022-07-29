import React, { useState } from "react";
import {
    Box,
    Stack,
    Text,
    Heading,
    Link,
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Image,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import ReactStars from "react-stars";
import security from "../assets/security.png";
import { TbTrophy } from "react-icons/tb";
import data from "../data";

const ProductDetail = () => {
    const [unidades, setUnidades] = useState("1 unidad");
    return (
        <Box border="1px solid RGBA(0, 0, 0, 0.16)" borderRadius="8px" p={4}>
            <Stack>
                <Stack
                    direction="row"
                    fontSize="sm"
                    color="blackAlpha.500"
                    fontWeight={400}
                >
                    <Text
                        float="left"
                        margin="0 25px 0 0"
                        position="relative"
                        _after={{
                            backgroundColor: "rgba(0, 0, 0, .2)",
                            content: '""',
                            height: "14px",
                            position: "absolute",
                            right: "-14px",
                            top: "6px",
                            width: "1px",
                        }}
                    >
                        Nuevo
                    </Text>
                    <Text>{data.sold_quantity} vendidos</Text>
                </Stack>
                <Stack direction="row">
                    <Heading fontSize="22px">{data.title}</Heading>
                    <AiOutlineHeart
                        style={{
                            fontSize: "46px",
                            color: "#3483FA",
                            cursor: "pointer",
                            paddingBottom: "20px",
                        }}
                    />
                </Stack>
                <Stack direction="row" alignItems="center">
                    <ReactStars
                        count={5}
                        size={24}
                        color1="RGBA(0, 0, 0, 0.16)"
                        color2="#3483FA"
                        value={4.5}
                    />
                    <Link fontSize="sm">(42)</Link>
                </Stack>
                <Stack direction="row" alignItems="center">
                    <Text
                        backgroundColor="#FF7733"
                        color="white"
                        fontWeight="600"
                        textTransform="uppercase"
                        fontSize="xs"
                        borderRadius="3px"
                        px="2px"
                    >
                        Más vendido
                    </Text>
                    <Link fontSize="xs">9° en Peluches</Link>
                </Stack>
                <Box mt={2}>
                    <Text fontSize="36px" fontWeight="300">
                        ${" "}
                        {data.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    </Text>
                    <Text fontSize="18px" mt="-10px">
                        en 6x $ 2.534
                    </Text>
                    <Link fontSize="sm">Ver los medios de pago</Link>
                </Box>
                <Box>
                    <Stack direction="row" alignItems="flex-start" mt={4}>
                        <MdOutlineLocalShipping style={{ fontSize: "23px" }} />
                        <Box>
                            <Text fontWeight={300}>
                                Llega{" "}
                                <Text as="span" fontWeight={700}>
                                    entre martes y miércoles
                                </Text>{" "}
                                por <br /> $756
                            </Text>
                            <Text color="blackAlpha.600" fontSize="sm">
                                Beneficio Mercado Puntos
                            </Text>
                            <Link fontSize="sm">Ver más formas de entrega</Link>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Stack direction="row" mt={4}>
                        <TbArrowBack
                            style={{ color: "#00A650", fontSize: "23px" }}
                        />
                        <Box>
                            <Text color="#00A650" fontWeight={400}>
                                Devolución gratis
                            </Text>
                            <Text color="blackAlpha.600" fontSize="sm">
                                Tenés 30 días desde que lo recibís.
                            </Text>
                            <Link fontSize="sm">Conocer más</Link>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Stack mt={8}>
                        <Text fontWeight={700}>Stock disponible</Text>
                        <Stack direction="row" alignItems="center">
                            <Text>Cantidad:</Text>
                            <Menu>
                                <MenuButton
                                    marginRight="-10px"
                                    as={Button}
                                    rightIcon={
                                        <BiChevronDown
                                            style={{
                                                color: "#3483FA",
                                                fontSize: "24px",
                                                marginLeft: "-8px",
                                            }}
                                        />
                                    }
                                >
                                    {unidades}
                                </MenuButton>
                                <MenuList backgroundColor="white">
                                    {[
                                        "1 unidad",
                                        "2 unidades",
                                        "3 unidades",
                                        "4 unidades",
                                        "5 unidades",
                                    ].map((item, i) => (
                                        <MenuItem
                                            key={i}
                                            backgroundColor="white"
                                            color={
                                                item === unidades
                                                    ? "#3483FA"
                                                    : "blackAlpha.800"
                                            }
                                            fontWeight={
                                                item === unidades
                                                    ? "600"
                                                    : "400"
                                            }
                                            borderLeft={
                                                item === unidades
                                                    ? "2px solid #3483FA"
                                                    : "40"
                                            }
                                            _hover={{
                                                backgroundColor:
                                                    "blackAlpha.100",
                                            }}
                                            onClick={() => setUnidades(item)}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Text fontSize="sm" color="blackAlpha.600">
                                (5 disponibles)
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <Stack pt={8}>
                    <Button
                        bgColor="#3483FA"
                        _hover={{ backgroundColor: "#2968C8" }}
                        height="50px"
                        color="white"
                    >
                        Comprar ahora
                    </Button>
                    <Button
                        bgColor="rgba(65,137,230,.15)"
                        _hover={{ backgroundColor: "#D9E7FA" }}
                        height="50px"
                        color="#3483FA"
                    >
                        Agregar al carrito
                    </Button>
                </Stack>
                <Box>
                    <Box shadow="lg" my={6}>
                        <Stack direction="row" alignItems="center" p={2}>
                            <Box
                                border="2px solid #00A650"
                                borderRadius="50%"
                                p={1}
                            >
                                <MdOutlineLocalShipping
                                    style={{
                                        fontSize: "24px",
                                        color: "#00A650",
                                    }}
                                />
                            </Box>
                            <Text fontSize="sm" fontWeight="700">
                                Armá un carrito de productos del mismo vendedor
                                y ahorrá en el envío.
                            </Text>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Box shadow="lg">
                        <Stack direction="row" alignItems="center" p={2}>
                            <Image
                                src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/credits.svg"
                                alt="mercado pago"
                            />

                            <Box>
                                <Text fontSize="sm" fontWeight="700">
                                    Comprá en 12 cuotas de $ 493
                                </Text>
                                <Text fontSize="sm">
                                    eligiendo Mercado Crédito como medio de
                                    pago.
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Box mt={5}>
                        <Stack direction="row" alignItems="center" p={2}>
                            <Image
                                src={security}
                                alt="mercado pago"
                                width="16px"
                            />

                            <Text fontSize="sm" fontWeight="700">
                                <Link>Compra protegida, </Link>
                                <Text
                                    as="span"
                                    color="blackAlpha.600"
                                    fontWeight={400}
                                >
                                    recibí el producto que esperabas o te
                                    devolvemos tu dinero
                                </Text>
                            </Text>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Stack direction="row" alignItems="center" p={2}>
                            <TbTrophy style={{ fontSize: "18px" }} />

                            <Text fontSize="sm" fontWeight="700">
                                <Link>Mercado Puntos, </Link>
                                <Text
                                    as="span"
                                    color="blackAlpha.600"
                                    fontWeight={400}
                                >
                                    sumás 12 puntos.
                                </Text>
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default ProductDetail;
