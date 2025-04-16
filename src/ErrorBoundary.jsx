import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught som stupid error!", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-content">
            <div className="error-pizza">🍕</div>
            <h2 className="error-title">Oops! Our pizza got stuck...</h2>
            <p className="error-message">
              Looks like we had a little kitchen accident! Don't worry, our
              pizza chefs are on it.
            </p>
            <Link to="/" className="error-button">
              Return to Home Kitchen 🏠
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
