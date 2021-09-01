import axios from "axios";
import { useState } from "react";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const Submit = () => {
    axios
      .post(
        {
          name: name,
          username: username,
          password: password,
          email: email,
        },
        "/api/login"
      )
      .then((e) => {
        if (e.json() == "error") {
          setError(true);
        } else {
          location.replace("/");
        }
      });
  };
  return (
    <div>
      <form>
        {error && (
          <div style={{ color: "red" }}>Invalid username or password</div>
        )}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{
            borderRadius: "5px",
            marginBottom: 20,
            width: "20%",
            minWidth: 200,
            height: "30px",
          }}
        ></input>
        <br></br>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            borderRadius: "5px",
            marginBottom: 20,
            width: "20%",
            minWidth: 200,
            height: "30px",
          }}
        ></input>
        <br></br>
        <button onClick={Submit}>Login</button>
      </form>
    </div>
  );
};
export default Modal;
