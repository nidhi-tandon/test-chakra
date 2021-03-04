import {
    StylesProvider,
    useMultiStyleConfig,
    useStyles,
} from "@chakra-ui/react"
import {Flex, Input, InputProps} from '@chakra-ui/react'
import React from "react";

interface formProps {
    size: string
}

const DummyForm: React.FC<formProps> = (props) => {
    const {size, children, ...rest} = props;
    const styles = useMultiStyleConfig("Form", {size})
    return (
        <Flex sx={styles.form} {...rest}>
            <StylesProvider value={styles}>{children}</StylesProvider>
        </Flex>
    )
}


const FormInput: React.FC<InputProps> = (props) => {
    const styles = useStyles()
    return <Input sx={styles.input} {...props} />
}

export {DummyForm, FormInput}