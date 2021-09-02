import Head from "next/head";
import { useState } from "react";

export default function Exchange() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Head></Head>
    </div>
  );
}
