import React,{ useState } from "react";
import Box from '@mui/material/Box';
const Nav = ()=>{
return  <Box sx={{
    width: '100%',
    height: 60,
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}>
<h3>Navbar</h3>
<div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</div>
</Box>
}

export default Nav;