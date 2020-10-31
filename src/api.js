import axios from "axios";

const apiInst = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

const api = {
  getPrices: () => apiInst.get("/tickers"),
  getExchanges: () => apiInst.get("/exchanges"),
  getCoins: () => apiInst.get("/coins")
};

export default api;
