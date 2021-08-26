import { useState, useEffect, useContext } from "react";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          style={{
            borderRadius: "5px",
            marginBottom: 20,
            width: "20%",
            minWidth: 200,
            height: "30px",
          }}
        ></input>
        <br></br>
        <button onCLick={Submit}>Login</button>
      </form>
    </div>
  );
};
export default Modal;
