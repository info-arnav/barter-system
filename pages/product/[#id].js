import { useState } from "react";

export default function Product() {
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
