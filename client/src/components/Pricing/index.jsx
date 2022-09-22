import styled from "styled-components";

export default function Pricing({ currentPrice, oldPrice }) {
  return (
    <Price>
      <CurrentPrice>${currentPrice}</CurrentPrice>
      <OldPrice>${oldPrice}</OldPrice>
    </Price>
  );
}

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 0.5rem;
`;

const OldPrice = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-decoration: line-through;
`;
