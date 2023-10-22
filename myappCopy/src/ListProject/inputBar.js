import React, {useState} from 'react'
import "./style.css"
import NestListDisplay from './nestListDisplay';
import { Input,Button }  from './style';
const InputBar = ({list, stateName,setName, setPass,statePass,ID, setID,setState,state}) => {
    var name = "";
    var pass = "";

    // function onName(e){
    //     name = e.target.value;
    //     console.log(name);
    // }
    // function onPass(e){
    //     pass = e.target.value;
    // console.log(pass);
    // }

    // ----------- DOING THE ABOVE WORK IN SAME FUNCTION--------------
    function onTextChange(e){
        if(e.target.name == "name"){
            // console.log("Name", e.target.name);
             name = e.target.value;
            setName(name);
        }
        if(e.target.name == "pass"){
            // console.log("Pass", e.target.name);
             pass = e.target.value;
             setPass(pass);
           
        }
        console.log(e.target.name);
    }


   function onChange(e){
    console.log("Going to Choose the Condition",ID);
    if(ID){
        console.log("If condition executed");
        console.log("ID is ",ID);
        var listing = list[ID];
        console.log("THE ID OF THIS LIST IS ",listing);
        console.log(e.target.parentElement.children[0].value);
        list[ID].name = e.target.parentElement.children[0].value;
        list[ID].pass = e.target.parentElement.children[2].value;
        setName(name)
        setPass(pass)
        setID(null);
        console.log("Value Successfully Updated");
        // setID('null');
    }
    else{
        console.log("The id is ",ID);
        setName(name);
        setPass(pass);
        name = stateName;
        pass = statePass
   setState(list.push({name,pass}))
   console.log("List From BAR ",list);
    console.log("Data Submitted");
    console.log("Else Condition executed");
    return;
    }   
   }


  return (
    <div className='inputBar'>
        <Input
         type="text" name='name' placeholder='Enter Product' value={stateName}  onChange={onTextChange} style={{padding:1,marginRight:3}}
        /><br />
        <Input 
         type="text" name='pass' placeholder='Enter Price' value={statePass} onChange={onTextChange}  style={{padding:1}} 
         />
         <br />
         <Button onClick={onChange}>Submit</Button>
        {/* <button onClick={onChange}>Submit</button> */}
        {console.log("ON Submission: inputBar File Called")}

    </div>
  )
}

export default InputBar