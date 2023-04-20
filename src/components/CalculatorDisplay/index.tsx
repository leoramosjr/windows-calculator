import {
    Flex,
} from "@chakra-ui/react";

export default function CalculatorDisplay({
    displayValue,
} : {
    displayValue: string;
}) {
    
    return (
        <Flex
            h="65px"
            w="100%"
            bgColor="#transparent"
            justify="flex-end"
            align="center"
            p="0 16px"
        >
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