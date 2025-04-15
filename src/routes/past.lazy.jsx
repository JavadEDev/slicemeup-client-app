import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import getPastOrders from "../api/getPastOrders";
import Loading from "../components/Loading";

export const Route = createLazyFileRoute("/past")({
  component: PastOrderRoute,
});

function PastOrderRoute() {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 1000 * 30,
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
                <td className="past-orders-td">{order.order_id}</td>
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
    </div>
  );
}
