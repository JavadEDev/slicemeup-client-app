import { useContext } from "react";
import { CartContext } from "./contexts";

function Header() {
  const [cart] = useContext(CartContext);

  return (
    <nav className="header">
      <div className="header-content">
        <h1 className="header-title">
          Pizza Zero
          <span className="header-subtitle">Order Now</span>
        </h1>
        <div className="cart-icon">
          🛒
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
