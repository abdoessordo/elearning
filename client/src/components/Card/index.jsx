import styled from "styled-components";
import Pricing from "../Pricing";
import Rating from "./Rating";

export default function Card({ description, image }) {
  return (
    <Wrapper>
      <Image src={image} />
      <Content>
        <Title>{description.title}</Title>
        <Description>
          <Subtitle>{description.subtitle}</Subtitle>
          <Rating
            rating={description.rating}
            total_reviews={description.total_reviews}
          />
          <Pricing
            currentPrice={description.current_price}
            oldPrice={description.old_price}
          />
        </Description>
        <Button>View Course</Button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 1rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333;
  }
`;
