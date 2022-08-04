import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

const InforSeller = () => {
    return (
        <Box
            border="1px solid RGBA(0, 0, 0, 0.08)"
            borderRadius="8px"
            p={4}
            mt={4}
        >
            <Text fontSize="18px" py={4}>
                Información sobre el vendedor
            </Text>
            <Stack direction="row">
                <Image
                    src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
                    alt="imagen medalla"
                    height="20px"
                    width="20px"
                    mt="0.2rem"
                />
                <Box>
                    <Text color="#5DC690" fontSize="16px">
                        MercadoLíder Platinum
                    </Text>
                    <Text fontSize="14px" color="#9A9A9A">
                        ¡Es uno de los mejores del sitio!
                    </Text>
                </Box>
            </Stack>
            <Stack direction="row" alignItems="center" my={4}>
                <Box height="8px" width="58px" bgColor="#FFF0F0"></Box>
                <Box height="8px" width="58px" bgColor="#FFF5E8"></Box>
                <Box height="8px" width="58px" bgColor="#FFFCDA"></Box>
                <Box height="8px" width="58px" bgColor="#F1FDD7"></Box>
                <Box height="12px" width="58px" bgColor="#39B54A"></Box>
            </Stack>
            <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-around"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    position="relative"
                    _after={{
                        backgroundColor: "RGBA(0, 0, 0, 0.08)",
                        content: '""',
                        height: "91%",
                        position: "absolute",
                        right: -4,
                        top: "8%",
                        width: "1px",
                    }}
                >
                    <Text fontSize="24px" color="black">
                        1639
                    </Text>
                    <Text fontSize="12px" color="#666666">
                        Ventas en los <br /> últimos 60 días
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    position="relative"
                    gap={2}
                    _after={{
                        backgroundColor: "RGBA(0, 0, 0, 0.08)",
                        content: '""',
                        height: "100%",
                        position: "absolute",
                        right: -4,
                        top: "8%",
                        width: "1.2px",
                    }}
                >
                    <Image
                        src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
                        width="28px"
                        height="23px"
                    />
                    <Text fontSize="12px" color="#666666">
                        Brinda buena <br />
                        atención
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                >
                    <Image
                        src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
                        width="28px"
                        height="23px"
                    />
                    <Text fontSize="12px" color="#666666">
                        Despacha sus <br />
                        productos a <br />
                        tiempo
                    </Text>
                </Box>
            </Stack>
            <Box mt={3}>
                <Link fontSize="sm">Ver más datos de este vendedor</Link>
            </Box>
        </Box>
    );
};

export default InforSeller;
