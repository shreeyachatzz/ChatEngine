const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "61faea74-b4c9-4e86-a662-8412962a937c" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });

app.listen(3001);

