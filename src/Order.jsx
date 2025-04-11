import React, { useState, useEffect, useContext } from "react";
import Pizza from "./components/Pizza";
import Loading from "./components/loading";
import { intl } from "./components/utils";
import Cart from "./components/Cart";
import { CartContext } from "./components/contexts";

function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  let price, selectedPizza;

  async function checkout() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    setCart([]);
    setLoading(false);
  }

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    const pizzasRes = await fetch("/api/pizzas");
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
  };

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <>
      <div className="order-container">
        <div className="order-form">
          <h2 className="h2Title title">Create Order</h2>
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
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
            <Loading />
          ) : (
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
              price={price}
            />
          )}
        </div>
      </div>
      <div>
        {loading ? <Loading /> : <Cart checkout={checkout} cart={cart} />}
      </div>
    </>
  );
}

export default Order;
