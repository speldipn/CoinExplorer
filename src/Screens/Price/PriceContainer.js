import React from "react";
import PricePresenter from "./PricePresenter";
import { getPrices } from "../../api";

class PriceContainer extends React.Component {
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
      const result = await getPrices();
      if (result) {
        const data = result.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            price: item.quotes.USD.price,
          };
        });
        this.setState({ data });
      }
    } catch {
      this.setState({ error: "Can't find prices" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, data, error } = this.state;
    return <PricePresenter loading={loading} data={data} error={error} />;
  }
}

export default PriceContainer;
