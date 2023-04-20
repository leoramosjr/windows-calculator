import {
    Flex,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CalculatorDisplay() {
    const [padCounter, setPadCounter] = useState(0);
    
    function handleKeyPress(e: KeyboardEvent) {
        if (e.key === "1") {
            setPadCounter(padCounter + 1);
        } else if (e.key === "2") {
            setPadCounter(padCounter + 2);
        } else if (e.key === "3") {
            setPadCounter(padCounter + 3);
        } else if (e.key === "4") {
            setPadCounter(padCounter + 4);
        } else if (e.key === "5") {
            setPadCounter(padCounter + 5);
        } else if (e.key === "6") {
            setPadCounter(padCounter + 6);
        } else if (e.key === "7") {
            setPadCounter(padCounter + 7);
        } else if (e.key === "8") {
            setPadCounter(padCounter + 8);
        } else if (e.key === "9") {
            setPadCounter(padCounter + 9);
        } else if (e.key === "0") {
            setPadCounter(padCounter + 0);
        }
    }

    return (
        <Flex
            h="65px"
            w="100%"
            bgColor="#transparent"
            justify="flex-end"
            align="center"
            p="0 8px"
        >
            <Input
                h="100%"
                w="100%"
                bgColor="#transparent"
                color="#f8e4e3"
                fontSize="40px"
                fontWeight="400"
                textAlign="right"
                border="none"
                _focus={{
                    outline: "none",
                    border: "none",
                }}
                type="number"
                value={padCounter}
                onChange={(e) => {
                    setPadCounter(parseInt(e.target.value));
                }}
            />
        </Flex>
    );
}