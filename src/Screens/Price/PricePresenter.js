import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const Item = styled.div`
  margin-bottom: 5px;
  font-weight: 500;
`;

const PricePresenter = ({ loading, data }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item) => {
        return (
          <Item key={item.id}>
            {item.name} / {item.symbol} : ${item.price}
          </Item>
        );
      })}
    </Container>
  );

PricePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  error: PropTypes.string,
};

export default PricePresenter;
