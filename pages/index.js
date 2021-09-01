import { useState } from "react";
import Login from "../components/register";
import Register1 from "../components/login";
import clientPromise from "../lib/mongodb";
import { connectToDatabase } from "../util/mongodb";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "../components/head";
import Navigation from "../components/navigation/nav";
import Footer from "../components/footer/footer";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Head></Head>
      <Navigation></Navigation>
      <main></main>
      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
