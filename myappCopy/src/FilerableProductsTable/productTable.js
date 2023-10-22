import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import "./style.css"

const productTable = ({products,filterText, inStockOnly}) => {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((pd)=>{
        if(pd.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
        {
            return;
        }
        if(inStockOnly && !pd.stocked){
            return;
        }
        if(pd.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={pd.category} key={pd.category}  />
            )
        }
        rows.push(
            <ProductRow  product={pd} key={pd.name} />
        )
        lastCategory = pd.category;
    })
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
export default productTable