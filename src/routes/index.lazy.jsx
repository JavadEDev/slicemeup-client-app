import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">
          <title>SliceMeUp</title>SliceMeUp
        </h1>
        <p className="home-subtitle"> Where Every Slice Tells a Story 🍕</p>
      </div>
      <div className="home-actions">
        <Link to="/order" className="home-action-btn primary">
          Order Now
        </Link>
        <Link to="/past" className="home-action-btn secondary">
          Past Orders
        </Link>
        <Link to="/contact" className="home-action-btn contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
