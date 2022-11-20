import Axios from "axios";
import {URL} from "../../url"
export const AddStudentToCourse =(user_id:string,course_id:string)=>Axios.post(`${URL}course/${user_id}`,{courseId:{course_id}});