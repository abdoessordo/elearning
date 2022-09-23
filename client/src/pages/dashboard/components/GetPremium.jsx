import styled from "styled-components";

export default function GetPremium() {
  return (
    <Wrapper>
      <h1>Get Premium</h1>
      <p>
        Get access to all of our premium features and start making more money.
      </p>
      <Button>Get Premium</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;
