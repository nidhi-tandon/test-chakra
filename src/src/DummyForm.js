import {
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
} from "@chakra-ui/react"
import {Flex, Input} from '@chakra-ui/react'
import React from "react";


export function DummyForm(props) {
  const { size, variant, children, ...rest } = props
  const styles = useMultiStyleConfig("Form", { size, variant })
  return (
    <Flex sx={styles.form} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Flex>
  )
}

export function FormInput(props) {
  const styles = useStyles()
  return <Input sx={styles.input} {...props} />
}