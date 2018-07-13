import React from 'react';
import ShoppingCart from './shoppingcart/shoppingcart';

const shoppingCarts = (props)=>{

    if(props.shoppingCarts===null||props.shoppingCarts.length<=0){
        return null;
    }else{
        const shoppingcarts=props.shoppingCarts.map((val,index)=>{
            return  <ShoppingCart shoppingCart={val} 
                                key={index} 
                                removed={()=>props.removed(index)} 
                                updateQuantity={(quantity)=>props.updateQuantity(index,quantity)}
                                index={index}
                                />
        })
        const sumPrice=props.shoppingCarts.map((val,index)=>{
            return  val.productPrice*val.quantity;
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        return(
            <div>
                <h3>Your Shopping Cart</h3>
                <div className="col-sm-12 col-md-10 col-md-offset-1">
    
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Total</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {shoppingcarts}
                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td>   </td>
                                <td><h3>Total</h3></td>
                                <td className="text-right"><h3><strong>{sumPrice}</strong></h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
        )
    }
    
};

export default shoppingCarts;