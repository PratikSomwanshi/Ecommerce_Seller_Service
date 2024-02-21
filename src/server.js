const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { ServerConfig, DBConnect } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(cors());

app.use(morgan(":method :url :status :response-time ms :date[web]"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log("connecting to database...");
    await DBConnect.connectDB();
    console.log("database connected");

    console.log(`server running on port ${ServerConfig.PORT}`);
});
