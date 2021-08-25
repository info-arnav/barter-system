import Head from "next/head";
import { useState } from "react";
import Login from "../components/login";
import Register1 from "../components/register";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <title>Barter System</title>
      <nav>
        <button onClick={() => setLogin(!login)}>Login</button>
        <button onClick={() => setRegister(!register)}>Register</button>
      </nav>
      <main>
        {login == true && (
          <div
            role="dialog"
            aria-modal="true"
            class="fade modal show"
            tabindex="-1"
            aria-labelledby="example-modal-sizes-title-lg"
            style={{ display: "block" }}
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title h4" id="example-modal-sizes-title-lg">
                    Login
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    onClick={() => setLogin(false)}
                  ></button>
                </div>
                <div class="modal-body">
                  <Login></Login>
                  <a
                    onClick={() => {
                      setLogin(false);
                      setRegister(true);
                    }}
                  >
                    Not yet registered ? Register here.
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {register == true && (
          <div
            role="dialog"
            aria-modal="true"
            class="fade modal show"
            tabindex="-1"
            aria-labelledby="example-modal-sizes-title-lg"
            style={{ display: "block" }}
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title h4" id="example-modal-sizes-title-lg">
                    Register
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    onClick={() => setRegister(false)}
                  ></button>
                </div>
                <div class="modal-body">
                  <Register1></Register1>
                  <a
                    onClick={() => {
                      setLogin(true);
                      setRegister(false);
                    }}
                  >
                    Already Registered ? Login here.
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer></footer>
    </div>
  );
}
