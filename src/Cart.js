import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 10000,
                    title: 'Phone',
                    qty: 10,
                    img: '',
                    id: 1 
                },
                {
                    price: 60000,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Calculator',
                    qty: 2,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        console.log('Hey, increasing the qty of the producty', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products
        });
    }
    handleDecreaseQuantity = (product) => {
        console.log('Hey, decreasing the qty of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1
        this.setState({
            products
        });
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product}  
                            key={ product.id }
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cart;