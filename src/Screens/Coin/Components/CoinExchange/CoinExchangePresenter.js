import React, { Component } from "react";
import Loader from "../../../../Components/Loader";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Item = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ItemTitle = styled.p`
  font-weight: bold;
`;

const ItemContent = styled.span`
  margin-right: 5px;
`;

const CoinExchangePresenter = ({ loading, error, data }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item, idx) => (
        <Item key={idx}>
          <ItemTitle>{item.name}</ItemTitle>
          {item.fiats.map((fiat, idx) => {
            return <ItemContent key={idx}>{fiat.symbol}</ItemContent>;
          })}
        </Item>
      ))}
    </Container>
  );

CoinExchangePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      //
    })
  ),
  error: PropTypes.string,
};

export default CoinExchangePresenter;
