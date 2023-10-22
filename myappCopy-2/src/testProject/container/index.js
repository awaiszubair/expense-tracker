import React, { useEffect, useState } from 'react';
import Box from './box';
import axios from 'axios';

var loading = false;

const Container = ()=>{
  const [state, setState] = useState([]);

  useEffect(() => {
    // var response = await axios.get(`https://api.github.com/users`);
    // setState(response.data);
    // loading = true;
    const allUsers =  async()=> {
        try {
            var response = await axios.get(`https://api.github.com/users`);
    setState(response.data);
    loading = true;
        } catch (error) {
            console.log(error);
        }
    }
    allUsers();
  },[]);

  return (
    <div style={{marginTop:"1rem"}}>
      <ul>
        {loading &&
          state.map((dt) => (
            <Box dt={dt} />
          ))}
      </ul>
    </div>
  );
}

export default Container;
