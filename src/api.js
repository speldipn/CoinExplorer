import axios from "axios";

const apiInst = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
});

export const getPrices = () => apiInst.get("/tickers");
export const getExchanges = () => apiInst.get("/exchanges");
export const getCoins = () => apiInst.get("/coins");
export const getCoinDetail = (id) => apiInst.get(`/coins/${id}`);
export const getCoinMarket = (id) => apiInst.get(`/coins/${id}/markets`);
export const getCoinExchange = (id) => apiInst.get(`/coins/${id}/exchanges`);
