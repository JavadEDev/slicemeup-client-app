import React, { useState, useEffect, useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Pizza from "../components/Pizza";
import Loading from "../components/loading";
import { intl } from "../components/utils";
import Cart from "../components/Cart";
import { CartContext } from "../components/contexts";
import { apiUrl, fetchConfig } from "../api/apiUrl";
import { apiImg } from "../api/apiImg";
export const Route = createLazyFileRoute("/order")({
  component: Order,
});

function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  async function checkout() {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: cart }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Order failed:", errorData || response.statusText);
        throw new Error(`Order failed: ${response.status}`);
      }

      const result = await response.json();
      setCheckoutSuccess(true);
      return result;
    } catch (error) {
      console.error("Checkout error:", error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    const pizzasRes = await fetch(`${apiUrl}/api/pizzas`, fetchConfig);
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  function addToCart() {
    setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <>
      <div className="order-container">
        <div className="order-form">
          <h2 className="h2Title title">
            <title>Create Order</title>
          </h2>
          <form className="flex flex-col gap-8" action={addToCart}>
            <div className="form-section">
              <label htmlFor="pizza-type" className="form-label">
                Choose Your Pizza
              </label>
              <select
                name="pizza-type"
                value={pizzaType}
                className="pizza-select"
                onChange={(e) => setPizzaType(e.target.value)}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-section">
              <label htmlFor="pizza-size" className="form-label">
                Select Your Size
              </label>
              <div className="size-container">
                {["S", "M", "L"].map((size) => (
                  <div key={size} className="relative">
                    <input
                      checked={pizzaSize === size}
                      type="radio"
                      id={`pizza-${size.toLowerCase()}`}
                      name="pizza-size"
                      value={size}
                      onChange={(e) => setPizzaSize(e.target.value)}
                      className="peer"
                    />
                    <label
                      htmlFor={`pizza-${size.toLowerCase()}`}
                      className="pizzaSize"
                    >
                      {size === "S"
                        ? "Small"
                        : size === "M"
                          ? "Medium"
                          : "Large"}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn" type="submit">
              Add to Cart
            </button>
          </form>
        </div>

        <div className="pizza-display">
          {loading ? (
            <Loading title="Orders" />
          ) : (
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={`${apiImg}${selectedPizza.image}`}
              price={price}
            />
          )}
        </div>
      </div>
      <div>
        {loading ? (
          <Loading title="Cart" />
        ) : (
          <Cart
            checkout={checkout}
            cart={cart}
            onRemoveItem={removeFromCart}
            checkoutSuccess={checkoutSuccess}
            setCheckoutSuccess={setCheckoutSuccess}
          />
        )}
      </div>
    </>
  );
}
