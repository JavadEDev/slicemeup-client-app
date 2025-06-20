import { apiUrl, fetchConfig } from "./apiUrl";
export default async function postContact(name, email, message) {
  const response = await fetch(`${apiUrl}/api/contact`, {
    ...fetchConfig,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok, Send help.");
  }

  return response.json();
}
