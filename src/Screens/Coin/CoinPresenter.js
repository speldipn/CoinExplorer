import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const Item = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: red;
    background-color: yellow;
  }
`;

const Rank = styled.span`
  font-weight: bold;
`;

const CoinPresenter = ({ loading, data }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item) => {
        return (
          <Link to={`/coins/${item.id}`}>
            <Item key={item.id}>
              <Rank>#{item.rank}</Rank> {item.name}
              {item.symbol}
            </Item>
          </Link>
        );
      })}
    </Container>
  );

CoinPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rank: PropTypes.number,
      name: PropTypes.string,
      symbol: PropTypes.string,
    })
  ),
  error: PropTypes.string,
};

export default CoinPresenter;
