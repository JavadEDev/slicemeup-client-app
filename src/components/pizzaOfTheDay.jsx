import { usePizzaOfTheDay } from "./usePizzaOfTheDay";
import Loading from "./loading";
import { intl } from "./utils";

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <Loading />;
  }
  return (
    <div className="pizza-of-day-container">
      <h2 className="pizza-of-day-title">Pizza of the day</h2>
      <div className="pizza-of-day-content">
        <div className="pizza-of-day-info">
          <h3 className="pizza-of-day-name">{pizzaOfTheDay.name}</h3>
          <p className="pizza-of-day-description">
            {pizzaOfTheDay.description}
          </p>
          <p className="pizza-of-day-price">
            From: {intl.format(pizzaOfTheDay.sizes.S)}
          </p>
        </div>
        <div className="pizza-of-day-image-container">
          <img
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
            className="pizza-of-day-image"
          />
          <div className="pizza-of-day-badge">Special Offer</div>
        </div>
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
