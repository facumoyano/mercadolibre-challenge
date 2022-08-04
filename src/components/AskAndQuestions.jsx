import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    Heading,
    Input,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import data from "../data";

const AskAndQuestions = () => {
    const [preguntas, setPreguntas] = useState(data.preguntas);
    const [pregunta, setPregunta] = useState("");

    const handleSubmit = () => {
        setPreguntas([...preguntas, { pregunta: pregunta }]);
        setPregunta("");
    };

    return (
        <>
            <Box m={8}>
                <Heading fontWeight={400} fontSize="24px" mt={20}>
                    Preguntas y respuestas
                </Heading>
                <Text fontSize="18px" fontWeight={500} my={10}>
                    ¿Qué quieres saber?
                </Text>
                <Stack direction="row" gap={3}>
                    {[
                        "Costo y tiempo de envío",
                        "Devoluciones gratis",
                        "Medios de pago",
                        "Garantía",
                    ].map((item, i) => (
                        <Box
                            key={i}
                            bgColor="#E3EDFB"
                            p="6px 12px"
                            borderRadius="5px"
                        >
                            <Link fontSize="16px" fontWeight="500">
                                {item}
                            </Link>
                        </Box>
                    ))}
                </Stack>
                <Text fontSize="18px" fontWeight={500} my={10}>
                    Preguntale al vendedor
                </Text>
                <Stack direction="row" gap={2}>
                    <Input
                        type="text"
                        placeholder="Escribí tu pregunta..."
                        height="48px"
                        border="1px solid #979797"
                        borderRadius="10px"
                        value={pregunta}
                        _placeholder={{ color: "#CFCFCF" }}
                        _hover="none"
                        _active={{
                            border: "1px solid #3483FA",
                        }}
                        onChange={(e) => setPregunta(e.target.value)}
                    />
                    <Button
                        bgColor="#3483FA"
                        _hover={{ backgroundColor: "#2968C8" }}
                        height="48px"
                        width="180px"
                        color="white"
                        onClick={handleSubmit}
                    >
                        Preguntar
                    </Button>
                </Stack>
                <Text fontSize="sm" color="#979797" p={2} fontWeight={100}>
                    Tiempo aproximado de respuesta: 51 minutos
                </Text>
                <Text fontSize="18px" fontWeight={500} my={10}>
                    Últimas realizadas
                </Text>
                <Box>
                    {preguntas.map((item, i) => (
                        <Box key={i} fontSize="16px">
                            <Text>{item.pregunta}</Text>
                            <Box
                                display="flex"
                                p={3}
                                gap={2}
                                color="blackAlpha.600"
                            >
                                {item.respuesta && <BsArrowReturnRight />}
                                <Text>
                                    {item.respuesta}{" "}
                                    <Text as="span">{item.fecha}</Text>
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box my={8}>
                    <Link fontSize="sm">Ver todas las preguntas</Link>
                </Box>
            </Box>
            <Box border="1px solid RGBA(0, 0, 0, 0.08)" mx={8} my={10}></Box>
        </>
    );
};

export default AskAndQuestions;
