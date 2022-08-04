import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const InfoPay = () => {
    return (
        <>
            <Box
                border="1px solid RGBA(0, 0, 0, 0.08)"
                borderTopEndRadius="8px"
                borderTopStartRadius="8px"
                p={4}
                mt={4}
            >
                <Text fontSize="18px" py={4}>
                    Devolución gratis
                </Text>
                <Text fontSize="sm" color="#979797" mb={4}>
                    Tenés 30 días desde que recibís el producto para <br />
                    devolverlo. ¡No importa el motivo!
                </Text>
                <Link fontSize="sm">Conocer más sobre devoluciones</Link>
            </Box>
            <Box border="1px solid RGBA(0, 0, 0, 0.08)" p={4}>
                <Text fontSize="18px" py={4}>
                    Garantía
                </Text>
                <Text fontSize="16px" py={4}>
                    Compra Protegida con Mercado Pago
                </Text>
                <Text fontSize="sm" color="#979797" mb={2}>
                    Recibí el producto que esperabas o te devolvemos <br /> tu
                    dinero
                </Text>
                <Text fontSize="16px" py={4}>
                    Garantía del vendedor
                </Text>
                <Text fontSize="sm" color="#979797" mb={4}>
                    Garantía del vendedor: 1 mes
                </Text>
                <Link fontSize="sm">Conocer más sobre garantía</Link>
            </Box>
            <Box
                border="1px solid RGBA(0, 0, 0, 0.08)"
                p={4}
                borderBottomEndRadius="8px"
                borderBottomStartRadius="8px"
            >
                <Text fontSize="18px" py={4}>
                    Medios de pago
                </Text>
                <Box>
                    <Text fontSize="16px">Hasta 12 cuotas sin tarjeta</Text>
                    <Image
                        src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"
                        alt="Mercado pago"
                        height="36px"
                        width="73px"
                        objectFit="contain"
                    />
                </Box>
                <Box mt={4}>
                    <Text fontSize="16px">Tarjetas de crédito.</Text>
                    <Text fontSize="sm" color="#979797" my={1}>
                        ¡Cuotas sin interés con bancos seleccionados!
                    </Text>
                    <Box display="flex" gap={4} my={4}>
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                            alt="visa"
                            height="32px"
                            width="42px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
                            alt="american express"
                            height="32px"
                            width="42px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                            alt="naranja"
                            height="32px"
                            width="63px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                            alt="mastercard"
                            height="32px"
                            width="42px"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
                <Box mt={4}>
                    <Text fontSize="16px">Tarjetas de débito.</Text>

                    <Box display="flex" gap={4} my={4} flexWrap="wrap">
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
                            alt="visa"
                            height="32px"
                            width="71px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"
                            alt="maestro"
                            height="32px"
                            width="32px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                            alt="mastercard"
                            height="32px"
                            width="61px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"
                            alt="cabral"
                            height="32px"
                            width="59px"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
                <Box mt={4}>
                    <Text fontSize="16px">Efectivo</Text>
                    <Box display="flex" gap={4} my={4} flexWrap="wrap">
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"
                            alt="pago facil"
                            height="32px"
                            width="32px"
                            objectFit="contain"
                        />
                        <Image
                            src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"
                            alt="rapipago"
                            height="32px"
                            width="67px"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
                <Box py={4}>
                    <Link fontSize="sm">Conocé otros medios de pago</Link>
                </Box>
            </Box>
        </>
    );
};

export default InfoPay;
