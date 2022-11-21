import Head from "next/head";
import SearchBox from "../components/Search";

import styles from "../styles/Home.module.css";

export default function Home() {

  return <div className={styles.container}>
    <Head>
      <title>Sepehr Academy</title>
    </Head>
    <SearchBox/>
  </div>;
}
