import Axios from 'axios'
import { UserInfo } from "../../types/types";
import { LoginInfo } from "../../types/types";
//import { UserName } from "../../types/types";


const API_URL = "http://querateam1.herokuapp.com/api/";

const AllCoursesAPI = () =>
  Axios.get(API_URL + 'course/getall')
  .then((response: any) => {
    const register = response.data.result
    console.log(response.data);
    //localStorage.setItem("", JSON.stringify(register));
    return response.data;
  });
 
  export default AllCoursesAPI