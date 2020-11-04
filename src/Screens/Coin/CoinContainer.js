import React from "react";
import CoinPresenter from "./CoinPresenter";
import { getCoins } from "../../api";

class CoinContainer extends React.Component {
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
      const result = await getCoins();
      result && this.setState({ data: result.data });
    } catch {
      this.setState({ error: "Can't find coin information" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, data, error } = this.state;
    return <CoinPresenter loading={loading} data={data} error={error} />;
  }
}

export default CoinContainer;
