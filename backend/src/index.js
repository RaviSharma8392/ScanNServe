const express = require('express');
const cookieParser = require('cookie-parser');
// const connectDataBase=require("../src/config")
const {ServerConfig,DbConfig} = require('./config/index');
const routes = require('../src/routes');
const app = express();
app.use(cookieParser());
app.use(express.json());

const port = 3000;

app.use('/api', routes);

// connect server
const connectServer = async () => {
  try {
     
    app.listen(ServerConfig.PORT, async () =>
    {
      await DbConfig.connectDataBase();
      console.log(`Server running at http://localhost:${ServerConfig.PORT}`)
    }
    );
  } catch (error) {
    console.log(" Error starting server:", error);
  }
};

connectServer();
