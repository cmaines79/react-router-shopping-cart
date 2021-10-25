// importing dependancies
import { useHistory } from 'react-router-dom';

// importing components and stylesheets
import './Products.css';

const Products = ({ products, updateCart }) => {

// TODOs
    // update the location of the loading spinner
    // include filters!
    // add to cart button

const history = useHistory();

const pushToCart = (id) => {
    let newCartIem = products.filter((product) => product.id == id);
    updateCart(newCartIem);
}

return (
    <div className="products home-main">
        <h1 id="welcome">Welcome to High Peaks Supply.  Take a look at our best sellers...</h1>
        <div className="product-listing container">
            {products.map ((product) => {
                return (
                    <div className="product-item" key={product.id}>
                        <div className="new-product"></div>
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
                        <button id={product.id} onClick={(e) => pushToCart(e.target.id)} className="cart-btn">Add to Cart</button>
                    </div>
                )
            })}
        </div>  
        <div className="shop-now container">
            <button onClick={() => history.push('/Products')}>Shop Now</button>
        </div>     
    </div>
    );
};


export default Products
