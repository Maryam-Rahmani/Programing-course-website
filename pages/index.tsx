//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import RegisterForm from "./register"
import "bootstrap/dist/css/bootstrap.min.css"
import ResetPassWordForm from "../components/login/resetPassword/resetPassword"
import LoginForm from "./login"

export default function Home() {
  return (
    <div className="container">
      <div><RegisterForm/></div>
      <div><LoginForm/></div>
      <div><ResetPassWordForm/></div>
    </div>
  )
}
