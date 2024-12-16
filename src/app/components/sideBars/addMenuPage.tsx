import React from 'react';
import { YellowLine } from '../yellowLine/YellowLine';
import { Box, Flex } from '@chakra-ui/react';
import { Viewport } from 'next';
import MenuBar from '../../components/menuBar/MenuBar';

const addMenuPage = () => {
  return (
    <Flex
      w="100vw"
      h="100%"
    >
      <Box
        w="80%"
        className='bg-gray-100'
      >
        <Box>
          <MenuBar menuButton />
        </Box>
        <Box
          className='w-full flex flex-end'
        >
          <YellowLine />
        </Box>
      </Box>
    </Flex>
  )
}

export default addMenuPage
