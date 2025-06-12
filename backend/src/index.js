const {PORT} = require('./config');
const express = require('express');
const app = express();
const apiRoutes = require("./routes");

app.use("/api",apiRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})