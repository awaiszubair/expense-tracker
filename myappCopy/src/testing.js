import React, {useState} from 'react'
import Button from './button'
import FilterableProductTable from './FilerableProductsTable/filterableProductTable';
import Index from './ListProject';
const Testing = () => {

// -----------PRODUCTS LIST RETREIVING IN LI-------------

//     const products = [
//         { title: 'Cabbage', id: 1 },
//         { title: 'Garlic', id: 2 },
//         { title: 'Apple', id: 3 },
//     ]
//     const listItems = products.map(product => <li>{product.title}</li>)
//   return (
//     <div><h1>The is my First Testing Website</h1>
//     <Button/>
//     <ul>{listItems}</ul>
//     </div>
//   )


// ---------- BUTTON EVENTS COUNTER-----------
// var i = 0;
// var [state1, setState] = useState(0)
// function clickHandler(){
//     setState(state1+1)
// }
// return(
//     <>
//     <button onClick={clickHandler}>
//         {state1}
//     </button>
//     <button onClick={clickHandler}>{state1}</button>
//     </>
// )


// -------------COUNTER BY OTHER METHODS---------------

// var [state1,setState] = useState(0)
// function clickHandler(){
//    setState(state1+1)
// }
// function calling(){
//     console.log("Parent Function Called");
// }
// calling();
// return(
//     <>
//     <Button count={state1} clickEvent={clickHandler}/>
//     {/* <Button count={state1} clickEvent={clickHandler}/> */}
//     </>
// )


// ----------------------FILTERABLE PRODUCTS TABLE UI-----------------------

// --------- PROJECT 1--------------


// const PRODUCTS = [
//     {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//     {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//     {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//     {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//     {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//     {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
//   ];

// return <FilterableProductTable products={PRODUCTS}/>


// ----------------PROJECT 2---------------------
const [stateName, setName] = useState('');
const [statePass, setPass] = useState('');
const [ID, setID] = useState('');
return <Index stateName={stateName} setName={setName} statePass={statePass} setPass={setPass} ID={ID} setID={setID} />
}
export default Testing
