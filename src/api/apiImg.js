const getApiImgUrl = () => {
  if (import.meta.env.PROD) {
    return "https://pizza-server-iota.vercel.app/public";
  }
  return ""; // In development, use relative URLs which will be handled by the proxy
};

export const apiImg = getApiImgUrl();

export const fetchConfig = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};
