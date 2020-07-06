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
      this.db = firebase.firestore();
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

    this.db
      .collection('products')
      // .where('price', '<', 999)
      .orderBy('price', 'asc')
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

      // products[index].qty += 1;

      // this.setState({
      //     products
      // });
      const docRef = this.db.collection('products').doc(products[index].id); 
      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log('Updated successfully');
        })
        .catch((err) => {
          console.log('Error in updating db: ', err);
        })

  }
  handleDecreaseQuantity = (product) => {
      console.log('Hey, decreasing the qty of the product', product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0){
          return;
      }
      // products[index].qty -= 1
      // this.setState({
      //     products
      // });
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log('Decreased Successfully');
        })
        .catch((err) => {
          console.log('Error in decreasing quantity:', err);
        })
  }
  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id); //products whose id is not equal to id passed
    const docRef = this.db.collection('products').doc(id);
    
    // this.setState({
    //     products: items
    // });

    docRef
      .delete()
      .then(() => {
        console.log('Deleted successfully');
      })
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
  // addProduct = () => {
  //   this.db
  //     .collection('products')
  //     .add({
  //       img: 'https://images.unsplash.com/photo-1551761429-8232f9f5955c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=909&q=80',
  //       price: 900,
  //       qty: 6,
  //       title: 'Washing Machine'
  //     })
  //     .then((docRef) => {
  //       console.log('Product has been added', docRef);
  //     })
  //     .catch((err) => {
  //       console.log("Error has occured in adding product:", err);
  //     })
  // }
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{ fontSize: 25, padding: 20 }}>Add a product</button> */}
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
