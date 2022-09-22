import styled from "styled-components";
import Card from "../../../../components/Card";
import { NewCoursesData } from "./NewCoursesData";

const data_len = NewCoursesData.length;

export default function NewCourses() {
  return (
    <Container>
      <h1>New Courses</h1>
      <Wrapper>
        {NewCoursesData.map((item, index) => (
          <Card
            key={index}
            path={item.path}
            image={item.image}
            description={item.description}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${data_len}, 1fr);
  grid-gap: 1rem;
`;
