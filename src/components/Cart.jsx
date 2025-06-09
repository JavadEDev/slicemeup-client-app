import { intl } from "./utils";

function Cart({
  cart,
  checkout,
  onRemoveItem,
  checkoutSuccess,
  setCheckoutSuccess,
}) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  const handleCheckout = async () => {
    await checkout();
    setTimeout(() => {
      setCheckoutSuccess(false);
      // Clear all items from cart
      cart.forEach((_, index) => onRemoveItem(0));
    }, 5000);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Pizza Cart 🛒</h2>
      {checkoutSuccess ? (
        <div className="cart-success">
          <p>🎉 Order placed successfully! Thank you for your order! 🍕</p>
          <p>Your delicious pizzas are being prepared! 🚀</p>
        </div>
      ) : cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty! Time to add some delicious pizzas! 🍕</p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-info">
                  <span className="pizza-size">{item.size}</span>
                  <span className="pizza-name">{item.pizza.name}</span>
                </div>
                <div className="cart-item-actions">
                  <span className="pizza-price">{item.price}</span>
                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(index)}
                    aria-label="Remove item"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>
              Total: <span>{intl.format(total)}</span>
            </p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
