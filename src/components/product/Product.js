// importing dependancies
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// importing components and stylesheets
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Product.css';

const Product = () => {
    const [product, setProduct] = useState([]);

    // variables
    const baseAPIURL = 'https://fakestoreapi.com/products';
    let id = useParams(); // NEED TO GET THIS WORKING!

    // get Product specific details from api
    useEffect(() => {
        axios.get(`${baseAPIURL}/1`)
        .then ((res) => {
            const response = res.data;
            setProduct(response);
        })

        document.title=`${product.title}`;
    })

    return (
        <div>
            <Header />
            <h1>{product.title}</h1>
            <Footer />
        </div>
    )
}

export default Product
