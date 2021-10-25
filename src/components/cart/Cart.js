// importing stylesheets and assests
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cartItems, cartCount, updateCartQuantity, removeItemFromCart }) => {
    // TODOs

    // states
    const [orderTotal, setOrderTotal] = useState(0);

    // variables
    const isProductsInCart = cartItems.length > 0;
    

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
        let extendedPriceEl = e.nextElementSibling.children[1];
        let amount = 0;

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
        console.log(targetPEl);

        if(parseInt(targetPEl.innerText) >= 1) {
            // get the value of the element and add one
            let targetPElValue = parseInt(targetPEl.innerText) - 1;

            // update the element
            targetPEl.innerText = targetPElValue;

            // call the function
            cartQuantityChangeHandler(e, targetPElValue);

            // update line item total
            updateLineTotal(e);
        } // else remove item
    } 

    const removeItem = (e)  => {
        removeItemFromCart(e);
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

    useEffect(() => {
        updateOrderTotal();
    })

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
                                <div><h3>{item.title}</h3></div>
                                <div className="cart-item-pricing">
                                    <p>Each: ${item.price}</p>
                                    <div id={item.id} className="item-details">
                                        <button className="increment" onClick={(e) => decreaseQuantity(e.target.parentElement)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button className="increment" onClick={(e) => increaseQuantity(e.target.parentElement)}>+</button>
                                    </div>
                                    <div id="line-total">
                                        <p>Total: $</p> <p>{item.extendedPrice}</p>
                                    </div>
                                </div>
                                <div className="button-control">
                                    <button id="remove-item" onClick={(e) => removeItem(e.target.parentElement.previousSibling.children[1].id)}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="order-total-div">
                    {isProductsInCart ? (
                    <h2 id="order-total">Order Total: ${orderTotal}</h2>
                    ) : (
                        <h2>Your cart is empty</h2>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
