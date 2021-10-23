// importing stylesheets and assests
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import './Cart.css';

const Cart = ({ cartItems, cartCount }) => {
    // TODOs
        // empty/delete cart
        // clear and item
        // increase or decrease quantity
        // play animation or show an image or show text on empty cart
        // total cart in items or amount or both?
        // need a function to total the cart by line
        // need a function (useEffect?) to total the entire cart

    console.log(cartItems);

    useEffect(() => {
        // keeping cart count accurate
        let cartEl = document.getElementById('shopping-cart');
        cartEl.innerText = `Cart(${cartCount})`; 
    })

    return (
        <div>
            <Header />
            <div id="cart-wrapper">
                {cartItems.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>
                                <img src={item.image} alt="item.title" />
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div>
                                    {item.price}
                                    {item.quantity}
                                    {/* extended price */} 
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <Footer />
        </div>
    )
}

export default Cart
