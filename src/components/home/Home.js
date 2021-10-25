// importing dependancies
import { useState, useEffect } from 'react';


// importing sytlesheets and components
import Header from '../header/Header';
import Products from '../products/_products'
import Footer from '../footer/Footer';
import './Home.css';

function App({ products, updateCart, cartCount }) {
  // states
  const [featuredProducts, setFeaturedProducts] = useState([
    {"id":3,"title":"Mens Cotton Jacket","price":"55.99","description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500},"isFeatured":true},{"id":6,"title":"Solid Gold Petite Micropave ","price":"168.00","description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70},"isFeatured":true},{"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":"29.95","description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg","rating":{"rate":2.9,"count":340},"isFeatured":true},{"id":19,"title":"Opna Women's Short Sleeve Moisture","price":"7.95","description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg","rating":{"rate":4.5,"count":146},"isFeatured":true}
  ]);
  
  useEffect(() => {
    // keeping the cart count accurate
      let cartEl = document.getElementById('shopping-cart');
      cartEl.innerText = `Cart(${cartCount})`; 
      
      // udpating the title of the webpage
      document.title = "High Peaks Supply | Home"
  }, [])

  return (
    <div className="App">
      <Header />
      <Products products={featuredProducts} updateCart={updateCart} />
      <Footer />
    </div>
  );
}

export default App;
