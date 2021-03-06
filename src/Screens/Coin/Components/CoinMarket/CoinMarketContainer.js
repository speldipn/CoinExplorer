import React, { Component } from "react";
import CoinMarketPresenter from "./CoinMarketPresenter";
import { getCoinMarket } from "../../../../api";

class CoinMarketContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: "",
    };
  }
  async componentDidMount() {
    try {
      const { id } = this.props;
      const result = await getCoinMarket(id);
      this.setState({ data: result.data });
    } catch {
      this.setState({ error: "Can't find markets of coin" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, error, data } = this.state;
    return <CoinMarketPresenter loading={loading} data={data} error={error} />;
  }
}

export default CoinMarketContainer;
