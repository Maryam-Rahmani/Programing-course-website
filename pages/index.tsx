import Head from "next/head";

import styles from "../styles/Home.module.css";

import SearchBox from "./search";
import Courses from "./courses";
import About from "./about";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sepehr Academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SearchBox />
      <Courses />
      <About />
    </div>
  );
}
