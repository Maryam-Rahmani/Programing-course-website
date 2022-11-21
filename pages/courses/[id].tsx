function CoursDetail({ course }: any) {
  return <>{console.log(course.result)}</>;
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
