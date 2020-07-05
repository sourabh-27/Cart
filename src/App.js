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
      </div>
    );
  }
}

export default App;
