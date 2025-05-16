import { useContext } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";

function Header() {
  const [cart] = useContext(CartContext);

  return (
    <nav className="header">
      <div className="header-content">
        <Link to="/">
          <h1 className="header-title">SliceMeUp Pizza</h1>
        </Link>
        <div className="cart-icon">
          🛒
          <span data-testid="cart-number" className="cart-count">
            {cart.length}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
