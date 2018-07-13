import React,{Component} from 'react';
import Aux from '../../hoc/Auxxx/Auxxx';
import Products from '../../component/products/products';
import ShoppingCarts from '../../component/shoppingcarts/shoppingcarts';

class ShoppingCartBuilder extends Component{

    state={
        products:[
        {
            productName:'Banana',
            productCategory:'Fruit',
            productPrice:10000,
            description:'Some Description',
            imageLink:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
        },
        {
            productName:'Potato',
            productCategory:'Vegetables',
            productPrice:15000,
            description:'Some Description',
            imageLink: 'https://c1.staticflickr.com/3/2752/4215093413_27a023f610_z.jpg?zz=1'
        },
        {
            productName:'Meat',
            productCategory:'Food',
            productPrice:50000,
            description:'Some Description',
            imageLink:'https://cdn.pixabay.com/photo/2018/04/09/08/43/meat-3303486_960_720.jpg'
        },
        {
            productName:'Bread',
            productCategory:'Food',
            productPrice:5000,
            description:'Some Description',
            imageLink:'https://c1.staticflickr.com/3/2505/4126611734_993d897939_z.jpg?zz=1'
        },
    ],
      shoppingCarts:[

      ]
    }

    addShoppingCart=(product)=>{
        const shoppingCartAdd={
            productName:product.productName,
            quantity:1,
            productPrice:product.productPrice,
            imageLink:product.imageLink
        }
        const shoppingCarts=[...this.state.shoppingCarts];
        shoppingCarts.push(shoppingCartAdd);
        this.setState({shoppingCarts:shoppingCarts});
    }

    removeShoppingCart=(index)=>{
        const shoppingCarts=[...this.state.shoppingCarts];
        shoppingCarts.splice(index,1);
        this.setState({shoppingCarts:shoppingCarts});
    }

    updateQuantity=(index,quantity)=>{
        const shoppingCarts=[...this.state.shoppingCarts];
        if(quantity<=0){
            this.removeShoppingCart(index);
        }else{
            shoppingCarts[index].quantity=quantity;
            this.setState({shoppingCarts:shoppingCarts});
        }
       
    }
    render(){
        return(
            <Aux>
                <div className="row">
                    <Products products={this.state.products} clicked={(product)=>this.addShoppingCart(product)}/>
                </div>
                <div className="row">
                    <ShoppingCarts shoppingCarts={this.state.shoppingCarts} 
                    removed={(index)=>this.removeShoppingCart(index)}
                    updateQuantity={(index,quantity)=>this.updateQuantity(index,quantity)}
                    />
                </div>
            </Aux>
        );
    }
}

export default ShoppingCartBuilder