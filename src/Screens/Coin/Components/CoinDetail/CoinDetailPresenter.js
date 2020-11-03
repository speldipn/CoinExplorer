import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../../../Components/Loader";
import CoinMarket from "../CoinMarket";
import CoinExchange from "../CoinExchange";

const Container = styled.div``;

const Title = styled.h1`
  margin-bottom: 40px;
`;

const Description = styled.span`
  font-size: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Rank = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

const OpenSource = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Proof = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Structure = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

const ItemTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const MarketButton = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  border: none;
  margin-right: 10px;
  padding: 10px;
  border: 5px solid #22d8af;
  outline: 0;
  &:hover,
  &:focus {
    background-color: #22d8af;
    color: white;
  }
  border-radius: 10px;
  cursor: pointer;
`;

const ExchangeButton = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 10px;
  border: 5px solid #22d8af;
  outline: 0;
  &:hover,
  &:focus {
    background-color: #22d8af;
    color: white;
  }
  border-radius: 10px;
  cursor: pointer;
`;

const CoinDetailPresenter = ({
  loading,
  error,
  data,
  selected,
  handleButton,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Title>
        {data.name}/{data.symbol}
      </Title>
      <Description>{data.description}</Description>
      <DetailContainer>
        <Rank>
          <ItemTitle>Rank:</ItemTitle>
          {data.rank}
        </Rank>
        <Proof>
          <ItemTitle>Proof:</ItemTitle>
          {data.proof_type}
        </Proof>
        <OpenSource>
          <ItemTitle>Open Source:</ItemTitle>
          {data.open_source ? "true" : "false"}
        </OpenSource>
        <Structure>
          <ItemTitle>Structure:</ItemTitle>
          {data.org_structure}
        </Structure>
      </DetailContainer>
      <ButtonContainer>
        <MarketButton onClick={() => handleButton(1)}>MARKET</MarketButton>
        <ExchangeButton onClick={() => handleButton(2)}>
          EXCHANGE
        </ExchangeButton>
      </ButtonContainer>
      {selected === 1 && <CoinMarket id={data.id} />}
      {selected === 2 && <CoinExchange id={data.id} />}
    </Container>
  );

CoinDetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.string,
  selected: PropTypes.number,
};

export default CoinDetailPresenter;
