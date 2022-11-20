import Axios from "axios";
import {URL} from "../../url"
export const GetCourseById =(course_id:string)=>Axios.get(`${URL}course/${course_id}`);