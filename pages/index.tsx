//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import RegisterForm from "./register"
import LoginForm from "./login"
import "bootstrap/dist/css/bootstrap.min.css"
import AddCourse from "../components/Allcourses/Addcourse"

export default function Home() {
  return (
    <div>
      <AddCourse/>
    </div>
  )
}
