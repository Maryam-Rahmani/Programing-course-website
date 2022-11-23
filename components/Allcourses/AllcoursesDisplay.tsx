import { useEffect, useState } from "react"
import AllCoursesAPI from "./AllcoursesAPI"
import { CourseProps, CourseListInfo, CourseListProps } from "../../types/types"
import CourseList from "./CoursesList"

const courseStyle ={
  hight: "700px",
  width: "700px",
  display: "flex",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",

}

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage
  }
}
const AllCoursesDisplay = () => {

const [course, setCourse] = useState<CourseListInfo[]>([])


AllCoursesAPI()
.then((response: any) => {
  const register = response.data.result
  console.log(response.data);
  localStorage.setItem("allCourses", JSON.stringify(register));
  return response.data;
});



const data = JSON.parse(nextLocalStorage()?.getItem("allCourses") ||'""')

useEffect(() => {
  
 setCourse(data)
}, []
)

  return (
    <div className="container" >
      <CourseList
        courseList={course}
      />
    </div>
  )
}

export default AllCoursesDisplay