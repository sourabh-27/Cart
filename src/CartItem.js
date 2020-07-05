import React from 'react';

const CartItem = (props) => {
    const {price, title, qty, id} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img src={product.img} style={styles.image}/>
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
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992683.svg"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
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