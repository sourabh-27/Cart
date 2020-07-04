import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () =>{
        console.log(this.state);
        //setState form 1 using object
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {});

        //setState form 2 => function and callback : do this when prevState is required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }
    render(){
        const {price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>{price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Button to add substract and delete */}
                        <img 
                            alt="Increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;