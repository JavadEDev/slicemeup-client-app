import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

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

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div>
      <h2 className="h2Title title">Create Order</h2>
      <form className="flex w-full flex-col justify-between">
        <div className="flex-1/2 pr-4 text-center">
          <div className="p-4">
            <label
              htmlFor="pizza-type"
              className="text-secondary mb-2 block text-[20px]"
            >
              Pizza Type
            </label>
            <select
              name="pizza-type"
              value={pizzaType}
              className="border-border mb-8 block w-full rounded border p-1 text-[16px]"
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1/2 pl-4 text-center">
          <div className="p-4">
            <label
              htmlFor="pizza-size"
              className="text-secondary mb-2 block text-[20px]"
            >
              Pizza Size
            </label>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative">
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  id="pizza-s"
                  name="pizza-size"
                  value="S"
                  onChange={(e) => setPizzaSize(e.target.value)}
                  className="peer"
                />
                <label htmlFor="pizza-s" className="pizzaSize">
                  Small
                </label>
              </div>
              <div className="relative">
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  id="pizza-m"
                  name="pizza-size"
                  value="M"
                  onChange={(e) => setPizzaSize(e.target.value)}
                  className="peer"
                />
                <label htmlFor="pizza-m" className="pizzaSize">
                  Medium
                </label>
              </div>
              <div className="relative">
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  id="pizza-l"
                  name="pizza-size"
                  value="L"
                  onChange={(e) => setPizzaSize(e.target.value)}
                  className="peer"
                />
                <label htmlFor="pizza-l" className="pizzaSize">
                  Large
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="btn" type="submit">
          Add to Cart
        </button>
      </form>
      <div>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="loading-pizza"></div>
            <div className="loading-text">Loading pizza...</div>
          </div>
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
  );
}

export default Order;
