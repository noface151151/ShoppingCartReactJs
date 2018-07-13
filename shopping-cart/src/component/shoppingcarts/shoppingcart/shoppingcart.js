import React from 'react';

const shoppingCart=(props)=>{

  const  handleClick=(event)=>
    {
      //  console.log(event.target.value)
        props.updateQuantity(event.target.value);
    }
    return (
    <tr>
    <td className=" col-md-6">
        <div className="media">
            <a className="thumbnail pull-left" href="/"> 
            <img style={{'maxWidth': '100px','maxHeight': '100px'}} className="media-object" src={props.shoppingCart.imageLink} alt={props.shoppingCart.productName}/>
            </a>
            <div className="media-body">
                <h4 className="media-heading"><a href="/">{props.shoppingCart.productName}</a></h4>
            </div>
        </div>

      </td>
        <td className="col-sm-1 col-md-1" styles={{'text-align': 'center'}}>
          <input type="number" className="form-control" id="exampleInputEmail1" defaultValue={props.shoppingCart.quantity} onChange={handleClick}/>
        </td>
        <td className="col-sm-1 col-md-1 text-center"><strong>{props.shoppingCart.productPrice}</strong></td>
        <td className="col-sm-1 col-md-1 text-center"><strong>{props.shoppingCart.productPrice*props.shoppingCart.quantity}</strong></td>
        <td className="col-sm-1 col-md-1">
        <button onClick={props.removed}  type="button" className="btn btn-danger">
            <span className="glyphicon glyphicon-remove"></span> Remove
        </button>
      </td>

    </tr>
)
}

export default shoppingCart;