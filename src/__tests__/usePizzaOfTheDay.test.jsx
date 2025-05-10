import { expect, test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../components/usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "mexicana",
  name: "The Mexicana Pizza",
  category: "Veggie",
  description:
    "Tomatoes, Red Peppers, Jalapeno Peppers, Red Onions, Cilantro, Corn, Chipotle Sauce, Garlic",
  Image: "/public/pizzas/mexicana.webp",
  size: { S: 12, M: 16, L: 20.25 },
};

// function getPizzaOfTheDay() {
//   let pizza;
//   function TestComponent() {
//     pizza = usePizzaOfTheDay();
//     return null;
//   }

//   render(<TestComponent />);

//   return pizza;
// }

test("gives null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  //   const pizza = getPizzaOfTheDay();
  //   expect(pizza).toBeNull();
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});
