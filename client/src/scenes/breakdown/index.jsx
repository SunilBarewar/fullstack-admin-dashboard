import React from 'react'
import { Box, useTheme } from '@mui/material';
import Header from 'components/Header';
import BreakDownChart from "components/BreakDownChart"
const BreakDown = () => {
  return (
   <Box m="1.5rem 2.5rem">
    <Header  title="BREAKDOWN" subtitle="Breakdown of Sales by Category" />

    <Box mt="40px" height="75vh">
        <BreakDownChart />
    </Box>
   </Box>
  )
}

export default BreakDown