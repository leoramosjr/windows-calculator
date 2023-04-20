import {
    Flex,
    Button,
} from '@chakra-ui/react'

export default function CalculatorPad({
    displayValue,
    setDisplayValue,
} : {
    displayValue: string;
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
                <Button
                    className='darkButton'
                >
                    %
                </Button>
                <Button
                    className='darkButton'
                >
                    CE
                </Button>
                <Button
                    className='darkButton'
                    onClick={() => {
                        setDisplayValue('0')
                    }}
                >
                    C
                </Button>
                <Button
                    className='darkButton'
                >
                    Backspace
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button
                    className='darkButton'
                >
                    1/x
                </Button>
                <Button
                    className='darkButton'
                >
                    x²
                </Button>
                <Button
                    className='darkButton'
                >
                    Sqrrt(x)
                </Button>
                <Button
                    className='darkButton'
                >
                    /
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('7') :
                        setDisplayValue(displayValue + '7')
                    }}}
                >
                    7
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('8') :
                        setDisplayValue(displayValue + '8')
                    }}}
                >
                    8
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('9') :
                        setDisplayValue(displayValue + '9')
                    }}}
                >
                    9
                </Button>
                <Button
                    className='darkButton'
                >
                    X
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('4') :
                        setDisplayValue(displayValue + '4')
                    }}}
                >
                    4
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('5') :
                        setDisplayValue(displayValue + '5')
                    }}}
                >
                    5
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('6') :
                        setDisplayValue(displayValue + '6')
                    }}}
                >
                    6
                </Button>
                <Button
                    className='darkButton'
                >
                    -
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('1') :
                        setDisplayValue(displayValue + '1')
                    }}}
                >
                    1
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('2') :
                        setDisplayValue(displayValue + '2')
                    }}}
                >
                    2
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('3') :
                        setDisplayValue(displayValue + '3')
                    }}}
                >
                    3
                </Button>
                <Button
                    className='darkButton'
                >
                    +
                </Button>
            </Flex>
            <Flex className='calcPadRow'>
                <Button
                    className='lightButton'
                >
                    +/-
                </Button>
                <Button
                    className='lightButton'
                    onClick={() => {
                        if (displayValue.length <= 21) {
                        displayValue === '0' ?
                        setDisplayValue('0') :
                        setDisplayValue(displayValue + '0')
                    }}}
                >
                    0
                </Button>
                <Button
                    className='lightButton'
                >
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