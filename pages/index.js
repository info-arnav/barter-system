import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav></nav>
      <main>
        <form>
          <center>
            <input></input>
            <br></br>
            <input></input>
            <br></br>
            <button>Register</button>
          </center>
        </form>
      </main>
      <footer></footer>
    </div>
  );
}
