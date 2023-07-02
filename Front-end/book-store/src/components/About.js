import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" sx={{mt:"7%"}} >
        <Typography sx={{fontFamily:"inherit"}} variant='h4' >
        Discover and enjoy books 
        </Typography>
        <Typography sx={{fontFamily:"revert"}} variant='h5' >
        with our MERN-powered book-store web app.
        </Typography>
      </Box>
    </div>
  )
}

export default About