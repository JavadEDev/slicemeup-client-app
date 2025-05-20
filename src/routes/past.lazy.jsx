import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import getPastOrders from "../api/getPastOrders";
import getPastOrder from "../api/getPastOrder";
import Loading from "../components/loading";
import OrderDetailsModal from "../components/OrderDetailsModal";
import ErrorBoundary from "../ErrorBoundary";

export const Route = createLazyFileRoute("/past")({
  component: ErrorBoundaryWrappedPastOrderRoute,
});

function ErrorBoundaryWrappedPastOrderRoute(props) {
  return (
    <ErrorBoundary>
      <PastOrderRoute {...props} />
    </ErrorBoundary>
  );
}

function PastOrderRoute() {
  const [page, setPage] = useState(1);
  const [focusedOrder, setFocusedOrder] = useState(null);
  const { isLoading, data } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 1000 * 30,
  });

  const { isLoading: isLoadingPastOrder, data: pastOrderData } = useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 1000 * 24 * 60 * 60,
    enabled: !!focusedOrder,
  });

  if (isLoading) {
    return (
      <div className="past-orders-container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="past-orders-container">
      <h2 className="past-orders-title">Your Pizza History 🍕</h2>
      <title>Your Pizza History 🍕</title>
      <div className="past-orders-table-container">
        <table className="past-orders-table">
          <thead>
            <tr className="past-orders-header">
              <th className="past-orders-th">Order ID</th>
              <th className="past-orders-th">Date</th>
              <th className="past-orders-th">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.order_id} className="past-orders-row">
                <td className="past-orders-td">
                  <button
                    className="past-orders-btn-tb"
                    type="button"
                    onClick={() => setFocusedOrder(order.order_id)}
                  >
                    {order.order_id}
                  </button>
                </td>
                <td className="past-orders-td">{order.date}</td>
                <td className="past-orders-td">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="past-orders-pagination">
        <button
          className="past-orders-btn"
          disabled={page <= 1}
          type="button"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span className="past-orders-page">Page {page}</span>
        <button
          className="past-orders-btn"
          disabled={data.length < 10}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      {focusedOrder ? (
        <OrderDetailsModal
          orderId={focusedOrder}
          orderData={pastOrderData}
          isLoading={isLoadingPastOrder}
          onClose={() => setFocusedOrder(null)}
        />
      ) : null}
    </div>
  );
}
