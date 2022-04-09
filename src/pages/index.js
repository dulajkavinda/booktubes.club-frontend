import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Main from "./home/Home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}
