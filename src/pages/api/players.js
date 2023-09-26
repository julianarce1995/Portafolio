import connectDB from "@/lib/mongodb";
import Player from "@/models/Players";

connectDB();
const playerValidations = (player) => {
  const { name } = player;
  if (!name) return false;
  return true;
};

const players = async (req, res) => {
  const { method, body } = req;
  const data = body;
  switch (method) {
    case "GET":
      try {
        const players = await Player.find().sort({ score: -1 }).limit(10);
        return res.status(200).json(players);
      } catch (err) {
        return res.status(400).json({ error: err });
      }
    case "POST":
      if (playerValidations(data)) {
        try {
          const newPlayer = new Player(data);
          await newPlayer.save();
          return res.status(200).json({ msg: "Player created successfully" });
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      } else {
        return res
          .status(400)
          .json({ msg: "validation failed! name is required" });
      }
    case "PUT":
      try {
        const playerIndex = await Player.findOneAndUpdate(
          { name: data.name },
          data
        );
        if (playerIndex !== -1) {
          return res.status(200).json({ msg: "Product updated" });
        } else {
          return res.status(404).json({ error: "Product not updated" });
        }
      } catch (err) {
        return res.status(400).json({ error: err });
      }
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
};
export default players;
