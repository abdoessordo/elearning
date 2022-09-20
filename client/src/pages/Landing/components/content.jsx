import styled from "styled-components";
import StyledButton from "../../../components/StyledButton";
import { NavLink as Link } from "react-router-dom";
import graphicsImg from "./graphics.png";

export default function Content() {
  return (
    <Wrapper>
      <div>
        <h1>Online Education</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quidem quibusdam
          doloremque quas quos voluptatum. Quisquam, quae. Quisquam, quae.
          Quisquam, quae. Quisquam, quae.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledButton label={"Register"} route="/signin" size="large" />
          <h4 style={{ marginLeft: "2rem" }}>
            or &nbsp;
            <Link to="/More">Learn More</Link>
          </h4>
        </div>
      </div>

      <ImageWrapper>
        <img src={graphicsImg} alt="graphics" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-gap: 2rem;
  width: 100%;
  color: #fff;
  h1 {
    color: #47435a;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-right: 3rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: justify;
    padding-right: 3rem;
  }
  button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    background-color: #15cdfc;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #15cdfc;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    display: unset;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 100%;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    transform: translateY(-20%);

    @media screen and (max-width: 768px) {
      transform: translateY(0%);
      display: none;
    }
  }
`;
