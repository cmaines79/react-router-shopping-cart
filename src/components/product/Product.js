// importing dependancies
import { useState, useEffect } from 'react';

// importing components and stylesheets
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Product.css';

const Product = () => {
    const [product, setProduct] = useState([]);

    // get Product specific details from api
    useEffect(() => {
        document.title=`${product.title}`;
    },[])

    return (
        <div>
            <Header />
            <h1>{product.title}</h1>
            <Footer />
        </div>
    )
}

export default Product
