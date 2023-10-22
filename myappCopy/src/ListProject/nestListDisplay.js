import React, { useState } from 'react'
import "./style.css"
const NestListDisplay = ({list,id, setName,setPass,setID,comList,ID,setd,delID,deleteList}) => {
    // console.log("Nested List Display",list);
    console.log("Nest File Starting-------------------");
    function update(e){
        var id = e.target.parentElement.getAttribute("data-id");
      var name = e.target.parentElement.children[0].children[1].innerText;
      var pass = e.target.parentElement.children[1].children[1].innerText;
      setName(name);
      setPass(pass)
      setID(id);
      console.log(id);
    //   console.log(e.target.parentElement.children[0].children[1].innerText);
    }
   
    function dele(e){
        // console.log(e.target.parentElement);
        var id = e.target.parentElement.getAttribute("data-id");
        // setID(ID=id);
        setd(delID=id);
        console.log("The id is deleted is: s",id);
        // comList.splice(id,1)
        console.log("Record Successfully Deleted");
        console.log(comList);
        console.log(id,"-----------------------------and the global id is---------------------- ",delID);
        console.log("ID are Reset");

    }


  return (
    <li data-id={id}>
        <div><span>Product: </span> <span>{list.name}</span></div>
        // <div><span className='red'>Price: </span> <span className='red'>${list.pass}</span></div>
     <div><span className='red'>Price: $</span><span className='red'>{list.pass}</span></div>
        <button onClick={update} style={{padding:'0.3rem',color:'white',background:'black',width:'60px'}}>Edit</button>
        <button onClick={deleteList} style={{padding:'0.3rem',color:'white',background:'black',width:'60px',marginLeft:'0.5rem'}}>Delete</button>
        {/* {console.log("LIST FROM NESTED LISTS ",list.name, "AND", list.pass)} */}
        {console.log("ON Submission: nestListDisplay File Called")}
        
    </li>
  )
}

export default NestListDisplay
