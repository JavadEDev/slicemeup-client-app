import { Suspense, useState } from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PizzaOfTheDay from "../components/pizzaOfTheDay";
import Header from "../components/Header";
import { CartContext } from "../components/contexts";
import Loading from "../components/Loading";

export const Root = () => {
  const cartHook = useState([]);
  return (
    <>
      <CartContext value={cartHook}>
        <div className="app-container">
          <Header />
          <main className="app-content">
            <Suspense fallback={<Loading />}>
              <section className="app-section" style={{ "--section-index": 0 }}>
                <Outlet />
              </section>
              <section className="app-section" style={{ "--section-index": 2 }}>
                <PizzaOfTheDay />
              </section>
            </Suspense>
          </main>
        </div>
      </CartContext>
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
