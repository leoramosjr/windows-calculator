import {
    Flex,
} from "@chakra-ui/react";

export default function CalculatorDisplay({displayValue, memoryValue } : { displayValue: string; memoryValue: string;}) { 
    return (
        <Flex
            h="65px"
            w="100%"
            bgColor="#transparent"
            justify="flex-end"
            align="flex-end"
            p="0 16px"
            direction="column"
        >
            <Flex
                color="#929292"
            >
                {memoryValue}
            </Flex>
            <Flex
                h="100%"
                w="100%"
                color="#f8e4e3"
                fontSize="48px"
                fontWeight="600"
                justify="flex-end"
                children={displayValue}
            />
        </Flex>
    );
}