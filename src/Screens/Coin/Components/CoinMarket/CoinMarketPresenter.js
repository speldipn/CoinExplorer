import React from "react";
import PropTypes from "prop-types";
import Loader from "../../../../Components/Loader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Item = styled.p`
  font-size: 20px;
  text-decoration: underline;
  line-height: 1.5;
`;

const CoinMarketPresenter = ({ loading, data, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item, idx) => (
        <Item key={idx}>{item.exchange_name}</Item>
      ))}
    </Container>
  );

CoinMarketPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_id: PropTypes.string,
      exchange_name: PropTypes.string,
    })
  ),
  error: PropTypes.string,
};

export default CoinMarketPresenter;
