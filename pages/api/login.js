import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  let data = {
    username: req.body.username,
    password: req.body.password,
  };
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  if (success) {
    res.send("Success");
  } else {
    res.send("Error");
  }
};
