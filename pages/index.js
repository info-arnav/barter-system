import { useState } from "react";
import Login from "../components/register";
import Register1 from "../components/login";
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
