import React, {useState} from 'react'
import SearchBar from './searchBar'
import ProductTable from './productTable'
import Remove from './removeAble'
import "./style.css"
const FilterableProductTable = ({products}) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
    <div className='table'>
    < SearchBar 
    filterText = {filterText}
    inStockOnly = {inStockOnly}
    onFilterTextChange = {setFilterText}
    onInStockOnlyChange = {setInStockOnly}
    />
    <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly = {inStockOnly}
    />
    </div>
    </>
  )
}

export default FilterableProductTable