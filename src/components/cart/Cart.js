// importing stylesheets and assests
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cartItems, cartCount, updateCartQuantity }) => {
    // TODOs
        // empty/delete cart 
        // clear an item  
        // play animation or show an image or show text on empty cart
        // need a function (useEffect?) to total the entire cart

    // states
    const [orderTotal, setOrderTotal] = useState(0);


    // supporting functions
    const cartQuantityChangeHandler = (e, value) => {
        updateCartQuantity(e.id, value);
    }

    const updateOrderTotal = () => {
        let total = 0.00;

        cartItems.forEach((item) => {
            total = parseFloat(item.extendedPrice) + total;
        })

        // update the element
        setOrderTotal(total.toFixed(2));
    }

    const updateLineTotal = (e) => {
        let extendedPriceEl = e.nextElementSibling.nextElementSibling;
        let amount;

        for(let i = 0; i < cartItems.length; i++){
            if(cartItems[i].id == e.id){
                amount = cartItems[i].extendedPrice;
            }
        }
        // update the price in the DOM element
        extendedPriceEl.innerText = amount;

        // update the order total
        updateOrderTotal();
    }

    const increaseQuantity = (e) => {
        // get the right element
        let targetPEl = document.getElementById(e.id).children[1];

        // get the value of the element and add one
        let targetPElValue = parseInt(targetPEl.innerText) + 1;

        // update the element
        targetPEl.innerText = targetPElValue;

        // call the function
        cartQuantityChangeHandler(e, targetPElValue);

        // update line item total
        updateLineTotal(e);
    }

    const decreaseQuantity = (e) => {
        // get the right element
        let targetPEl = document.getElementById(e.id).children[1];

        // get the value of the element and add one
        let targetPElValue = parseInt(targetPEl.innerText) - 1;

        // update the element
        targetPEl.innerText = targetPElValue;

        // call the function
        cartQuantityChangeHandler(e, targetPElValue);

        // update line item total
        updateLineTotal(e);
    } 

    useEffect(() => {
        // keeping cart count accurate
        let cartEl = document.getElementById('shopping-cart');
        cartEl.innerText = `Cart(${cartCount})`; 

        // updating the title of the page
        document.title = "High Peaks Supply | Cart";

        // seeting initial value for the cart total
        updateOrderTotal();
        
    }, [])

     return (
        <div>
            <Header />
            <div id="cart-wrapper">
                {cartItems.map((item) => {
                    return (
                        <div className="cart-item" key={item.id}>
                            <div>
                                <img src={item.image} alt="item.title" />
                            </div>
                            <div className="cart-item-details">
                                <div><h5>{item.title}</h5></div>
                                <div className="cart-item-pricing">
                                    <p>Each: ${item.price}</p>
                                    <div id={item.id}>
                                        <button onClick={(e) => decreaseQuantity(e.target.parentElement)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={(e) => increaseQuantity(e.target.parentElement)}>+</button>
                                    </div>
                                    <p>Total: $</p> <p>{item.extendedPrice}</p>
                                </div>
                                <div>
                                    <button>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <h5 id="order-total">$ {orderTotal}</h5>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
