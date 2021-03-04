import React from 'react'
import {Box, Heading, Text, Stack, Button} from "@chakra-ui/react"
import {useMediaQuery} from "@chakra-ui/react"
import {DummyForm, FormInput} from './DummyForm';

function App() {
    const [name, setName] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const [isLargerThan360] = useMediaQuery("(min-width: 360px)")

    return (
        <Box bg="background.200" sx={{margin: "auto", padding: "12px"}} maxW="1024px">
            <Stack spacing="12px">
                <Heading fontSize="lg">Thirdwatch</Heading>
                <Text fontSize="md">
                    {isLargerThan360 ?
                        "Share your details with us and we will get back to you."
                        : "Share your details with us"}
                </Text>
                <Text>Your Name</Text>
                <DummyForm size="md">
                    <FormInput placeholder="Full Name" value={name} onChange={handleChangeName}/>
                    <FormInput placeholder="Email" value={email} onChange={handleChangeEmail}/>
                </DummyForm>
                <Button backgroundColor="background.pink.800" color="color.200">
                    Submit Details
                </Button>
            </Stack>
        </Box>
    );
}

export default App;
