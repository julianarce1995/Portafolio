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
  const name = body;
  switch (method) {
    case "POST":
      if (playerValidations(name)) {
        try {
          const newPlayer = await new Player(name);
          newPlayer.save();
          return res.status(200).json({ msg: "Player created successfully" });
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      } else {
        return res
          .status(400)
          .json({ msg: "validation failed! name is required" });
      }
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
};
export default players;
