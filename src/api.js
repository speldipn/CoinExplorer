import axios from "axios";

const apiInst = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
});

const api = {
  getPrices: () => apiInst.get("/tickers"),
  getExchanges: () => apiInst.get("/exchanges"),
  getCoins: () => apiInst.get("/coins"),
  getCoinDetail: (id) => apiInst.get(`/coins/${id}`),
  getCoinMarket: (id) => apiInst.get(`/coins/${id}/markets`),
  getCoinExchange: (id) => apiInst.get(`/coins/${id}/exchanges`),
};

export default api;
