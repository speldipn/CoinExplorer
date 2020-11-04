import React, { Component } from "react";
import CoinExchangePresenter from "./CoinExchangePresenter";
import { getCoinExchange } from "../../../../api";

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
      const result = await getCoinExchange(id);
      this.setState({ data: result.data });
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
