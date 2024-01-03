import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  const {currUser} = useContext(AuthContext)
  return (
     <Stack direction="row" justifyContent="space-between" p={3} sx={{
      backgroundColor:"lightgray"
     }}>
      <Stack>
        FireChat
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>

        <FaUserAlt/>
        <Typography >{currUser.displayName || "FireUser"}</Typography>
        <Button variant="contained" onClick={()=>signOut(auth)}>Log Out</Button>
      </Stack>
     </Stack>
  )
}

export default Navbar