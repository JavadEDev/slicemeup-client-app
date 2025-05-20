import Modal from "../Modal";
import Loading from "./loading";
import { intl } from "./utils";

const OrderDetailsModal = ({ orderId, orderData, isLoading, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 className="modal-title">Order Details 🍕</h2>
        <p className="font-pacifico text-primary mb-4 text-center">
          Order ID: {orderId}
        </p>
        {!isLoading ? (
          <div className="overflow-x-auto">
            <table className="modal-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}-${pizza.size}`}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td className="font-pacifico">{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{intl.format(pizza.price)}</td>
                    <td className="font-pacifico text-primary">
                      {intl.format(pizza.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Loading title="Order Details 🍕" />
        )}
        <div className="mt-6 flex justify-center">
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
