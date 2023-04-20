import {
    Flex,
    Button,
    Image,
} from '@chakra-ui/react'

export default function WindowBar() {
    return (
        <Flex
            h="35px"
            w="100%"
            justify="space-between"
            align="center"
        >
            <Flex
                pt="8px"
                gap="1rem"
                fontSize="14px"
                color="#FFFFFF"
            >
                <Image
                    h="18px"
                    w="auto"
                    ml="1rem"
                    borderRadius="0"
                    bgColor="transparent"
                    src="/Windows_Calculator_icon.png"
                />
                Calculadora
            </Flex>
            <Flex>
                <Button
                    h="35px"
                    w="50px"
                    borderRadius="0"
                    bgColor="transparent"
                    _hover={{
                        backgroundColor: "#363636",
                    }}
                >
                    <Flex
                        pb="10px"
                        justify="center"
                        align="center"
                        color="#f8e4e3"
                        fontSize="20px"
                        fontWeight="400"
                    >_</Flex>
                </Button>
                <Button
                    h="35px"
                    w="50px"
                    borderRadius="0"
                    bgColor="transparent"
                    _hover={{
                        backgroundColor: "#363636",
                    }}
                >
                    <Flex
                        pb="6px"
                        justify="center"
                        align="center"
                        color="#f8e4e3"
                        fontSize="22px"
                        fontWeight="400"
                    >□</Flex>
                </Button>
                <Button
                    h="35px"
                    w="50px"
                    borderRadius="0"
                    bgColor="transparent"
                    onClick={() => {
                        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                    }}
                    _hover={{
                        backgroundColor: "#c42b1c",
                    }}
                >
                    <Flex
                        justify="center"
                        align="center"
                        color="#f8e4e3"
                        fontSize="30px"
                        fontWeight="400"
                        fontFamily="Dongle, sans-serif"
                    >x</Flex>
                </Button>
            </Flex>
        </Flex>
    )
}