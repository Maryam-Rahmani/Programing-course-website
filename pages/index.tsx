//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import RegisterForm from "./register"
import "bootstrap/dist/css/bootstrap.min.css"
import ResetPassWordForm from "../components/login/resetPassword/resetPassword"
import LoginForm from "./login"
import AllCoursesDisplay from "../components/Allcourses/AllcoursesDisplay"

export default function Home() {
  return (
    <div className="container">
      <AllCoursesDisplay/>
    </div>
  )
}
