import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content-lg">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
        <li>
          <button type="button" className="logout-desktop-btn">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div className="nav-content-sm">
      <div className="logo-logout-container">
        <img
          className="website-logo-small"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>
      <ul className="nav-items-container">
        <Link to="/" className="nav-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-image"
            />
          </li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-image"
            />
          </li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-image"
            />
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)
export default Header
