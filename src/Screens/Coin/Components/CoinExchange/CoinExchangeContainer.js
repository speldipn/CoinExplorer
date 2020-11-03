import React, { Component } from "react";
import CoinExchangePresenter from "./CoinExchangePresenter";
import api from "../../../../api";

class CoinExchangeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: "",
      data: null,
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.props;
      const result = await api.getCoinExchange(id);
      this.setState({ data: result.data });
      console.log("result", result.data);
    } catch {
      this.setState({ error: "Can't find exchanges of coin" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, error, data } = this.state;
    return (
      <CoinExchangePresenter loading={loading} error={error} data={data} />
    );
  }
}

export default CoinExchangeContainer;
