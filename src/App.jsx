import Loading from "./components/loading";
import Order from "./Order";
import { Suspense } from "react";

function App() {
  return (
    <>
      <h1 className="pt-1 pl-2 text-xl font-bold underline">
        Pizza Zero - Order Now
      </h1>
      <Suspense fallback={<Loading />}>
        <Order />
      </Suspense>
    </>
  );
}

export default App;
