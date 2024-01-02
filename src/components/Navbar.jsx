import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Navbar = () => {
  return (
     <Stack direction="row" justifyContent="space-between" p={3} sx={{
      backgroundColor:"lightgray"
     }}>
      <Stack>
        FireChat
      </Stack>
      <Stack direction="row" alignItems="center">
        <Typography mr={4}>User1</Typography>
        <Button variant="contained">Log Out</Button>
      </Stack>
     </Stack>
  )
}

export default Navbar