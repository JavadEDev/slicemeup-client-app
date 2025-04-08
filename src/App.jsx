import Loading from "./components/loading";
import Order from "./Order";
import { Suspense } from "react";
import PizzaOfTheDay from "./components/pizzaOfTheDay";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Pizza Zero - Order Now</h1>
      </header>
      <main className="app-content">
        <Suspense fallback={<Loading />}>
          <section className="app-section" style={{ "--section-index": 0 }}>
            <Order />
          </section>
          <section className="app-section" style={{ "--section-index": 1 }}>
            <PizzaOfTheDay />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
