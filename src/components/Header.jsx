import { useContext, useState } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";
import Logo from "/pizza.svg";
import Modal from "../Modal";
import Cart from "./Cart";
import { apiUrl } from "../api/apiUrl";

function Header() {
  const [cart, setCart] = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  async function checkout() {
    await fetch(`${apiUrl}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    setCart([]);
    setIsCartOpen(false);
  }

  return (
    <nav className="header">
      <div className="header-content">
        <Link to="/">
          <h1 className="header-title">
            <img src={Logo} alt="Slice Me Up logo" />
          </h1>
        </Link>
        <div
          className="cart-icon"
          onClick={() => setIsCartOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsCartOpen(true);
            }
          }}
        >
          🛒
          <span data-testid="cart-number" className="cart-count">
            {cart.length}
          </span>
        </div>
      </div>

      {isCartOpen && (
        <Modal>
          <div className="cartModal">
            <div className="cartModal-content">
              <Cart
                cart={cart}
                checkout={checkout}
                onRemoveItem={(index) => {
                  const newCart = [...cart];
                  newCart.splice(index, 1);
                  setCart(newCart);
                }}
              />
              <button
                className="cartModal-close-btn"
                onClick={() => setIsCartOpen(false)}
              >
                Close Cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </nav>
  );
}

export default Header;
