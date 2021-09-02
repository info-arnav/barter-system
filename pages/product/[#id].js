import Head from "next/head";
import { useState } from "react";

export default function Product() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Head></Head>
    </div>
  );
}
