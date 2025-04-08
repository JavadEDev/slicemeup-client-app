import usePizzaOfTheDay from "./usePizzaOfTheDay";
import Loading from "./loading";
import { intl } from "./utils";

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    <Loading />;
  }
  return (
    <div>
      <h2>Pizza of the day</h2>
      <div>
        <div>
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p>From: {intl.format(pizzaOfTheDay.sizes.S)}</p>
        </div>
        <img src={pizzaOfTheDay.image} alt={pizzaOfTheDay.name} />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
