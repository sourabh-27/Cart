import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'
import * as firebase from 'firebase';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
          products: [], 
          loading: true
      }
  }
  componentDidMount (){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log('snapshot', snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log('data', doc.data())
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log('snapshot', snapshot);
        snapshot.docs.map((doc) => {
          console.log('data', doc.data())
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
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
    products.forEach(product => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      if(product.qty > 0){
        cartTotal += (product.qty * product.price);
      }
      return '';
    });
    return cartTotal;
  }
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1> Loading Products...</h1>}
        <div style={{fontSize: 25, padding: 10}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
