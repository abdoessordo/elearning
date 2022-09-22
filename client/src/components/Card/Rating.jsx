import styled from "styled-components";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";

export default function Rating({ rating, total_reviews }) {
  return (
    <Wrapper>
      <RatingValue>{rating}</RatingValue>
      <RatingStars rating={rating} />
      <RatingCount>({total_reviews})</RatingCount>
    </Wrapper>
  );
}

const RatingStars = ({ rating }) => {
  const isHalf = rating - Math.floor(rating) > 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <RatingStarsWrapper>
      {Array.from({ length: Math.floor(rating) }).map((_, index) => (
        <BsStarFill key={index} color="#e59819" />
      ))}
      {isHalf && <BsStarHalf color="#e59819" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <BsStar key={index} color="#e59819" />
      ))}
    </RatingStarsWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RatingValue = styled.p`
  display: block;
  font-size: 1rem;
  font-weight: 500;
`;

const RatingStarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RatingCount = styled.p`
  font-size: 0.9rem;
  color: #666;
`;
