import { useEffect, useState } from "react";
var i = 0;
console.log("Whole File Re-Rendering......");
const Check = ()=>{
  var arr= ["Allah Apko","Sehat Day", "Ameen"]
const [state,setState] = useState(0);
function submit(){
 setState((i)=> i+1);
}
useEffect(()=>{

  if(state == i){
    i = 0;
  }
 
    console.log('Actuall Document Re Rendered');
},[state])
  return (
    <>
    <h1>{arr[state]}</h1>
    <button onClick={submit}>Next</button>
    {console.log("----!-----")}
    {console.log("Button Re-Rendered with state: ",state)}
    {console.log("Value of i is: ",i)}
    </>
  )
}
export default Check;