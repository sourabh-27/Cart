import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {
    constructor(){
      super();
      this.state = {
          products: [
              {
                  price: 10000,
                  title: 'Telephone',
                  qty: 10,
                  img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                  id: 1 
              },
              {
                  price: 60000,
                  title: 'Laptop',
                  qty: 4,
                  img: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                  id: 2
              },
              {
                  price: 999,
                  title: 'Calculator',
                  qty: 2,
                  img: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
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
  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id); //products whose id is not equal to id passed
    
    this.setState({
        products: items
    });
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    console.log("The count is:", count);
    products.forEach(product => {
      count += product.qty;
    });
    console.log("The count is2:", count);
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal += (product.qty * product.price);
    });
    return cartTotal;
  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        <div style={{fontSize: 25, padding: 10}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
