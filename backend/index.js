const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();
const connectDataBase = require('./config/db');

const { userRouter } = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const cookieParser = require('cookie-parser');
const controllerRoute = require('./routes/controllerRoute');

// middelware
app.use(cookieParser());
app.use(express.json());


// Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', userRouter);
app.use("/api/admin",adminRoute)
app.use("/api/controller",controllerRoute)


// connect server
const connectServer = async () => {
  try {
    await connectDataBase(); 
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  } catch (error) {
    console.log(" Error starting server:", error);
  }
};

connectServer();
