import { use } from "react";

const usePizzaOfTheDay = () => {
  const fetchPizzaOfTheDay = async () => {
    const response = await fetch("/api/pizza-of-the-day");
    return response.json();
  };

  return use(fetchPizzaOfTheDay());
};

export default usePizzaOfTheDay;
