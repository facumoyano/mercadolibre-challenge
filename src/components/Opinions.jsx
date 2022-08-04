import React from "react";
import { Box, Heading, Stack, Text, Progress, Grid } from "@chakra-ui/react";
import data from "../data";
import ReactStars from "react-stars";
import TabOpinions from "./TabOpinions";

const Opinions = () => {
    return (
        <Box m={8}>
            <Heading fontWeight={400} fontSize="24px" mt={20}>
                Opiniones sobre {data.title}
            </Heading>
            <Stack direction="row" my={10} gap={20} alignItems="center">
                <Box>
                    <Text
                        fontSize="64px"
                        fontWeight={300}
                        textAlign="right"
                        mb="-24px"
                    >
                        5.0
                    </Text>
                    <ReactStars
                        count={5}
                        size={40}
                        color1="RGBA(0, 0, 0, 0.16)"
                        color2="#3483FA"
                        value={5}
                    />
                    <Text fontSize="14px">Promedio entre 4 opiniones</Text>
                </Box>
                <Box
                    fontWeight={200}
                    color="blackAlpha.700"
                    display="flex"
                    flexDir="column"
                    gap={1}
                >
                    <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
                        <Text>5 estrellas</Text>
                        <Progress
                            height="4px"
                            width="173px"
                            value={100}
                            bgColor="#E5E5E5"
                        />
                        <Text ml={2}>4</Text>
                    </Grid>
                    <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
                        <Text>4 estrellas</Text>
                        <Progress
                            height="4px"
                            width="173px"
                            value={0}
                            bgColor="#E5E5E5"
                        />
                        <Text ml={2}>0</Text>
                    </Grid>
                    <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
                        <Text>3 estrellas</Text>
                        <Progress
                            height="4px"
                            width="173px"
                            value={0}
                            bgColor="#E5E5E5"
                        />
                        <Text ml={2}>0</Text>
                    </Grid>
                    <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
                        <Text>2 estrellas</Text>
                        <Progress
                            height="4px"
                            width="173px"
                            value={0}
                            bgColor="#E5E5E5"
                        />
                        <Text ml={2}>0</Text>
                    </Grid>
                    <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
                        <Text>1 estrellas</Text>
                        <Progress
                            height="4px"
                            width="173px"
                            value={0}
                            bgColor="#E5E5E5"
                        />
                        <Text ml={2}>0</Text>
                    </Grid>
                </Box>
            </Stack>
            <TabOpinions />
        </Box>
    );
};

export default Opinions;
