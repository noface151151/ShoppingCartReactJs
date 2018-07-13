import React from 'react';
import Product from './product/product';

const products=(props)=>{

    const products=props.products.map((val,index)=>{
        return <Product product={val} key={index} clicked={()=>props.clicked(val)}/>
    });
      return (
        <div>
            <h3>List Products</h3>
            {products}
        </div>
      )     
}

export default products;