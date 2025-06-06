const getApiUrl = () => {
  if (import.meta.env.PROD) {
    return "https://pizza-server-iota.vercel.app";
  }
  return ""; // In development, use relative URLs which will be handled by the proxy
};

export const apiUrl = getApiUrl();

export const fetchConfig = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};
