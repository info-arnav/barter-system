const Modal = () => {
  return (
    <div>
      <form>
        {" "}
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
        <button>Register</button>
      </form>
    </div>
  );
};
export default Modal;
