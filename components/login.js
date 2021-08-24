import { useState, useEffect, useContext } from "react";
const USAGEPREFERENCE = ["Buyer", "Seller", "Exchange", "Donate"];
const Modal = () => {
  const [usagepreference, updateUsagePreference] = useState("");
  return (
    <div>
      <form>
        {" "}
        <input
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
          placeholder="Location"
          style={{
            borderRadius: "5px",
            marginBottom: 20,
            width: "20%",
            minWidth: 200,
            height: "30px",
          }}
        ></input>
        <br></br>
        <label htmlFor="usage preference">
        UsagePreference
          <select
            id="usage preference"
            value={usagepreference}
            onChange={(e) => updateUsagePreference(e.target.value)}
            onBlur={(e) => updateUsagePreference(e.target.value)}
          >
            <option />
            {USAGEPREFERENCE.map((usagepreference) => (
              <option key={usagepreference} value={usagepreference}>
                {usagepreference}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <input
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
        <button>Login</button>
      </form>
    </div>
  );
};
export default Modal;
