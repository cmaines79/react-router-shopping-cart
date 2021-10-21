// importing dependancies
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { MdFiberNew } from 'react-icons/md'
import axios from 'axios';

// importing components and stylesheets
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Products.css';

const Products = () => {

// TODOs
    // update the location of the loading spinner
    // include filters!
    // add to cart button

// variables
const baseAPIURL = 'https://fakestoreapi.com/';
  
// states
const [products, setProducts] = useState([]);

// supporting functions
const numberToFixed = (a) => {
    return(a.toFixed(2));
}

const isNewProduct = (i) => {
    // And a few new items
    if (i === 0 || i === 4 || i === 7 || i === 10 || i === 13 || i === 19) {
        return true;
    }
}

const isFeaturedProduct = (i) => {
    // also want to highlight a few featured items
    if (i === 2 || i === 5 || i === 8 || i === 11 || i === 15 || i === 18) {
        return  true;
    }
}

const organizeProducts = (a) => {
    let products = [];

    // pushing api json into a new object to format the price and add isFeatured and isNew
    for(let i = 0; i < a.length; i++) {
        let newProduct = {
            "id": a[i].id,
            "title": a[i].title,
            "price": numberToFixed(a[i].price), // 
            "description": a[i].description,
            "category": a[i].category,
            "image": a[i].image,
            "rating": {"rate": a[i].rating.rate, "count": a[i].rating.count},
            "isFeatured": isFeaturedProduct(i),
            "isNew": isNewProduct(i),
        };
        products.push(newProduct);
    }

    setProducts(products);
}

useEffect(() => {
    // calling fakestoreapi
    axios.get(`${baseAPIURL}products`)
    .then ((res) => {           
        const response = res.data;
        organizeProducts(response);
    })

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
                            <button className="cart-btn">Add to Cart</button>
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
