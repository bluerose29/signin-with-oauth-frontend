import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("http://localhost:3000", fetcher);
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
      {data}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
