const express = require("express");
const app = express();

const dotenv = require("dotenv");

const connectDatabase  = require('./config/database');

// setting variables for config.env

dotenv.config({ path : "./config/config.env" });

//Connecting to Database
connectDatabase();

//create

//Creating own  middleware
const middleware = (req, res, next) => {
  console.log('Hello From Middleware.');

  //Setting up user variable globally
  req.user = 'Craig Nelson'
  next();
}
app.use(middleware);

//importing all routes: 
const jobs = require('./routes/jobs')

app.use ('/api/v1', jobs)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on ${process.env.PORT} in ${process.env.NODE_ENV} mode `);
});
