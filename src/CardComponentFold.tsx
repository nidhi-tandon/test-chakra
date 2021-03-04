import React from 'react'
import {Container, Flex} from "@chakra-ui/react"
import Card from './components/Card';

const customStyles = {
    box: {
        maxWidth: "315px", // overriding default maxWidth
        margin: ["20px", "0"]
    }
}

const CardComponent : React.FC = () => {
    return (
        <Container maxW="5xl">
            <Flex justifyContent={["center", "space-between"]}
                  flexDirection={["column", "row"]}
                  alignItems={"center"}
            >
                <Card title="Razorpay Capital"
                      description="Get payments within 12 working hours &amp; never have a shortfall of working capital."
                      linkText="Learn More"
                      iconSrc="capital-icon.svg"
                      sx={customStyles}
                      bgImageSrc={"capital-bg.svg"}
                      bgImageSrcHover={"capital-dark-bg.svg"}
                />

                <Card title="Razorpay Capital"
                      description="Get payments within 12 working hours &amp; never have a shortfall of working capital."
                      linkText="Learn More"
                      iconSrc="capital-icon.svg"
                      sx={customStyles}
                      bgImageSrc={"capital-bg.svg"}
                      bgImageSrcHover={"capital-dark-bg.svg"}
                />

                <Card title="Razorpay Capital"
                      description="Get payments within 12 working hours &amp; never have a shortfall of working capital."
                      linkText="Learn More"
                      iconSrc="capital-icon.svg"
                      sx={customStyles}
                      bgImageSrc={"capital-bg.svg"}
                      bgImageSrcHover={"capital-dark-bg.svg"}
                />
            </Flex>
        </Container>
    );
}

export default CardComponent;
