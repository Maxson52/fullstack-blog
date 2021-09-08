let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
require("dotenv").config();
let articleRouter = require("./routers/articleRouter");

// Connect Mongoose with our MongoDB Atlas, using environment variables for security
// Then using cors to allow requests from other domains
// And finally use the router we created and listen on the specified port

let app = express();

let port = process.env.port || 8080;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yulrv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api", articleRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
