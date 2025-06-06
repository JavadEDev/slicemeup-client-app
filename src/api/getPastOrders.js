import { apiUrl, fetchConfig } from "./apiUrl";
export default async function getPastOrders(page) {
  const response = await fetch(
    `${apiUrl}/api/past-orders?page=${page}`,
    fetchConfig,
  );
  const data = await response.json();
  return data;
}
