export default (req, res) => {
  let success = null;
  let data = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    dateCreation: new Date(),
    dateUpdated: data.dateUpdated,
  };
  if (success) {
    res.send("Success");
  } else {
    res.send("Error");
  }
};
