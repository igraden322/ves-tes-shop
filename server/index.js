require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routers/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();