import React from 'react'

const button = ({count,clickEvent}) => {
    const btn_text = "This is the dynamic text data";
    function calling(){
        console.log("Button Function Called");
    }
    calling();
  return (
    <button onClick={clickEvent}>
        {count}
    </button>
  )
}

export default button