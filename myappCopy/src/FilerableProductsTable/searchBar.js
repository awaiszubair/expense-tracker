import React from 'react'
import "./style.css"

const searchBar = ({filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange}) => {
  return (
    <>
    <form>
    <div className='search'>
    <div>
        <input type="text" value={filterText} onChange={(e)=> onFilterTextChange(e.target.value)}  placeholder='Search Bar' />
    </div>
    <div>
        <input type="checkbox" checked={inStockOnly} onChange={(e)=> onInStockOnlyChange(e.target.checked)}/>
        <span>Only Show Product in Stock</span>
    </div>
    </div>
    </form>
    </>
  )
}

export default searchBar