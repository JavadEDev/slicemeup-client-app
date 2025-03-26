import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }
  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div>
      <h2>Create Order</h2>
      <form className="flex w-full justify-between">
        <div className="border-border w-1/2 border-r pr-4 text-center">
          <div className="p-4">
            <label className="text-secondary mb-2 block text-[20px]">
              Pizza Type
            </label>
            <select className="border-border mb-8 block w-full rounded border p-1 text-[16px]">
              <option>Small</option>
              <option>Large</option>
            </select>
          </div>
        </div>

        <div className="w-1/2 pl-4 text-center">
          <div className="p-4">
            <label className="text-secondary mb-2 block text-[20px]">
              Toppings
            </label>

            <div className="flex flex-wrap justify-center gap-4">
              <input
                type="radio"
                id="pepperoni"
                name="topping"
                value="pepperoni"
                className="hidden"
              />
              <label className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-gray-300 text-gray-500">
                Pepperoni
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Order;
