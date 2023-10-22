import React, { useState } from 'react'
import NestListDisplay from './nestListDisplay'
import "./style.css"
const ListDisplay = ({list,setName,setPass,setID,ID}) => {
// console.log("List Display", list);
var [d,setd] = useState('');
function deleteList(e){
  var id = e.target.parentElement.getAttribute("data-id");
  if(d == id){
    setd(d = null)
    // setd(d=id)
    list.splice(id,1);
  }
  else{
  setd(d=id);
    console.log(d,"The id of deleted Reocrd");
    list.splice(id,1);
  }
}
var rows = [];
console.log(list);
  return (
    <div className='listDisplay'>
        {list.forEach((subList,i)=>{
          {console.log("-------------DOCUMENT ARE RE RENDERED---------------")}
           rows.push( <NestListDisplay deleteList={deleteList} delID={d} setd={setd} ID={ID}  setName={setName} setPass={setPass} setID={setID} key={i} id={i} list={subList} comList={list}/>)
        })}
        <h3>
            <ul className='nestList'>
            {rows}
            </ul>
        </h3>
        {console.log("ON Submission: listDisplay File Called")}
    </div>
  )
}

export default ListDisplay