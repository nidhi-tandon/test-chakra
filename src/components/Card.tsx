import {Box, Stack, Image, Heading, Text, Link} from '@chakra-ui/react'
import React from "react";

interface Props {
    title: string,
    description: string,
    linkText: string,
    iconSrc: string,
    sx: {
        box: object
    },
    bgImageSrc: string,
    bgImageSrcHover: string
}


const Card: React.FC<Props> = ({title, description, linkText, iconSrc, sx, bgImageSrc, bgImageSrcHover}) => {
    let boxStyles = {
        backgroundImage: `url(${bgImageSrc})`,
        backgroundPositionX: "14px",
        backgroundPositionY: "top",
        backgroundRepeat: "no-repeat",
        "&:hover": {
            backgroundImage: `url(${bgImageSrcHover})`,
            transform: "scale(1.05,1.05)",
            transition: "transform 175ms ease-in,opacity 175ms ease-in,-webkit-transform 175ms ease-in",
            transformOrigin: "center",
        },
        ...sx.box // add or override properties
    }

    return (
        <Box maxW="320px"
             borderRadius="5px"
             bgColor="background.blue.800" // theme color
             boxShadow="0 2px 15px rgb(17 29 143 / 11%)"
             sx={boxStyles}>
            <Stack padding="35px 25px">
                <Image src={iconSrc} boxSize="44px" marginTop="100px"/>
                <Heading color="color.200"
                         fontSize="26px" // Can give custom font size or from the theme as `xxl`
                         fontWeight="800"
                         paddingTop="5" // Scale of 4
                >
                    {title}
                </Heading>
                <Text color="rgba(214,219,241,0.9)"
                      marginTop="20px"
                      fontSize="lg" // declared in theme
                >
                    {description}
                </Text>
                <Link color="color.200" href="" marginTop="0.75">{linkText}</Link>
            </Stack>
        </Box>
    )
}

export default Card
