const express = require('express');
const routes = require("./routes/routes");
const cors = require("cors");

const PORT = 3000;


const app = express();
app.use(cors());

//Body Parser Middleware
app.use(express.json());

// routes 
app.use("/api/MQTT", routes)


const server = require("http").createServer(app);

server.listen(PORT, () => console.log(`Running on Port:${PORT}`));
