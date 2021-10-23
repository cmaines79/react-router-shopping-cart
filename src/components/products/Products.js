// importing dependancies
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { MdFiberNew } from 'react-icons/md'

// importing components and stylesheets
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Products.css';

const Products = ({ products, updateCart, cartCount }) => {

// TODOs
    // include filters!
    
const pushToCart = (id) => {
    let a = products.filter((product) => product.id == id);

    let newCartItem = {
        "id": a[0].id,
        "title": a[0].title,
        "price": a[0].price, 
        "description": a[0].description,
        "category": a[0].category,
        "image": a[0].image,
        "rating": {"rate": a[0].rating.rate, "count": a[0].rating.count},
        "isFeatured": a[0].isFeaturedProduct,
        "isNew": a[0].isNewProduct,
    }

    updateCart(newCartItem);
}

useEffect(() => {
    // keeping the cart item counter accurate
    let cartEl = document.getElementById('shopping-cart');
    cartEl.innerText = `Cart(${cartCount})`; 

     // udpating the title of the webpage
    document.title = "High Peaks Supply | Home"
}, [])

return (
    <div className="products">
        <Header />

        {/* turnary call for content to be loaded */}
        {/* if products are null, then show the loading spinner */}
        {products ? (
            <div className="product-listing container">
                {products.map ((product) => {
                    return (
                        <div className="product-item" key={product.id}>
                            {(product.isNew === true) ? <div className="new-product"> <MdFiberNew 
                                color="#5bccf6"
                                size="2rem"
                            /> </div>: <div className="new-product"></div>}
                            <div className="image-wrapper">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <h5 className="product-title">{product.title}</h5>
                            <div className="item-price">
                                <h5>${product.price}</h5>
                                <h5>{`Rating: ${product.rating.rate}`}</h5>
                            </div>
                            <div className="item-description">
                                <p>{product.description}</p>
                            </div>
                            <button id={product.id} className="cart-btn" onClick={(e) => pushToCart(e.target.id)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        ) : (
            <CircularProgress />
        )}  
        <Footer />       
    </div>
    );
};


export default Products
