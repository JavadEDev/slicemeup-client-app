import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";
import ErrorBoundary from "../ErrorBoundary";
import ContactInput from "../components/ContactInput";

export const Route = createLazyFileRoute("/contact")({
  component: ErrorBoundaryWrappedContactRoute,
});

function ErrorBoundaryWrappedContactRoute(props) {
  return (
    <ErrorBoundary>
      <ContactRoute {...props} />
    </ErrorBoundary>
  );
}

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch 📞</h2>
      <title>Get in Touch 📞</title>
      <p className="contact-subtitle">We'd love to hear from you!</p>

      {mutation.isSuccess ? (
        <div className="contact-success">
          <div className="success-icon">🎉</div>
          <h3 className="success-title">Message Sent Successfully!</h3>
          <p className="success-message">
            We'll get back to you soon with a slice of happiness!
          </p>
        </div>
      ) : (
        <form action={mutation.mutate} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <ContactInput
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <ContactInput
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-textarea"
              placeholder="What's on your mind?"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
            <span className="submit-icon">🍕</span>
          </button>
        </form>
      )}
    </div>
  );
}
