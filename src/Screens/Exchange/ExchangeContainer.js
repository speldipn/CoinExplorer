import React from "react";
import ExchangePresenter from "./ExchangePresenter";
import { getExchanges } from "../../api";

class ExchangeContainer extends React.Component {
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
      const result = await getExchanges();
      if (result) {
        const data = result.data.map((item) => {
          let website = "";
          if (item.links && item.links.website) {
            website = item.links.website[0];
          }
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            link: website,
          };
        });
        this.setState({ data });
      }
    } catch {
      this.setState({ error: "Can't find exchange information" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, data, error } = this.state;
    return <ExchangePresenter loading={loading} data={data} error={error} />;
  }
}

export default ExchangeContainer;
