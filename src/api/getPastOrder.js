import { apiUrl, fetchConfig } from "./apiUrl";
export default async function getPastOrder(order) {
  const response = await fetch(
    `${apiUrl}/api/past-order/${order}`,
    fetchConfig,
  );
  const data = await response.json();
  return data;
}
