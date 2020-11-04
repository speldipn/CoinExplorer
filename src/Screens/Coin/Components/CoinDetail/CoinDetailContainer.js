import React, { Component } from "react";
import { getCoinDetail } from "../../../../api";
import CoinDetailPresenter from "./CoinDetailPresenter";

class CoinDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.coin_id,
      loading: true,
      data: null,
      error: "",
      selected: 0,
    };
  }
  handleButton = (selected) => {
    this.setState({ selected });
  };
  async componentDidMount() {
    try {
      const { id } = this.state;
      const result = await getCoinDetail(id);
      this.setState({ data: result.data });
    } catch {
      this.setState({ error: "Can't find coin detail" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, data, error, selected } = this.state;
    const { handleButton } = this;
    return (
      <CoinDetailPresenter
        loading={loading}
        data={data}
        error={error}
        selected={selected}
        handleButton={handleButton}
      />
    );
  }
}

export default CoinDetailContainer;
