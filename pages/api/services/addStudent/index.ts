import Axios from "axios";

import { URL } from "../../url";

export const AddStudentToCourse = (user_id: number, course_id: string) =>
  Axios.post(`${URL}course/addStudentToCourse/${user_id}`, { course_id });
