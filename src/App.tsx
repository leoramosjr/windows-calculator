import {
  Flex,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import WindowBar from './components/WindowBar'
import CalculatorPad from './components/CalculatorPad'
import CalculatorDisplay from './components/CalculatorDisplay'

import './global.css'

function App() {
  const [displayValue, setDisplayValue] = useState(String(0))

  function formatDisplay(value: string) {
    const newDisplay = value.split('').reverse()
    // newDisplay.splice(3, 0, '.')
    console.log(newDisplay)
    return newDisplay.reverse().join('')
  }

  useEffect(() => {
    setDisplayValue(formatDisplay(displayValue))
    console.log("lenght",displayValue.length)
  }, [displayValue])

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
        <CalculatorDisplay displayValue={displayValue} />
        <Flex></Flex>
        <CalculatorPad displayValue={displayValue} setDisplayValue={setDisplayValue} />
      </Flex>
    </Flex>
  )
}

export default App
