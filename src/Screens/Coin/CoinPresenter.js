import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const Item = styled.div`
  margin-bottom: 5px;
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
          <Item key={item.id}>
            <Rank>#{item.rank}</Rank> {item.name}
            {item.symbol}
          </Item>
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
