import { useState } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import { DetailsProps } from "../types/types";

import SearchBox from "./search";
import Courses from "./courses";
import About from "./about";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Array<DetailsProps>>();
  return (
    <div className={styles.container}>
      <Head>
        <title>Sepehr Academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SearchBox setResult={setSearchResult}/>
      <Courses courseList={searchResult} />
      <About /> 
    </div>
  );
}
