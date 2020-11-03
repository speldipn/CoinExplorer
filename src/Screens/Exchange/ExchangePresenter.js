import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const Item = styled.div`
  display: flex:
  flex-direction: columns;
  margin-bottom: 40px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  width: 100vh;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0;
`;

const ExchangePresenter = ({ loading, data }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item) => {
        return (
          <Item key={item.id}>
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <a target="_blank" href={item.link} rel="noreferrer">
              {item.link}
            </a>
          </Item>
        );
      })}
    </Container>
  );

ExchangePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      links: PropTypes.object,
    })
  ),
  error: PropTypes.string,
};

export default ExchangePresenter;
