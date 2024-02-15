const express = require("express");
const morgan = require("morgan");
const imageUpload = require("express-fileupload");

const { ServerConfig, DBConnect } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(imageUpload());

app.use(morgan(":method :url :status :response-time ms :date[web]"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async (req, res) => {
    console.log("connecting to database...");
    await DBConnect.connectDB();
    console.log("database connected");

    console.log(`server running on port ${ServerConfig.PORT}`);
});
