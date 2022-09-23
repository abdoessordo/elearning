import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { MyCourses } from "./data";

export default function DataTable({ title }) {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Button to="/">View All</Button>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Enrolled On</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Rate</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {MyCourses.map((course, index) => (
            <tr key={index}>
              <td>
                <CourseName
                  logo="https://i.imgur.com/4ZQZQ9M.png"
                  name={course.name}
                  description={`${course.lectures_count}, ${course.duration}`}
                />
              </td>
              <td>{course.enrolled}</td>
              <td>{course.progress * 100}%</td>
              <td>{course.status}</td>
              <td>{course.rating}</td>
              <td>{course.level}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

const CourseName = ({ logo, name, description }) => {
  return (
    <CourseNameWrapper>
      <img src={logo} alt={name} />
      <div>
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </CourseNameWrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th {
    padding: 1rem;
    text-align: left;
    font-weight: 400;
    font-size: 0.9rem;
    color: #797979;
  }

  td {
    padding: 1rem;
    font-size: 0.9rem;
    color: #333;
  }

  tbody > tr:hover {
    background-color: #f5f5f5;
  }
`;

const CourseNameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 0.8rem;
  }
  span {
    font-weight: 500;
  }
  p {
    font-size: 0.8rem;
    color: #666;
  }
`;
