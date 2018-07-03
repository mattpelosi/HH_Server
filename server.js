const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongo = require("./mongodb");
const dotenv = require("dotenv");

dotenv.config({path:`/sf.code/hh_server_clone/server/.env`}); ///sf.code/hh_server_clone/server/.env

let port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://hh-react.herokuapp.com"); 
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("withCredentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Cookie, x-access-token"
  );
  next();
});

app.use(routes);

mongo
  .connect(process.env.MONGODB_URL)
  .then(app.listen(port))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

console.log(`server listening on port ${port}`);
