export default (req, res) => {
  let success = null;
  let data = {
    username: req.body.username,
    password: req.body.password,
  };
  if (success) {
    res.send("Success");
  } else {
    res.send("Error");
  }
};
