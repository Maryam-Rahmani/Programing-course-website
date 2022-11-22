import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
function CoursDetail({ course }: any) {
  const result = course.result;
  const lesson = course.result.lesson;
  const teacher = course.result.teacher;
  return (
    <>
      {/* <div key={course.result._id}>
        <span>{result.cost}</span>
        <h1>{lesson.image}</h1>
        <h1>{teacher.fullName}</h1>
        <h1>{teacher.email}</h1>
        <h1>{teacher.profile}</h1>
      </div> */}
      <Container className="contain">
        <Row className="title-course" key={course.result._id}>
          <Col className="first-title">
            <h1>{result.title}</h1>
            <br></br>
            <p>{lesson.lessonName}</p>
            <p>{lesson.description}</p>
            <p>StartAt:{result.startDate}</p>
            <p>EndAt:{result.endDate}</p>
            <p>
              In This course you Learn :{lesson.topics[0]},{lesson.topics[1]},
              {lesson.topics[2]}
            </p>
            <h6>One-Time Payment</h6>
            <span>{result.cost}$</span>
            <br />
            <Button variant="success" className="enroll">
              Enroll Now
            </Button>{" "}
          </Col>
          <Col className="second-title">
            <h1>{lesson.image}</h1>
            {/* <h4>{teacher.profile}</h4>
            <h6>{teacher.fullName}</h6>
            <h6>Email:{teacher.email}</h6> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://querateam1.herokuapp.com/api/course/getall");
  const allCourse = await res.json();

  const paths = allCourse.result.map((item: any) => ({
    params: { id: item._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://querateam1.herokuapp.com/api/course/${params.id}`
  );
  const course = await res.json();

  return { props: { course } };
}

export default CoursDetail;
