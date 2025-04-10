import Loading from "./components/loading";
import Order from "./Order";
import { Suspense } from "react";
import PizzaOfTheDay from "./components/pizzaOfTheDay";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
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
