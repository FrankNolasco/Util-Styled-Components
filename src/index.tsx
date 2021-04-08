import React from 'react'
import { Flex } from './components/Flex'

export const Hello: React.FC<{ name: String }> = ({name}) => {
    return (<Flex>
        <span>Hola</span>
        <span>Hola</span>
    </Flex>)
}