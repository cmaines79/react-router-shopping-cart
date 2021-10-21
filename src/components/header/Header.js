// importing stylesheets and assests
import logo from '../../img/logo.svg';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
    // TO-DOs
        // update and include search bar
  
    return (
        <header>
            <div className="header-wrapper container">
                <div className="search"></div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink exact activeClassName="active-link" className="links"  to="/">Home</NavLink></li>
                        <li><NavLink exact activeClassName="active-link" className="links"  to="/products">Products</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

// "exact activeClassName=" is used for styling the active link

export default Header
