import { Grid } from '@chakra-ui/react';
import React from 'react';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

const PayWindow = () => {
  return (
    <Grid
      w={"100%"}
      h={"100%"}
      templateColumns={"3fr 7fr"}
    >
      <LeftSide />
      <RightSide />
    </Grid>
  )
}

export default PayWindow