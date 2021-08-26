import { useState } from "react";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Submit = () => {
    axios
      .post({
        name: name,
        username: username,
        password: password,
        email: email,
      })
      .then((e) => {});
  };
  return (
    <div>
      <form>
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
        <button onClick={Submit}>Register</button>
      </form>
    </div>
  );
};
export default Modal;
