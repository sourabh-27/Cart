import React from 'react';

class CartItem extends React.Component{
    render(){
        const {price, title, qty} = this.props.product;
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
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"
                            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
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