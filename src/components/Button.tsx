import React from 'react';
import {Button, Box, useStyleConfig, StyleProps} from "@chakra-ui/react"

interface ButtonProps {
    size: string,
    variant: string,
    icon?: React.ReactElement,
    iconBg?: boolean,
    iconBgColor? : string,
    btnStyles?: StyleProps,
    iconBgStyles? : StyleProps
}

const defaultProps: ButtonProps = {
    size: "md",
    variant: "primary",
    iconBgColor: "background.green.700",
}

const CustomButton: React.FC<ButtonProps> = (props) => {
    const {size, variant, children, icon, iconBg, iconBgColor, btnStyles, iconBgStyles} = props
    const styles = useStyleConfig("Button", {size, variant})
    const showBgStrip = icon && iconBg;

    const boxStyles = {
        transform: "skew(-29deg)",
        width: "48px",
        height: "52px",
        position: "absolute",
        zIndex: "-1",
        right: "6",
        ...iconBgStyles
    }

    const buttonStyles = {
        zIndex: 1,
        ...btnStyles,
        ...styles,
    }

    const buttonBgStyles = {
        zIndex: 1,
        span: { // Need discussion
            marginLeft: "32px",
            marginRight: "24px"
        },
        ...btnStyles,
        ...styles,
    }

    return (
        icon ?
            <Button sx={buttonBgStyles} rightIcon={icon}>
                {children}
                {showBgStrip && <Box sx={boxStyles} backgroundColor={iconBgColor}/>}
            </Button>
            :
            <Button sx={buttonStyles}>
                {children}
            </Button>
    )
}

CustomButton.defaultProps = defaultProps;

export default CustomButton;