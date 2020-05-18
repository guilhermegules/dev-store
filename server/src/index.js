const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(cors());

require("./routes/routes")(app);

app.listen(process.env.PORT);
