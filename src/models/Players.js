import { models, model } from "mongoose";

import playerSchema from "./schemas/PlayerSchema";

const Player = models.Player || model("Player", playerSchema);

export default Player;
