import {
    Flex,
    Button,
} from '@chakra-ui/react'

export default function CalculatorPad({
    // displayValue,
    setDisplayValue,
} : {
    // displayValue: string;
    setDisplayValue: (value: string) => void;
}) {
    return (
        <Flex
            h="65%"
            w="100%"
            direction="column"
            p="4px"
            gap="2px"
            color="#f8e4e3"
        >
            <Flex className='calcPadRow'>
                <Button className='darkButton'>
                    %
                </Button>
                <Button className='darkButton'>
                    CE
                </Button>
                <Button className='darkButton'>
                    C
                </Button>
                <Button className='darkButton'>
                    Backspace
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button className='darkButton'>
                    1/x
                </Button>
                <Button className='darkButton'>
                    x²
                </Button>
                <Button className='darkButton'>
                    Sqrrt(x)
                </Button>
                <Button className='darkButton'>
                    /
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button className='lightButton'>
                    7
                </Button>
                <Button className='lightButton'>
                    8
                </Button>
                <Button className='lightButton'>
                    9
                </Button>
                <Button className='darkButton'>
                    X
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button className='lightButton'>
                    4
                </Button>
                <Button className='lightButton'>
                    5
                </Button>
                <Button className='lightButton'>
                    6
                </Button>
                <Button className='darkButton'>
                    -
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button className='lightButton'>
                    1
                </Button>
                <Button className='lightButton'>
                    2
                </Button>
                <Button className='lightButton'>
                    3
                </Button>
                <Button className='darkButton'>
                    +
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button className='lightButton'>
                    +/-
                </Button>
                <Button className='lightButton'>
                    0
                </Button>
                <Button className='lightButton'>
                    ,
                </Button>
                <Button
                    h="100%"
                    w="100%"
                    color="#3c3c3c"
                    bgColor="#4CC2FF"
                    _hover={{
                        bgColor: "#47b1e8",
                    }}
                >
                    =
                </Button>
            </Flex>
        </Flex>
    )
}