import React from "react";

function Header() {
  return (
    <nav className="header">
      <div className="header-content">
        <h1 className="header-title">
          Pizza Zero
          <span className="header-subtitle">Order Now</span>
        </h1>
        <div className="cart-icon">
          🛒
          <span className="cart-count">5</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
