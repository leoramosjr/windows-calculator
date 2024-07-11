import {
  Flex,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import WindowBar from './components/WindowBar'
import CalculatorPad from './components/CalculatorPad'
import CalculatorDisplay from './components/CalculatorDisplay'

import './global.css'

export default function App() {
  const [displayValue, setDisplayValue] = useState(String(0))
  const [memoryValue, setMemoryValue] = useState(String(0))
  const [operator, setOperator] = useState(String(''))

  // function formatDisplay(value: string) { //19 = 16 digitos + 5 pontos
  //   const newDisplay = value.split('').reverse()
  //   if (newDisplay.length === 4) newDisplay.splice(3, 0, '.')
  //   if (newDisplay.length > 4) {
  //     if(newDisplay.indexOf('.') === 4) {
  //       newDisplay.splice(4, 1)
  //       newDisplay.splice(3, 0, '.')
  //     }
  //   }
  //   return newDisplay.reverse().join('')
  // }

  // useEffect(() => {
  //   setDisplayValue(formatDisplay(displayValue))
  //   console.log("lenght",displayValue.length)
  // }, [displayValue])

  return (
    <Flex
      h="100vh"
      w="100vw"
      bgColor="#2E3345"
      justify="center"
      align="center"
    >
      <Flex
        h="800px"
        w="500px"
        bgColor="#21201f"
        borderRadius="8px"
        border="1px solid #44464e"
        boxShadow="0 0 10px 0 #04060e"
        flexDir="column"
        justify="space-between"
      >
        <WindowBar />
        <Flex></Flex>
        <CalculatorDisplay
          displayValue={displayValue}
          memoryValue={'Hello World'}
        />
        <Flex></Flex>
        <CalculatorPad
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          setOperator={setOperator}
          setMemoryValue={setMemoryValue}
        />
      </Flex>
    </Flex>
  )
}
