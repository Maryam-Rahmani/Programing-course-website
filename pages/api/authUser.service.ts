import Axios from 'axios'
import { UserInfo } from "../../types/types";
import { LoginInfo } from "../../types/types";
//import { UserName } from "../../types/types";


const API_URL = "http://querateam1.herokuapp.com/api/";

const singUpAPI = ({ fullName, email, password, phoneNumber, birthDate, nationalId, profile }: UserInfo) =>
  Axios.post(API_URL + 'auth/register', {
    fullName,
    email,
    password,
    phoneNumber,
    birthDate,
    nationalId,
    profile
  })
  .then((response: any) => {
    console.log(response.result.id);
    localStorage.setItem("userId", JSON.stringify(response.result.id));
    return response.data;
  });
 

 const loginAPI = ({ email, password }: LoginInfo) =>{
  Axios.post(API_URL +'auth/login', {
    email,
    password,
  })
  .then((response: any) => {
    if (response.data.JasonWebToken) {
      let token= response.data.token
      localStorage.setItem("userToken", JSON.stringify( token ));
      
    }
    return response.data;
  });
 }
  
const logoutAPI = () => {
  localStorage.removeItem("user");
};

const authService = {
  singUpAPI ,
  loginAPI,
  logoutAPI,
};

export default authService;