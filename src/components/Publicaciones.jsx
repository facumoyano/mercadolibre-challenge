import React, { useRef } from "react";
import { Box, Heading, Grid, Link } from "@chakra-ui/react";
import Card from "./Card";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data";

let slidesToShow = 3;
const Publicaciones = () => {
    const SampleNextArrow = (props) => {
        const { className, currentSlide, slideCount, onClick } = props;
        return (
            <>
                {currentSlide !== slideCount - slidesToShow && (
                    <div className={className} onClick={onClick}>
                        <Box
                            position="absolute"
                            left="-40px"
                            bottom="-50px"
                            shadow="lg"
                            padding="1rem"
                            borderRadius="50%"
                            backgroundColor="white"
                            _hover={{
                                shadow: "xl",
                            }}
                        >
                            <Link>
                                <AiOutlineRight style={{ fontSize: "30px" }} />
                            </Link>
                        </Box>
                    </div>
                )}
            </>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, currentSlide, slideCount, onClick } = props;
        return (
            <>
                {currentSlide !== 0 && (
                    <div className={className} onClick={onClick}>
                        <Box
                            position="absolute"
                            right="-40px"
                            bottom="-50px"
                            shadow="lg"
                            padding="1rem"
                            borderRadius="50%"
                            backgroundColor="white"
                            opacity={1}
                            zIndex="12"
                            _hover={{
                                shadow: "xl",
                            }}
                        >
                            <Link>
                                <AiOutlineLeft style={{ fontSize: "30px" }} />
                            </Link>
                        </Box>
                    </div>
                )}
            </>
        );
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <Box m={8}>
                <Heading fontWeight={400} fontSize="24px">
                    Publicaciones del vendedor
                </Heading>
                <Box
                    maxWidth="700px"
                    margin="0 auto"
                    position="relative"
                    zIndex="14"
                    py={6}
                >
                    <Slider {...settings}>
                        {data.carousel.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </Slider>
                </Box>
                <Link fontSize="sm">Ver más publicaciones del vendedor</Link>
            </Box>
            <Box border="1px solid RGBA(0, 0, 0, 0.08)" mx={8} my={8}></Box>
        </>
    );
};

export default Publicaciones;
