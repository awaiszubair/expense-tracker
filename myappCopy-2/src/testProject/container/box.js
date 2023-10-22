import React from 'react'
import {Button} from  '@mui/material'
function Box({dt}) {
  return (
   <li>
    <div>
        <h3>Name{dt.login}</h3>
    </div>
    <div>
        <img src={dt.avatar_url} alt="person" />
    </div>
    <div>
    {/* <Button variant="text">Text</Button> */}
    <Button variant="contained">view</Button>
    </div>
   </li>
  )
}

export default Box