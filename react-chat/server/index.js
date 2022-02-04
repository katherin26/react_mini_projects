const express = require("express");
const cors = require("cors"); //This is used for cross origin requests

/*NOTE: Adding Routes for the signin and register, we can do that by requiring routes. */
const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;


/*NOTE: This is going to allow us to make cross=origin requests */
app.use(cors());

/*NOTE: This will allow us to pass json payloads from the frontEnd to the backEnd. */
app.use(express.json());

/*NOTE: This is a built-in middelware function in express it's going to be urlencoded() */
app.use(express.urlencoded());

/*NOTE: We are ready to create our first route and that's going to be app.get and is going to be a root route.*/
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

/*NOTE: ADD ROUTES */
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));