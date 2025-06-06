import { useState, useEffect, useDebugValue } from "react";
import Loading from "./loading";
import { apiUrl, fetchConfig } from "../api/apiUrl";
export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay ? (
      `${pizzaOfTheDay.id} - ${pizzaOfTheDay.name}`
    ) : (
      <Loading title="Pizza of the day" />
    ),
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch(
        `${apiUrl}/api/pizza-of-the-day`,
        fetchConfig,
      );
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
