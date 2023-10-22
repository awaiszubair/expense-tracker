import React, {useState} from 'react'
import InputBar from './inputBar'
import ListDisplay from './listDisplay'
import "./style.css"

var list = [
    {name:"Charger",pass:"10"}
]
const Index = ({stateName,setName,statePass,setPass,ID,setID}) => {
    const [state, setState] = useState(list);
    // setState(state = "Button Clicked");
   
  return (
    <div className='main'>
        <InputBar stateName={stateName} state={state}  statePass={statePass} ID={ID} setID={setID} setName={setName} setPass={setPass}  setState={setState} list={list}/>
        <ListDisplay   setName={setName}  setPass={setPass} setID={setID}  list={list} ID={ID}/>
        {console.log("ON Submission: Index File Called")}
    </div>
  )
}
export default Index