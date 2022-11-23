import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { InferGetStaticPropsType } from 'next';


type ICourse ={
  capacity: number;
  cost: number;
  endDate: string;
  lesson: Object;
  startDate: string;
  students?: Array<Object>;
  teacher: Object;
  title: string;
  _id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://querateam1.herokuapp.com/api/course/getall");
  const allCourse = await res.json();

  const paths = allCourse.result.map((item: ICourse) => ({
    params: { id: item._id },
  }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://querateam1.herokuapp.com/api/course/${params.id}`
  );
  const course = await res.json();
  const details:ICourse= course.result;

  return { props: { details,} };
};
interface Props {
  details: ICourse
}
const CoursDetail = ({ details }:Props) => {
  const result = details;
  const lesson = details.lesson;
  const teacher = details.teacher;
  const id = details._id;
  console.log(details);

  return (
    <div>
      <Container className="contain">
        <Row className="title-course" key={id}>
          <Col className="first-title">
            <h1 className="course-name">{result.title}</h1>
            <br></br>
            <p>{lesson.lessonName}</p>
            <p>{lesson.description}</p>
            <p>StartAt:{result.startDate}</p>
            <p>EndAt:{result.endDate}</p>
            <p>
              In This course you Learn:{lesson.topics[0]},{lesson.topics[1]},
              {lesson.topics[2]}
            </p>
            <h6>One-Time Payment</h6>
            <span>{result.cost}$</span>
            <br />

            {/* <AddToCourse /> */}
          </Col>
          <Col className="second-title">
            <h1>{lesson.image}</h1>
          </Col>
        </Row>
      </Container>
      <Container className="second-containter">
        <Row>
          <Col>
            <h2>Course professors</h2>
            <h4>{teacher.profile}</h4>
            <h4>{teacher.fullName}</h4>
            <p>{teacher.email}</p>
          </Col>
          <Col>{/* <Survey courseId={id} /> */}</Col>
        </Row>
      </Container>
    </div>
  )
};

export default CoursDetail;