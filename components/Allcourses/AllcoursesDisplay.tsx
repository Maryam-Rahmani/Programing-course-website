import { useEffect, useState } from "react"
import AllCoursesAPI from "./AllcoursesAPI"
import { CourseProps, CourseListInfo } from "../../types/types"
import CourseList from "./CoursesList"

const courseStyle ={
  hight: "700px",
  width: "700px",
  display: "flex",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",

}


const AllCoursesDisplay = () => {

const [course, setCourse] = useState<CourseListInfo[]>()
const course_List: CourseProps[] = []

course?.forEach((el) => {
  const description = el.lesson.description 
  const cost= el.cost
  const id= el.id
  const title = el.title
  course_List.push({ description: description, cost: cost, id: id, title: title })
})

AllCoursesAPI()
.then((response: any) => {
  const register = response.data.result
  console.log(response.data);
  localStorage.setItem("allCourses", JSON.stringify(register));
  return response.data;
});

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("allCourses") ||'""')
 setCourse(data)
}, [])

  return (
    <div className="container" >
      <CourseList
        courseList={course_List}
      />
    </div>
  )
}

export default AllCoursesDisplay